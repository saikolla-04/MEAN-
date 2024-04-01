/*
tech1Create.js	creates src.txt file and writes initial content (Mongo, 
Express, Angular, Node. with timestamp)

*/
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const appendFile = promisify(fs.appendFile);
(async () => {
  try {
    await writeFile('src.txt', `Time: @ ${new Date()} \n`);
    await appendFile('src.txt', "Charan!!! Mongo, Express, Angular, Node. \n\n");
    console.log('File created successfully!');
  } catch (err) {
    console.log(err);
  }
})();

