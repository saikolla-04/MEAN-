// logic to display the Product details with interface object as parameter
function getProductDetails(productobj) {
    return 'Product ID: ' + productobj.productId + '\nProduct name is : ' + productobj.productName;
}
// declaring a variable having interface properties
var prodObject1 = { productId: 1001, productName: 'Mobile' };
var prodObject2 = { productId: 1002, productName: 'iMobile' };
// declaring variable and invoking Product details function
var productDetails1 = getProductDetails(prodObject1);
// line to populate the created product on console
console.log(productDetails1);
// declaring variable and invoking Product details function
var productDetails2 = getProductDetails(prodObject2);
// line to populate the created product on console
console.log(productDetails2);
