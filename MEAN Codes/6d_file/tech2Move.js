/*
tech2Move.js		reads from src.txt, writes to dest.txt and empties src.txt
*/
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
(async () => {
    try {
      const fileData = await readFile('src.txt', 'utf8');
      await writeFile('dest.txt', `${fileData} \n`);
      await writeFile('src.txt', " "); //deletes content in src.txt
      console.log("Data moved from src to dest");
    } catch (err) {
        console.log(err);
            }
  })();

