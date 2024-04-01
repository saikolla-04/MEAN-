// home.ts
//Arrow function
var navigateToProductDetail = function (productId) {
    window.location.href = "ProductDetail.html?productId=".concat(productId);
};
//Normal function
/*
function navigateToProductDetail(productId: string) {
    window.location.href = `ProductDetail.html?productId=${productId}`;
}
*/
