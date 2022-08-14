//---------------------- "demonstration "declaration du tableau avec les donnes qu j aurais pu recup d une api-------------------

const response = [
    {
        productName : "nom produit 1",
        description : "description - lorem ",
        option1:" option 1 produit 1",
        urlPhoto : "./images/tunisian_pastery3.jpg",
        use_for : "",
        price : 15000

    },
    {
        productName : "nom produit 2",
        description : " description - lorem 2",
        option1:" option 2 produit 2",
        urlPhoto : "./images/tunisian_pastery3.jpg",
        use_for : "option 2",
        price : 20000,
        
    },
    {
        productName : "nom produit 3",
        description : " description - lorem 3",
        option1:" option 3 produit 3",
        urlPhoto : "./images/tunisian_pastery3.jpg",
        use_for : "option 3",
        price : 25000,

    },
    {
        productName : "nom produit 4",
        description : " desription - lorem 4",
        option1:" option 4 produit 4",
        urlPhoto : "./images/tunisian_pastery3.jpg",
        use_for : "option 4",
        price : 30000,
        
    },
    {
        productName : "nom produit 5",
        description : " description - lorem 5",
        option1:" option 5 produit 5",
        urlPhoto : "./images/tunisian_pastery3.jpg",
        use_for : "option 5",
        price : 35000,

    },
    {
        productName : "nom produit 6",
        description : " description - lorem 6",
        option1:" option 6 produit 6",
        urlPhoto : "./images/tunisian_pastery3.jpg",
        use_for : "option 6",
        price : 45000,

    },
    
];

//declaration de variable 
let productName = [];
let description = [];
let option1 = [];
let use_for = [];
let price = [];
let urlPhoto = [];
let structureProduits = "";
let i = [];

console.log(productName);

// page dynamique => fonction qui va afficher les produits dans la page automatiquement

function affichageProduits(response) {
    //seelection element du DOM
const positionElement = document.querySelector(".container-produits");

// boucle for pour afficher tout les objets dans page html , donc dans le website

for(i=0 ; i < affichageProduits.length ; i++)
    
    
    //mettre les données que j ai en haut dans la boucle forEach recup tt les produits 
    //console.log(positionElement);
    response.forEach((element, i ) => {
        productName[i] = element.productName;
        description[i] = element.description;
        option1[i] = element.option1;
        use_for[i] = element.use_for;
        price[i] = element.price;
        urlPhoto[i] = element.urlPhoto;
           // on va mettre code html dedans , grace au literaux de gabarits , back tick
           
           // display(affichage) of all the objects on the website page 
           //tips pr un affichage correct par rapport aux boucles 
           // ↓ ou de cette maniere la fonctionne tres bien structureProduits += 
           structureProduits = structureProduits +  `    
           <div class ="mise-en-page-produit">
    <div class="produit_photo">
    <img src="${urlPhoto[i]}">
    </div>
    <div class="produit">
    <ul>
    <li>ProductName : ${productName[i]}</span></li>
    <li>description :<span>${description[i]}</span> </li>
    <li>option1: <span>${option1[i]}</span></li>
    <li>use_for: <span>${urlPhoto[i]}</span></li>
    <li>price: <span>${price[i]}</span></li>
    </ul>
    <button>Commander L'article</button>
    </div>
    </div>
    `;
    
    //inject HTML 
});


positionElement.innerHTML = structureProduits;
console.log(structureProduits);
}   

// affichage peut s effectuer comme ceci ↓ la page est charger puis la fonction executer , 
// ou bien juste affichageProduits(response) fonctionne ;
window.onload = () =>  {
    affichageProduits(response);

}


//console.log(option1 [1]);












































































