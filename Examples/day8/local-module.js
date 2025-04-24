import fs from 'fs';
import os from 'os';
// os module will give platform information which are important for different tools - Angualr, React, mongodb
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
// reading the package.json file content
let content = fs.readFileSync('package.json');
// since it will be in buffer array format we convert to string
console.log(content.toString()); 
// writing the file content, {flag:"a+"} appends the new content with the old content
// omitting flag re-writes the file
fs.writeFileSync("hello.txt", "Hello World\n", {flag:"a+"});
