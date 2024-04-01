// home.ts
//Arrow function
const navigateToProductDetail = (productId: string): void => {
    window.location.href = `ProductDetail.html?productId=${productId}`;
};

//Normal function
/*
function navigateToProductDetail(productId: string) {
    window.location.href = `ProductDetail.html?productId=${productId}`;
}
*/

