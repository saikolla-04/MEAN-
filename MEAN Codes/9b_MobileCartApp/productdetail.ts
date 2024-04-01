const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

//Set mobile name
var mobileName="";
// declaring enum variable and assigning default values
enum MobilePriceLumia {Gold="699", Pink="650", Silver="612"};
enum MobilePriceSamsung {Gold="799", Pink="750", Silver="712"};
enum MobilePriceGalaxy {Gold="999", Pink="950", Silver="912"};

enum MobileStatusLumia {Gold="Available", Pink="Available", Silver="Not Available"};
enum MobileStatusSamsung {Gold="Available", Pink="Available", Silver="Not Available"};
enum MobileStatusGalaxy {Gold="Available", Pink="Available", Silver="Not Available"};

enum MobileDiscountLumia {Gold="15", Pink="10", Silver="8"};
enum MobileDiscountSamsung {Gold="14", Pink="9", Silver="7"};
enum MobileDiscountGalaxy {Gold="12", Pink="7", Silver="5"};

enum MobileImageLumia {Gold="Images/Part1/lumia_640xl.jpg", 
                  Pink="Images/Part1/nokialumia_pink.jpg", 
                  Silver="Images/Part1/lumia_silver.jpg"
                 }  
enum MobileImageSamsung {Gold="Images/Part1/samsung_edge_gold.jpg",
                  Pink="Images/Part1/samsung_edge_black.jpg", 
                  Silver="Images/Part1/samsung_edge_silver.jpg"
                 } 
enum MobileImageGalaxy { Gold="Images/Part1/SamsungGalaxy_Gold.jpg",
                  Pink="Images/Part1/SamsungGalaxy_Pink.jpg",
                  Silver="Images/Part1/samsung-galaxy-note-7_gold.jpg"
                 }                                            
enum MobileBrand {Lumia, 
                  Samsung, 
                  Galaxy
                 }    
enum MobileDescription {Lumia="Nokia Lumia is fast & reliable. It has 120GB memory.", 
                  Samsung="Samsung Edge is professional master piece. It has HD front-back cameras.", 
                  Galaxy="Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory.", 
                 }              

//update details by product id, arrow function
//function updateMobileDetails(id: string) {
const updateMobileDetails = (id: string) : void => {    
    var image=document.getElementById("phoneImage") as HTMLImageElement;
    if (id=="lumia"){
        image.src=MobileImageLumia.Gold;
        document.getElementById("pPrice").innerHTML=MobilePriceLumia.Gold;
        document.getElementById("pAvailable").innerHTML=MobileStatusLumia.Gold;
        document.getElementById("pDiscount").innerHTML=MobileDiscountLumia.Gold;
        //Display price for each color when page is loaded
        document.getElementById("gold").innerHTML=MobilePriceLumia.Gold;
        document.getElementById("pinkgold").innerHTML=MobilePriceLumia.Pink;
        document.getElementById("silver").innerHTML=MobilePriceLumia.Silver;
        document.getElementById("pDescription").innerHTML=MobileDescription.Lumia;
    }
    else if (id=="samsung"){
        image.src=MobileImageSamsung.Gold;
        document.getElementById("phoneImage").innerHTML=MobileImageSamsung.Gold;
        document.getElementById("pPrice").innerHTML=MobilePriceSamsung.Gold;
        document.getElementById("pAvailable").innerHTML=MobileStatusSamsung.Gold;
        document.getElementById("pDiscount").innerHTML=MobileDiscountSamsung.Gold;
        //Display price for each color when page is loaded
        document.getElementById("gold").innerHTML=MobilePriceSamsung.Gold;
        document.getElementById("pinkgold").innerHTML=MobilePriceSamsung.Pink;
        document.getElementById("silver").innerHTML=MobilePriceSamsung.Silver;
        document.getElementById("pDescription").innerHTML=MobileDescription.Samsung;
    }
    else if (id=="galaxy"){
        image.src=MobileImageGalaxy.Gold;
        document.getElementById("phoneImage").innerHTML=MobileImageGalaxy.Gold;
        document.getElementById("pPrice").innerHTML=MobilePriceGalaxy.Gold;
        document.getElementById("pAvailable").innerHTML=MobileStatusGalaxy.Gold;
        document.getElementById("pDiscount").innerHTML=MobileDiscountGalaxy.Gold;
        //Display price for each color when page is loaded
        document.getElementById("gold").innerHTML=MobilePriceGalaxy.Gold;
        document.getElementById("pinkgold").innerHTML=MobilePriceGalaxy.Pink;
        document.getElementById("silver").innerHTML=MobilePriceGalaxy.Silver;
        document.getElementById("pDescription").innerHTML=MobileDescription.Galaxy;
    }
}

// functon to get mobile detail by color, Arrow function
//function getMobileByColor(color: string) {
const getMobileByColor = (color: string): void => {
var image=document.getElementById("phoneImage") as HTMLImageElement;
if (productId=="lumia"){
    if (color=="gold"){
        image.src=MobileImageLumia.Gold;
        document.getElementById("pPrice").innerHTML=MobilePriceLumia.Gold;
        document.getElementById("pAvailable").innerHTML=MobileStatusLumia.Gold;
        document.getElementById("pDiscount").innerHTML=MobileDiscountLumia.Gold;
    }
    else if (color=="pink"){
        image.src=MobileImageLumia.Pink;
        document.getElementById("phoneImage").innerHTML=MobileImageLumia.Pink;
        document.getElementById("pPrice").innerHTML=MobilePriceLumia.Pink;
        document.getElementById("pAvailable").innerHTML=MobileStatusLumia.Pink;
        document.getElementById("pDiscount").innerHTML=MobileDiscountLumia.Pink;
    }
    else if (color=="silver"){
        image.src=MobileImageLumia.Silver;
        document.getElementById("phoneImage").innerHTML=MobileImageLumia.Silver;
        document.getElementById("pPrice").innerHTML=MobilePriceLumia.Silver;
        document.getElementById("pAvailable").innerHTML=MobileStatusLumia.Silver;
        document.getElementById("pDiscount").innerHTML=MobileDiscountLumia.Silver;
    }
} 
else if (productId=="samsung"){
    if (color=="gold"){
        image.src=MobileImageSamsung.Gold;
        document.getElementById("pPrice").innerHTML=MobilePriceSamsung.Gold;
        document.getElementById("pAvailable").innerHTML=MobileStatusSamsung.Gold;
        document.getElementById("pDiscount").innerHTML=MobileDiscountSamsung.Gold;
    }
    else if (color=="pink"){
        image.src=MobileImageSamsung.Pink;
        document.getElementById("phoneImage").innerHTML=MobileImageSamsung.Pink;
        document.getElementById("pPrice").innerHTML=MobilePriceSamsung.Pink;
        document.getElementById("pAvailable").innerHTML=MobileStatusSamsung.Pink;
        document.getElementById("pDiscount").innerHTML=MobileDiscountSamsung.Pink;
    }
    else if (color=="silver"){
        image.src=MobileImageSamsung.Silver;
        document.getElementById("phoneImage").innerHTML=MobileImageSamsung.Silver;
        document.getElementById("pPrice").innerHTML=MobilePriceSamsung.Silver;
        document.getElementById("pAvailable").innerHTML=MobileStatusSamsung.Silver;
        document.getElementById("pDiscount").innerHTML=MobileDiscountSamsung.Silver;
    }
}
else if (productId=="galaxy"){
    if (color=="gold"){
        image.src=MobileImageGalaxy.Gold;
        document.getElementById("pPrice").innerHTML=MobilePriceGalaxy.Gold;
        document.getElementById("pAvailable").innerHTML=MobileStatusGalaxy.Gold;
        document.getElementById("pDiscount").innerHTML=MobileDiscountGalaxy.Gold;
    }
    else if (color=="pink"){
        image.src=MobileImageGalaxy.Pink;
        document.getElementById("phoneImage").innerHTML=MobileImageGalaxy.Pink;
        document.getElementById("pPrice").innerHTML=MobilePriceGalaxy.Pink;
        document.getElementById("pAvailable").innerHTML=MobileStatusGalaxy.Pink;
        document.getElementById("pDiscount").innerHTML=MobileDiscountGalaxy.Pink;
    }
    else if (color=="silver"){
        image.src=MobileImageGalaxy.Silver;
        document.getElementById("phoneImage").innerHTML=MobileImageGalaxy.Silver;
        document.getElementById("pPrice").innerHTML=MobilePriceGalaxy.Silver;
        document.getElementById("pAvailable").innerHTML=MobileStatusGalaxy.Silver;
        document.getElementById("pDiscount").innerHTML=MobileDiscountGalaxy.Silver;
    }
}
}
//Passes productId from HomePage.html to ProductDetail.html
updateMobileDetails(productId);
