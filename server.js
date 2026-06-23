const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Handler dùng cho cả Vercel (serverless) và local
function handler(req, res) {
    // Decode URI to handle potential special characters in paths
    let decodedUrl = decodeURIComponent(req.url);

    // Loại bỏ query string
    decodedUrl = decodedUrl.split('?')[0];

    // Normalize path to prevent directory traversal
    let filePath = path.join(__dirname, decodedUrl === '/' ? 'index.html' : decodedUrl);

    // Ensure requested file is inside workspace
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Fallback về index.html cho SPA routing
                fs.readFile(path.join(__dirname, 'index.html'), (err2, indexContent) => {
                    if (err2) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('<h1>404 Not Found</h1>', 'utf-8');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(indexContent, 'utf-8');
                    }
                });
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}

// Export cho Vercel serverless
module.exports = handler;

// Chạy local nếu không phải môi trường Vercel
if (require.main === module) {
    const http = require('http');
    const PORT = process.env.PORT || 3000;
    const server = http.createServer(handler);
    server.listen(PORT, () => {
        console.log(`\n==================================================`);
        console.log(`  Quizlet MLN111 Web App is running!`);
        console.log(`  Access URL: http://localhost:${PORT}/`);
        console.log(`  Press Ctrl+C to stop the server.`);
        console.log(`==================================================\n`);
    });
}
