const fs = require('fs');
const path = require('path');

function cleanText(text) {
    if (!text) return '';
    return text
        .replace(/[\(]?NHUNG\s+HOÀNG\s+SOURCE[\)]?/gi, '')
        .replace(/[\(]?NHUNG\s+HOÀNG[\)]?/gi, '')
        .replace(/[\(]?NHUNG\s+HOANG[\)]?/gi, '')
        .replace(/[\(]?KHUNG\s+HOÀNG[\)]?/gi, '')
        .replace(/[\(]?HỌC\s+THẬT[\)]?/gi, '')
        .replace(/[\(]?Hoc\s+THAT[\)]?/gi, '')
        .replace(/[\(]?Hoe\s+THAT[\)]?/gi, '')
        .replace(/\b\d{3}-\d{3}-\d{4}\b/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function compile() {
    const pageDir = path.join(__dirname, 'Page');
    const files = fs.readdirSync(pageDir)
        .filter(f => f.startsWith('Page_') && f.endsWith('.md'))
        .sort((a, b) => {
            const numA = parseInt(a.replace('Page_', '').replace('.md', ''), 10);
            const numB = parseInt(b.replace('Page_', '').replace('.md', ''), 10);
            return numA - numB;
        });

    const allQuestions = [];

    files.forEach(file => {
        const filePath = path.join(pageDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const pageNum = parseInt(file.replace('Page_', '').replace('.md', ''), 10);
        
        const lines = fileContent.split('\n').map(l => l.trim());
        
        let currentQuestion = null;
        let currentState = 'QUESTION'; // 'QUESTION', 'A', 'B', 'C', 'D'

        lines.forEach(line => {
            if (!line) return;
            if (line.startsWith('## Page')) return;
            if (line.startsWith('---')) return;

            // Check transitions
            const optMatch = line.match(/^([A-E])\s*\.\s+(.*)/i);
            if (optMatch) {
                const key = optMatch[1].toUpperCase();
                const rest = optMatch[2].trim();
                const isPhilosopher = /^(Mác|Mắc|Lênin|Lê-nin|Ăngghen|Ăng-ghen|Smith|Lurer|Copernicus|Galilê|Kant)/i.test(rest);
                if (!isPhilosopher) {
                    currentState = key;
                    if (!currentQuestion) {
                        currentQuestion = {
                            page: pageNum,
                            question: '',
                            options: {},
                            correctAnswers: null
                        };
                    }
                    currentQuestion.options[key] = cleanText(rest);
                    return;
                }
            }

            const answerMatch = line.match(/^(Đáp\s*án|Answer|Correct)\s*:\s*(.*)/i);
            if (answerMatch) {
                if (currentQuestion) {
                    const ansStr = answerMatch[2].toUpperCase();
                    const answers = ansStr.split(/[\s,]+/)
                        .map(a => a.trim())
                        .filter(a => ['A', 'B', 'C', 'D', 'E'].includes(a));
                    currentQuestion.correctAnswers = answers;
                    
                    // Post-clean question and options
                    currentQuestion.question = cleanText(currentQuestion.question);
                    for (let k in currentQuestion.options) {
                        currentQuestion.options[k] = cleanText(currentQuestion.options[k]);
                    }

                    if (currentQuestion.question && Object.keys(currentQuestion.options).length > 0) {
                        allQuestions.push(currentQuestion);
                    } else {
                        console.warn(`[Warning] Invalid question block on Page ${pageNum}:`, currentQuestion);
                    }
                }
                currentQuestion = null;
                currentState = 'QUESTION';
                return;
            }

            // Append based on current state
            if (currentState === 'QUESTION') {
                if (!currentQuestion) {
                    currentQuestion = {
                        page: pageNum,
                        question: line,
                        options: {},
                        correctAnswers: null
                    };
                } else {
                    currentQuestion.question += ' ' + line;
                }
            } else {
                if (currentQuestion && currentQuestion.options[currentState] !== undefined) {
                    currentQuestion.options[currentState] += ' ' + line;
                }
            }
        });
    });

    // Post-validation
    console.log(`Total questions compiled: ${allQuestions.length}`);
    const missingFields = allQuestions.filter(q => !q.question || Object.keys(q.options).length === 0 || !q.correctAnswers || q.correctAnswers.length === 0);
    if (missingFields.length > 0) {
        console.error(`[Error] Found ${missingFields.length} questions with missing fields!`);
        console.error(JSON.stringify(missingFields.slice(0, 5), null, 2));
        process.exit(1);
    }

    // Write to files
    const jsonPath = path.join(__dirname, 'questions.json');
    const jsPath = path.join(__dirname, 'questions.js');

    fs.writeFileSync(jsonPath, JSON.stringify(allQuestions, null, 2), 'utf8');
    fs.writeFileSync(jsPath, `const QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};`, 'utf8');

    console.log('Successfully written to questions.json and questions.js');
}

if (require.main === module) {
    compile();
}
