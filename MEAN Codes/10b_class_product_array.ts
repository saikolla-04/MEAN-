/* 11b
Class Product class objects & productList[] array
*/

class ProductMaster{
    pId: string;
    pName: string;
    pColor: string;
    pPrice: string;

    constructor(pId:string, pName:string, pColor: string, pPrice: string)
    {
        this.pId = pId;
        this.pName = pName;
        this.pColor = pColor;
        this.pPrice = pPrice;
    }
}

// Create an array to hold the product objects
var productList: ProductMaster[]=[];

// Create individual product objects and add them to the array
productList.push(
    new ProductMaster('lumia','Lumia','Gold','699'),
    new ProductMaster('lumia','Lumia','Pink','650'),
    new ProductMaster('lumia','Lumia','Silver','612'),

    new ProductMaster('samsung',"Samsung Edge",'Gold','799'),
    new ProductMaster('samsung',"Samsung Edge",'Pink','750'),
    new ProductMaster('samsung',"Samsung Edge",'Silver','712'),

    new ProductMaster('galaxy',"Galaxy S",'Gold','999'),
    new ProductMaster('galaxy',"Galaxy S",'Pink','950'),
    new ProductMaster('galaxy',"Galaxy S",'Silver','912')
  );
  
console.log(productList[0]);
console.log(productList[3]);
console.log(productList[6]);