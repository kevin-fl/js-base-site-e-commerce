//---------------------- "demonstration "declaration du tableau avec les donnes qu j aurais pu recup d une api-------------------

const response = [
    {
        productName : "nom produit 1",
        description : "description - lorem ",
        option1:" option 1 produit 1",
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
//console.log(description);



//DOM selection pr affichage caracteristique produit 1

const affichageProductName1 = document.querySelector(
    ".produit1 ul li:nth-child(1)");
const affichageDescription1 = document.querySelector(
    ".produit1 ul li:nth-child(2)");
const affichageOption1 = document.querySelector(
    ".produit1 ul li:nth-child(3)");
const affichageUse_For1= document.querySelector(
    ".produit1 ul li:nth-child(4)");
const affichagePrice1= document.querySelector(
    ".produit1 ul li:nth-child(5)");
//console.log(affichageProductName1);
//console.log(affichageDescription1);
//console.log(affichageOption1);
//console.log(affichagePrice1);


//DOM affichage caracteristique produit1

affichageProductName1.innerHTML = affichageProductName1;
affichageDescription1.innerHTML = affichageDescription1;
affichageOption1.innerHTML = affichageOption1;
affichageUse_For1.innerHTML = affichageUse_For1;
affichagePrice1.innerHTML = affichagePrice1;

console.log(affichageProductName1);
console.log(affichageDescription1);