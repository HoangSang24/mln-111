const fs = require('fs');
const path = require('path');

function cleanText(text) {
    if (!text) return '';
    return text
        .replace(/[\(]?NHUNG\s+HOÀNG\s+SOURCE[\)]?/gi, '')
        .replace(/[\(]?NHUNG\s+HOÀNG[\)]?/gi, '')
        .replace(/[\(]?NHUNG\s+HOANG[\)]?/gi, '')
        .replace(/[\(]?HỌC\s+THẬT[\)]?/gi, '')
        .replace(/[\(]?Hoc\s+THAT[\)]?/gi, '')
        .replace(/[\(]?Hoe\s+THAT[\)]?/gi, '')
        .replace(/4\s*\|/g, '')
        .replace(/\b\d{3}-\d{3}-\d{4}\b/g, '')
        .replace(/\boa\b$/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function parseMd() {
    const mdPath = path.join(__dirname, 'MLN.md');
    const content = fs.readFileSync(mdPath, 'utf8');
    const lines = content.split('\n').map(l => l.trim());

    const questionStartRegex = /\s+([A-D]{1,4}|Cc|Aa|Bb|Dd|AD|BC|ABC|ABCD|AB|CD)$/;

    const questions = [];
    let currentQuestion = null;
    let currentOption = null; // 'A', 'B', 'C', 'D'
    let currentPage = 1;

    function saveCurrentQuestion() {
        if (currentQuestion) {
            // Clean up text fields
            currentQuestion.question = cleanText(currentQuestion.questionLines.join(' '));
            delete currentQuestion.questionLines;

            // Clean options
            for (let key in currentQuestion.options) {
                currentQuestion.options[key] = cleanText(currentQuestion.options[key].join(' '));
            }

            // Standardize correct answers
            const ansStr = currentQuestion.rawAnswer;
            let normalized = [];
            if (ansStr) {
                const upper = ansStr.toUpperCase();
                if (upper === 'CC') normalized = ['C'];
                else if (upper === 'AA') normalized = ['A'];
                else if (upper === 'BB') normalized = ['B'];
                else if (upper === 'DD') normalized = ['D'];
                else {
                    for (let char of upper) {
                        if (['A', 'B', 'C', 'D'].includes(char)) {
                            normalized.push(char);
                        }
                    }
                }
            }
            currentQuestion.correctAnswers = normalized;
            delete currentQuestion.rawAnswer;

            // Only add if it has a question and at least some options
            if (currentQuestion.question && Object.keys(currentQuestion.options).length > 0) {
                questions.push(currentQuestion);
            }
        }
    }

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue;

        // Check for page markers
        if (line.startsWith('## Page ')) {
            const pageNum = parseInt(line.replace('## Page ', ''), 10);
            if (!isNaN(pageNum)) {
                currentPage = pageNum;
            }
            continue;
        }

        // Check if this line is an option prefix
        const optionMatch = line.match(/^([A-D])\s*\.\s*(.*)/i);
        if (optionMatch) {
            if (currentQuestion) {
                currentOption = optionMatch[1].toUpperCase();
                currentQuestion.options[currentOption] = [optionMatch[2]];
            }
            continue;
        }

        // If we have an active option, and this line doesn't start with a new question
        const isNewQuestionStart = questionStartRegex.test(line) && 
                                   !line.startsWith('A.') && 
                                   !line.startsWith('B.') && 
                                   !line.startsWith('C.') && 
                                   !line.startsWith('D.') && 
                                   !line.startsWith('##');

        if (isNewQuestionStart) {
            // Save the previous question
            saveCurrentQuestion();

            // Extract the correct answer from the end of the line
            const match = line.match(questionStartRegex);
            const rawAns = match[1];
            const cleanLine = line.substring(0, line.length - match[0].length).trim();

            // Start a new question
            currentQuestion = {
                page: currentPage,
                questionLines: [cleanLine],
                options: {},
                rawAnswer: rawAns
            };
            currentOption = null;
        } else {
            // Continuation of text
            if (currentQuestion) {
                if (currentOption) {
                    currentQuestion.options[currentOption].push(line);
                } else {
                    currentQuestion.questionLines.push(line);
                }
            }
        }
    }

    // Save final question
    saveCurrentQuestion();

    // Write JSON file
    fs.writeFileSync(path.join(__dirname, 'questions.json'), JSON.stringify(questions, null, 2), 'utf8');
    // Write JS file for direct local browser usage (avoids CORS)
    fs.writeFileSync(path.join(__dirname, 'questions.js'), `const QUESTIONS = ${JSON.stringify(questions, null, 2)};`, 'utf8');
    
    console.log(`Successfully parsed ${questions.length} questions into questions.json and questions.js.`);
    
    // Print a sample
    if (questions.length > 0) {
        console.log('\nSample Question (cleaned):');
        console.log(JSON.stringify(questions[0], null, 2));
    }
}

parseMd();
