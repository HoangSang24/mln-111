const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'MLN.md'), 'utf8');
const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);

// Let's check lines that look like the start of a question
const questionStartRegex = /\s+([A-D]{1,4}|Cc|Aa|Bb|Dd|AD|BC|ABC|ABCD|AB|CD)$/;

let matchCount = 0;
for (let i = 0; i < Math.min(lines.length, 500); i++) {
    const line = lines[i];
    if (questionStartRegex.test(line) && !line.startsWith('A.') && !line.startsWith('B.') && !line.startsWith('C.') && !line.startsWith('D.') && !line.startsWith('##')) {
        console.log(`Line ${i}: ${line}`);
        matchCount++;
    }
}
console.log(`Total matches in first 500 lines: ${matchCount}`);
