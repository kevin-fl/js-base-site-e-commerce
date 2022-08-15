//declaration de variable , par rapport au dataApi.js

let productName = [];
let description = [];
let use_for = [];
let price = [];
let urlPhoto = [];
let structureProduits = "";
let i = [];
// cree variable pr avoir acces au diff produits via leur id ,  via l url 
let _id = [];

//console.log(productName);

// page dynamique => fonction qui va afficher les produits dans la page automatiquement

function affichageProduits(response) {
    //seelection element du DOM
    const positionElement = document.querySelector(".container-produits");

    // boucle for pour afficher tout les objets dans page html , donc dans le website

    for (i = 0; i < affichageProduits.length; i++)


        //mettre les données que j ai en haut dans la boucle forEach recup tt les produits 
        //console.log(positionElement);
        response.forEach((element, i) => {

            _id[i] = element._id;
            productName[i] = element.productName;
            description[i] = element.description;
            use_for[i] = element.use_for;
            price[i] = element.price;
            urlPhoto[i] = element.urlPhoto;


            // on va mettre code html dedans , grace au literaux de gabarits , back tick

            // display(affichage) of all the objects on the website page 
            //tips pr un affichage correct par rapport aux boucles 
            // ↓ ou de cette maniere la fonctionne tres bien structureProduits += 
            // ln 47 permet le click sur l image ainsi qu avec l url la bonne image avec le bonne id 
            structureProduits = structureProduits + `
        <a href ="./produit.html?id=${_id[i]}">      
            <div class ="mise-en-page-produit">
                <div class="produit_photo">
                   <img src="${urlPhoto[i]}">
            </div>
            <div class="produit">
            <ul>               
                <li>ProductName : ${productName[i]}</span></li>
                <li>description :<span>${description[i]}</span> </li>
                <li>use_for: <span>${urlPhoto[i]}</span></li>
                <li>price: <span>${price[i]/100} $</span></li>
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
window.onload = () => {
    affichageProduits(response);

}


//console.log(option1 [1]);












































































