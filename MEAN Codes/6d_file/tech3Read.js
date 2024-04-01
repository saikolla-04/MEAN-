/* tech3Read.js 		reads from dest.txt and displays on console
*/
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
(async () => {
    try {
      const fileData = await readFile('dest.txt', 'utf8');
      console.log("Read from dest file:");
      console.log(fileData);
    } catch (err) {
        console.log(err);
            }
  })();
