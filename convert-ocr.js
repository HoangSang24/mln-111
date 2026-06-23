const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');
const { createWorker } = require('tesseract.js');

const pdfPath = path.join(__dirname, 'MLN.pdf');
const mdPath = path.join(__dirname, 'MLN.md');

async function run() {
    console.log('Loading PDF file...');
    const dataBuffer = fs.readFileSync(pdfPath);
    const parser = new PDFParse({ data: dataBuffer });
    const doc = await parser.load();
    const totalPages = doc.numPages;
    console.log(`PDF loaded. Total pages: ${totalPages}`);

    // Initialize Markdown file with a header
    let header = `# MLN Document (OCR)\n\n`;
    header += `**Total Pages:** ${totalPages}\n`;
    header += `**Converted on:** ${new Date().toLocaleString()}\n`;
    header += `\n---\n\n`;
    fs.writeFileSync(mdPath, header, 'utf8');

    console.log('Initializing Tesseract worker (vie+eng)...');
    const worker = await createWorker('vie+eng');
    console.log('Tesseract worker initialized.');

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const startTime = Date.now();
        console.log(`[Page ${pageNum}/${totalPages}] Processing...`);

        try {
            // Extract images for this specific page
            const imgResult = await parser.getImage({ first: pageNum, last: pageNum, imageBuffer: true });
            const pageData = imgResult.pages[0];

            if (!pageData || !pageData.images || pageData.images.length === 0) {
                console.log(`[Page ${pageNum}/${totalPages}] No images found on this page.`);
                fs.appendFileSync(mdPath, `## Page ${pageNum}\n\n*No images or text content found on this page.*\n\n---\n\n`, 'utf8');
                continue;
            }

            // Find the largest image (by data buffer length)
            const mainImage = pageData.images.reduce((prev, current) => {
                return (prev.data.length > current.data.length) ? prev : current;
            });

            console.log(`[Page ${pageNum}/${totalPages}] Running OCR on main image (${(mainImage.data.length / 1024).toFixed(1)} KB)...`);
            const imageBuffer = Buffer.from(mainImage.data);
            const { data: { text } } = await worker.recognize(imageBuffer);

            // Clean text formatting a bit
            const cleanedText = text.trim();

            // Append to markdown
            let pageContent = `## Page ${pageNum}\n\n`;
            pageContent += cleanedText || '*[Image contains no readable text]*';
            pageContent += `\n\n---\n\n`;

            fs.appendFileSync(mdPath, pageContent, 'utf8');
            const duration = ((Date.now() - startTime) / 1000).toFixed(1);
            console.log(`[Page ${pageNum}/${totalPages}] Completed in ${duration}s.`);
        } catch (error) {
            console.error(`[Page ${pageNum}/${totalPages}] Failed to process page:`, error);
            fs.appendFileSync(mdPath, `## Page ${pageNum}\n\n*Failed to perform OCR on this page.*\n\n---\n\n`, 'utf8');
        }
    }

    console.log('Cleaning up resources...');
    await worker.terminate();
    await parser.destroy();
    console.log(`\nAll done! Converted markdown saved to: ${mdPath}`);
}

run().catch(err => {
    console.error('Unhandled error in script:', err);
});
