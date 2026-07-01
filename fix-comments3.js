const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'components', 'Comments.tsx');
let c = fs.readFileSync(filePath, 'utf8');
// Replace any .text property access on comment objects
c = c.replace(/(\w+)\.text\b/g, '$1.content');
fs.writeFileSync(filePath, c, 'utf8');
console.log('OK: all .text replaced with .content');