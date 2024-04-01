//NodeJS Example
function greet(name) {
    console.log("Hello, " + name + "!");
  }
greet("Node JS");  // Output: Node JS

const calculateArea = (width, height) => width * height;
let area = calculateArea(5, 10);  // area will be 50

/*
Asynchronous Functions:
Node.js excels at handling asynchronous operations (e.g., I/O, network requests).
Use callbacks for traditional asynchronous handling:
*/
// Include the 'fs' module
const fs = require('fs');

// Synchronous function
function syncFunction() {
    console.log('Synchronous Function');
}

// Asynchronous function using fs.readFile
function asyncFunction() {
    fs.readFile('6a1_data.ttt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Asynchronous Function:', data);
    });
}

// Call synchronous function
syncFunction();

// Call asynchronous function
asyncFunction();

