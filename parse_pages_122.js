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
        .replace(/\s+/g, ' ')
        .trim();
}

function compile() {
    const pageDir = path.join(__dirname, 'Page_122');
    if (!fs.existsSync(pageDir)) {
        console.error('Page_122 directory not found!');
        return;
    }

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
        let currentState = 'QUESTION';

        lines.forEach(line => {
            if (!line) return;
            if (line.startsWith('## Page')) return;

            const optMatch = line.match(/^([A-Ea-e])\s*[\.\)\:\,]\s*(.*)/i);
            if (optMatch) {
                const key = optMatch[1].toUpperCase();
                const rest = optMatch[2].trim();
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

            const answerMatch = line.match(/^Đáp\s*án\s*:\s*(.*)/i);
            if (answerMatch) {
                if (currentQuestion) {
                    const ansStr = answerMatch[1].toUpperCase();
                    const answers = ansStr.split(/[\s,]+/)
                        .map(a => a.trim())
                        .filter(a => ['A', 'B', 'C', 'D', 'E'].includes(a));
                    currentQuestion.correctAnswers = answers;
                    
                    currentQuestion.question = cleanText(currentQuestion.question);
                    for (let k in currentQuestion.options) {
                        currentQuestion.options[k] = cleanText(currentQuestion.options[k]);
                    }

                    if (currentQuestion.question && Object.keys(currentQuestion.options).length > 0) {
                        allQuestions.push(currentQuestion);
                    }
                }
                currentQuestion = null;
                currentState = 'QUESTION';
                return;
            }

            if (line.startsWith('(Giải thích:') || line.startsWith('(Đảng') || line.startsWith('(Văn kiện') || line.startsWith('(NXB')) {
                if (currentQuestion) {
                    currentQuestion.explanation = line;
                }
                return;
            }

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

    allQuestions.forEach((q, idx) => {
        q.id = idx;
    });

    console.log(`Successfully compiled ${allQuestions.length} MLN122 questions from Page_122 directory.`);

    const jsonPath = path.join(__dirname, 'questions_mln122.json');
    const jsPath = path.join(__dirname, 'questions_mln122.js');

    fs.writeFileSync(jsonPath, JSON.stringify(allQuestions, null, 2), 'utf8');
    fs.writeFileSync(jsPath, `var QUESTIONS_MLN122 = ${JSON.stringify(allQuestions, null, 2)}; if (typeof window !== 'undefined') window.QUESTIONS_MLN122 = QUESTIONS_MLN122;`, 'utf8');
    console.log('Saved questions_mln122.json and questions_mln122.js successfully!');
}

if (require.main === module) {
    compile();
}
