/* 9d
Consider that developer needs to declare a manufacturer's array holding
4 objects with id and price as a parameter and needs to implement an
arrow function - myfunction to populate the id parameter of manufacturers array
whose price is greater than or equal to 200 dollars then below mentioned
code-snippet would fit into this requirement.
*/
// declaring an Array with 4 objects
var manufacturers = [{ id: 'Samsung', price: 1500 },
    { id: 'Microsoft', price: 2000 },
    { id: 'Apple', price: 4000 },
    { id: 'Micromax', price: 3000 },
    { id: 'Redmi', price: 1500 }
];
var test;
// Arrow function to populate the details of Array whose price is greater than 2000
function myFunction() {
    test = manufacturers.filter(function (manufacturer) { return manufacturer.price >= 2000; });
}
// self-invoking an arrow function
myFunction();
console.log('Manufacturer array whose price >= 2000 : ');
// logic to populate the manufacturer array details based on id value
for (var _i = 0, test_1 = test; _i < test_1.length; _i++) {
    var item = test_1[_i];
    console.log(item.id);
}
