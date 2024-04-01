/* 10b
Module Name: Creating an Interface
Declare an interface named - Product with two properties like productId and 
productName with a number and string datatype and need to implement logic to 
populate the Product details using this interface. 
*/
// declaring an interface
interface Product {
    productId: number ;
    productName: string ;
}

// logic to display the Product details with interface object as parameter
function getProductDetails(productobj: Product): string {
    return 'Product ID: ' +productobj.productId+ '\nProduct name is : ' + productobj.productName;
}

// declaring a variable having interface properties
const prodObject1 = {productId: 1001, productName: 'Mobile'};
const prodObject2 = {productId: 1002, productName: 'iMobile'};

// declaring variable and invoking Product details function
const productDetails1: string = getProductDetails(prodObject1);
// line to populate the created product on console
console.log(productDetails1);

// declaring variable and invoking Product details function
const productDetails2: string = getProductDetails(prodObject2);

// line to populate the created product on console
console.log(productDetails2);


