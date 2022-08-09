//---------------------- "demonstration "declaration du tableau avec les donnes qu j aurais pu recup d une api-------------------

const response = [
    {
        productName : "nom produit 1",
        description : "description - lorem ",
        option1:" option 1 produit 1",
        url_photo : "tunisian_pastery.jpg",
        use_for : "",
        price : 15000

    },
    {
        productName : "nom produit 2",
        description : " description - lorem 2",
        option2:" option 2 produit 2",
        use_for : "option 2",
        price : 20000,

    },
    {
        productName : "nom produit 3",
        description : " description - lorem 3",
        option3:" option 3 produit 3",
        use_for : "option 3",
        price : 25000,

    },
    {
        productName : "nom produit 4",
        description : " desription - lorem 4",
        option4:" option 4 produit 4",
        use_for : "option 4",
        price : 30000,

    },
    {
        productName : "nom produit 5",
        description : " description - lorem 5",
        option5:" option 5 produit 5",
        use_for : "option 5",
        price : 35000,

    },
    
]
console.log(response);
console.log(response[0].price);

//Mettre les donnees sur la page index.html------

//---produit01----
//1ere etape , dataAPI mettre les donnees de l api dans les variables

const productName = response[0].productName;
const description = response[0].description;
const option1 = response[0].option1;
const use_for = response[0].use_for;
const price = response[0].price;
const url = response[0].url_photo;
//console.log(description);
//console.log(productName);



//DOM selection pr affichage caracteristique produit 1

const affichageProductName1 = document.querySelector(
    ".produit1 ul li:nth-child(1) span " );
const affichageDescription1 = document.querySelector(
    ".produit1 ul li:nth-child(2) span ");
const affichageOption1 = document.querySelector(
    ".produit1 ul li:nth-child(3) span ");
const affichageUse_For1= document.querySelector(
    ".produit1 ul li:nth-child(4) span ");
const affichagePrice1= document.querySelector(
    ".produit1 ul li:nth-child(5) span ");
const affichageUrl = document.querySelector(
    ".produit1 ul li:nth-child(0) span");

//console.log(affichageProductName1);
//console.log(affichageDescription1);
//console.log(affichageOption1);
//console.log(affichagePrice1);

//DOM affichage caracteristique produit1

affichageProductName1.innerHTML = productName;
affichageDescription1.innerHTML = description;
affichageOption1.innerHTML = option1;
affichageUse_For1.innerHTML = use_for;
affichagePrice1.innerHTML = price;
affichageUrl.innerHTML = url;

console.log(productName);
console.log(description);


// PRODUIT 2 ---------------------------

// 1ere etape mettre donnée de l api dans variables
const productName2 = response[1].productName;
const description2 = response[1].description;
const option12 = response[1].option2;
const use_for2 = response[1].use_for;
const price2 = response[1].price;


//DOM selection pr affichage caracteristique produit 2

const affichageProductName2 = document.querySelector(
    ".produit2 ul li:nth-child(1) span " );
const affichageDescription2 = document.querySelector(
    ".produit2 ul li:nth-child(2) span ");
const affichageOption2 = document.querySelector(
    ".produit2 ul li:nth-child(3) span ");
const affichageUse_For2= document.querySelector(
    ".produit2 ul li:nth-child(4) span ");
const affichagePrice2= document.querySelector(
    ".produit2 ul li:nth-child(5) span ");
//DOM affichage caracteristique produit2



affichageProductName2.innerHTML = productName2;
affichageDescription2.innerHTML = description2;
affichageOption2.innerHTML = option12;
affichageUse_For2.innerHTML = use_for2;
affichagePrice2.innerHTML = price2;

console.log(productName2);



//Produit03 --------------------------

const productName3 = response[2].productName;
const description3 = response[2].description;
const option13 = response[2].option3;
const use_for3 = response[2].use_for;
const price3 = response[2].price;


//DOM selection pr affichage caracteristique produit 2

const affichageProductName3 = document.querySelector(
    ".produit3 ul li:nth-child(1) span " );
const affichageDescription3 = document.querySelector(
    ".produit3 ul li:nth-child(2) span ");
const affichageOption3 = document.querySelector(
    ".produit3 ul li:nth-child(3) span ");
const affichageUse_For3= document.querySelector(
    ".produit3 ul li:nth-child(4) span ");
const affichagePrice3= document.querySelector(
    ".produit3 ul li:nth-child(5) span ");
//DOM affichage caracteristique produit2



affichageProductName3.innerHTML = productName3;
affichageDescription3.innerHTML = description3;
affichageOption3.innerHTML = option13;
affichageUse_For3.innerHTML = use_for3;
affichagePrice3.innerHTML = price3;

//Produit04------------------------

const productName4 = response[3].productName;
const description4 = response[3].description;
const option14 = response[3].option4;
const use_for4 = response[3].use_for;
const price4 = response[3].price;


//DOM selection pr affichage caracteristique produit 2

const affichageProductName4 = document.querySelector(
    ".produit4 ul li:nth-child(1) span " );
const affichageDescription4 = document.querySelector(
    ".produit4 ul li:nth-child(2) span ");
const affichageOption4 = document.querySelector(
    ".produit4 ul li:nth-child(3) span ");
const affichageUse_For4= document.querySelector(
    ".produit4 ul li:nth-child(4) span ");
const affichagePrice4= document.querySelector(
    ".produit4 ul li:nth-child(5) span ");
//DOM affichage caracteristique produit2



affichageProductName4.innerHTML = productName4;
affichageDescription4.innerHTML = description4;
affichageOption4.innerHTML = option14;
affichageUse_For4.innerHTML = use_for4;
affichagePrice4.innerHTML = price4;



//Produit05--------------------------------------
//Produit04------------------------

const productName5 = response[4].productName;
const description5 = response[4].description;
const option15 = response[4].option5;
const use_for5 = response[4].use_for;
const price5 = response[4].price;


//DOM selection pr affichage caracteristique produit 2

const affichageProductName5 = document.querySelector(
    ".produit5 ul li:nth-child(1) span " );
const affichageDescription5 = document.querySelector(
    ".produit5 ul li:nth-child(2) span ");
const affichageOption5 = document.querySelector(
    ".produit5 ul li:nth-child(3) span ");
const affichageUse_For5= document.querySelector(
    ".produit5 ul li:nth-child(4) span ");
const affichagePrice5= document.querySelector(
    ".produit5 ul li:nth-child(5) span ");
//DOM affichage caracteristique produit2



affichageProductName5.innerHTML = productName5;
affichageDescription5.innerHTML = description5;
affichageOption5.innerHTML = option15;
affichageUse_For5.innerHTML = use_for5;
affichagePrice5.innerHTML = price5;