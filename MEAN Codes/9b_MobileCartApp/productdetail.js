var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get('productId');
//Set mobile name
var mobileName = "";
// declaring enum variable and assigning default values
var MobilePriceLumia;
(function (MobilePriceLumia) {
    MobilePriceLumia["Gold"] = "699";
    MobilePriceLumia["Pink"] = "650";
    MobilePriceLumia["Silver"] = "612";
})(MobilePriceLumia || (MobilePriceLumia = {}));
;
var MobilePriceSamsung;
(function (MobilePriceSamsung) {
    MobilePriceSamsung["Gold"] = "799";
    MobilePriceSamsung["Pink"] = "750";
    MobilePriceSamsung["Silver"] = "712";
})(MobilePriceSamsung || (MobilePriceSamsung = {}));
;
var MobilePriceGalaxy;
(function (MobilePriceGalaxy) {
    MobilePriceGalaxy["Gold"] = "999";
    MobilePriceGalaxy["Pink"] = "950";
    MobilePriceGalaxy["Silver"] = "912";
})(MobilePriceGalaxy || (MobilePriceGalaxy = {}));
;
var MobileStatusLumia;
(function (MobileStatusLumia) {
    MobileStatusLumia["Gold"] = "Available";
    MobileStatusLumia["Pink"] = "Available";
    MobileStatusLumia["Silver"] = "Not Available";
})(MobileStatusLumia || (MobileStatusLumia = {}));
;
var MobileStatusSamsung;
(function (MobileStatusSamsung) {
    MobileStatusSamsung["Gold"] = "Available";
    MobileStatusSamsung["Pink"] = "Available";
    MobileStatusSamsung["Silver"] = "Not Available";
})(MobileStatusSamsung || (MobileStatusSamsung = {}));
;
var MobileStatusGalaxy;
(function (MobileStatusGalaxy) {
    MobileStatusGalaxy["Gold"] = "Available";
    MobileStatusGalaxy["Pink"] = "Available";
    MobileStatusGalaxy["Silver"] = "Not Available";
})(MobileStatusGalaxy || (MobileStatusGalaxy = {}));
;
var MobileDiscountLumia;
(function (MobileDiscountLumia) {
    MobileDiscountLumia["Gold"] = "15";
    MobileDiscountLumia["Pink"] = "10";
    MobileDiscountLumia["Silver"] = "8";
})(MobileDiscountLumia || (MobileDiscountLumia = {}));
;
var MobileDiscountSamsung;
(function (MobileDiscountSamsung) {
    MobileDiscountSamsung["Gold"] = "14";
    MobileDiscountSamsung["Pink"] = "9";
    MobileDiscountSamsung["Silver"] = "7";
})(MobileDiscountSamsung || (MobileDiscountSamsung = {}));
;
var MobileDiscountGalaxy;
(function (MobileDiscountGalaxy) {
    MobileDiscountGalaxy["Gold"] = "12";
    MobileDiscountGalaxy["Pink"] = "7";
    MobileDiscountGalaxy["Silver"] = "5";
})(MobileDiscountGalaxy || (MobileDiscountGalaxy = {}));
;
var MobileImageLumia;
(function (MobileImageLumia) {
    MobileImageLumia["Gold"] = "Images/Part1/lumia_640xl.jpg";
    MobileImageLumia["Pink"] = "Images/Part1/nokialumia_pink.jpg";
    MobileImageLumia["Silver"] = "Images/Part1/lumia_silver.jpg";
})(MobileImageLumia || (MobileImageLumia = {}));
var MobileImageSamsung;
(function (MobileImageSamsung) {
    MobileImageSamsung["Gold"] = "Images/Part1/samsung_edge_gold.jpg";
    MobileImageSamsung["Pink"] = "Images/Part1/samsung_edge_black.jpg";
    MobileImageSamsung["Silver"] = "Images/Part1/samsung_edge_silver.jpg";
})(MobileImageSamsung || (MobileImageSamsung = {}));
var MobileImageGalaxy;
(function (MobileImageGalaxy) {
    MobileImageGalaxy["Gold"] = "Images/Part1/SamsungGalaxy_Gold.jpg";
    MobileImageGalaxy["Pink"] = "Images/Part1/SamsungGalaxy_Pink.jpg";
    MobileImageGalaxy["Silver"] = "Images/Part1/samsung-galaxy-note-7_gold.jpg";
})(MobileImageGalaxy || (MobileImageGalaxy = {}));
var MobileBrand;
(function (MobileBrand) {
    MobileBrand[MobileBrand["Lumia"] = 0] = "Lumia";
    MobileBrand[MobileBrand["Samsung"] = 1] = "Samsung";
    MobileBrand[MobileBrand["Galaxy"] = 2] = "Galaxy";
})(MobileBrand || (MobileBrand = {}));
var MobileDescription;
(function (MobileDescription) {
    MobileDescription["Lumia"] = "Nokia Lumia is fast & reliable. It has 120GB memory.";
    MobileDescription["Samsung"] = "Samsung Edge is professional master piece. It has HD front-back cameras.";
    MobileDescription["Galaxy"] = "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory.";
})(MobileDescription || (MobileDescription = {}));
//update details by product id, arrow function
//function updateMobileDetails(id: string) {
var updateMobileDetails = function (id) {
    var image = document.getElementById("phoneImage");
    if (id == "lumia") {
        image.src = MobileImageLumia.Gold;
        document.getElementById("pPrice").innerHTML = MobilePriceLumia.Gold;
        document.getElementById("pAvailable").innerHTML = MobileStatusLumia.Gold;
        document.getElementById("pDiscount").innerHTML = MobileDiscountLumia.Gold;
        //Display price for each color when page is loaded
        document.getElementById("gold").innerHTML = MobilePriceLumia.Gold;
        document.getElementById("pinkgold").innerHTML = MobilePriceLumia.Pink;
        document.getElementById("silver").innerHTML = MobilePriceLumia.Silver;
        document.getElementById("pDescription").innerHTML = MobileDescription.Lumia;
    }
    else if (id == "samsung") {
        image.src = MobileImageSamsung.Gold;
        document.getElementById("phoneImage").innerHTML = MobileImageSamsung.Gold;
        document.getElementById("pPrice").innerHTML = MobilePriceSamsung.Gold;
        document.getElementById("pAvailable").innerHTML = MobileStatusSamsung.Gold;
        document.getElementById("pDiscount").innerHTML = MobileDiscountSamsung.Gold;
        //Display price for each color when page is loaded
        document.getElementById("gold").innerHTML = MobilePriceSamsung.Gold;
        document.getElementById("pinkgold").innerHTML = MobilePriceSamsung.Pink;
        document.getElementById("silver").innerHTML = MobilePriceSamsung.Silver;
        document.getElementById("pDescription").innerHTML = MobileDescription.Samsung;
    }
    else if (id == "galaxy") {
        image.src = MobileImageGalaxy.Gold;
        document.getElementById("phoneImage").innerHTML = MobileImageGalaxy.Gold;
        document.getElementById("pPrice").innerHTML = MobilePriceGalaxy.Gold;
        document.getElementById("pAvailable").innerHTML = MobileStatusGalaxy.Gold;
        document.getElementById("pDiscount").innerHTML = MobileDiscountGalaxy.Gold;
        //Display price for each color when page is loaded
        document.getElementById("gold").innerHTML = MobilePriceGalaxy.Gold;
        document.getElementById("pinkgold").innerHTML = MobilePriceGalaxy.Pink;
        document.getElementById("silver").innerHTML = MobilePriceGalaxy.Silver;
        document.getElementById("pDescription").innerHTML = MobileDescription.Galaxy;
    }
};
// functon to get mobile detail by color
//function getMobileByColor(color: string) {
var getMobileByColor = function (color) {
    var image = document.getElementById("phoneImage");
    if (productId == "lumia") {
        if (color == "gold") {
            image.src = MobileImageLumia.Gold;
            document.getElementById("pPrice").innerHTML = MobilePriceLumia.Gold;
            document.getElementById("pAvailable").innerHTML = MobileStatusLumia.Gold;
            document.getElementById("pDiscount").innerHTML = MobileDiscountLumia.Gold;
        }
        else if (color == "pink") {
            image.src = MobileImageLumia.Pink;
            document.getElementById("phoneImage").innerHTML = MobileImageLumia.Pink;
            document.getElementById("pPrice").innerHTML = MobilePriceLumia.Pink;
            document.getElementById("pAvailable").innerHTML = MobileStatusLumia.Pink;
            document.getElementById("pDiscount").innerHTML = MobileDiscountLumia.Pink;
        }
        else if (color == "silver") {
            image.src = MobileImageLumia.Silver;
            document.getElementById("phoneImage").innerHTML = MobileImageLumia.Silver;
            document.getElementById("pPrice").innerHTML = MobilePriceLumia.Silver;
            document.getElementById("pAvailable").innerHTML = MobileStatusLumia.Silver;
            document.getElementById("pDiscount").innerHTML = MobileDiscountLumia.Silver;
        }
    }
    else if (productId == "samsung") {
        if (color == "gold") {
            image.src = MobileImageSamsung.Gold;
            document.getElementById("pPrice").innerHTML = MobilePriceSamsung.Gold;
            document.getElementById("pAvailable").innerHTML = MobileStatusSamsung.Gold;
            document.getElementById("pDiscount").innerHTML = MobileDiscountSamsung.Gold;
        }
        else if (color == "pink") {
            image.src = MobileImageSamsung.Pink;
            document.getElementById("phoneImage").innerHTML = MobileImageSamsung.Pink;
            document.getElementById("pPrice").innerHTML = MobilePriceSamsung.Pink;
            document.getElementById("pAvailable").innerHTML = MobileStatusSamsung.Pink;
            document.getElementById("pDiscount").innerHTML = MobileDiscountSamsung.Pink;
        }
        else if (color == "silver") {
            image.src = MobileImageSamsung.Silver;
            document.getElementById("phoneImage").innerHTML = MobileImageSamsung.Silver;
            document.getElementById("pPrice").innerHTML = MobilePriceSamsung.Silver;
            document.getElementById("pAvailable").innerHTML = MobileStatusSamsung.Silver;
            document.getElementById("pDiscount").innerHTML = MobileDiscountSamsung.Silver;
        }
    }
    else if (productId == "galaxy") {
        if (color == "gold") {
            image.src = MobileImageGalaxy.Gold;
            document.getElementById("pPrice").innerHTML = MobilePriceGalaxy.Gold;
            document.getElementById("pAvailable").innerHTML = MobileStatusGalaxy.Gold;
            document.getElementById("pDiscount").innerHTML = MobileDiscountGalaxy.Gold;
        }
        else if (color == "pink") {
            image.src = MobileImageGalaxy.Pink;
            document.getElementById("phoneImage").innerHTML = MobileImageGalaxy.Pink;
            document.getElementById("pPrice").innerHTML = MobilePriceGalaxy.Pink;
            document.getElementById("pAvailable").innerHTML = MobileStatusGalaxy.Pink;
            document.getElementById("pDiscount").innerHTML = MobileDiscountGalaxy.Pink;
        }
        else if (color == "silver") {
            image.src = MobileImageGalaxy.Silver;
            document.getElementById("phoneImage").innerHTML = MobileImageGalaxy.Silver;
            document.getElementById("pPrice").innerHTML = MobilePriceGalaxy.Silver;
            document.getElementById("pAvailable").innerHTML = MobileStatusGalaxy.Silver;
            document.getElementById("pDiscount").innerHTML = MobileDiscountGalaxy.Silver;
        }
    }
};
//Passes productId from HomePage.html to ProductDetail.html
updateMobileDetails(productId);
