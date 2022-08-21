let produitEnregistrerDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistrerDansLocalStorage);

//ln recup ce qui a dans le local storage et je peux le voir dans la console


//-----------------------Affichage des produits du panier--------------------- 

//selection de la classe ou je vais injecter le code HTML

const positionElement4 = document.querySelector("#container-produits-panier");
console.log(positionElement4);


//si le panier est vide : afficher le panier est vide 
if (produitEnregistrerDansLocalStorage === null || produitEnregistrerDansLocalStorage == 0) {  // pr que la div le panier est vide soit afficher lorsqu'il y a 0 produits 
    console.log("je suis videee");
    const panierVide = `
    <div class ="container-panier-vide">
    <div> le panier est vide </div>
    </div>
    `;

    positionElement4.innerHTML = panierVide;

    //va afficher le contenu du panier de maniere dynamique ↓ 
    //console.log(" le panier , et donc le local storage est vide");
} else {
    console.log("je ne suis pas vide");

    let structureProduitPanier = [];

    for ( k = 0; k < produitEnregistrerDansLocalStorage.length; k++) {
        console.log(produitEnregistrerDansLocalStorage.length);

        structureProduitPanier = structureProduitPanier + `
        <div class="container-recap-produit-panier">
            <div>Quantite 1 - ${produitEnregistrerDansLocalStorage[k].productName} - ${produitEnregistrerDansLocalStorage[k].option_produit} </div>    
                <div>${produitEnregistrerDansLocalStorage[k].price} <button class="btn-supprimer"> supprimer </button> </div>
        </div>
        `;
        //ln produitselection.js pr comprendre le systeme option dynamique 
        //options_produits ln 37 car c est ca qu ont envoi dans le local storage , et lui lis a partir du local storage 
        // ici l astuce pr que le panier soit afficher ↓ ln45

    }
    if (k == produitEnregistrerDansLocalStorage.length) {

        // injection html 
        positionElement4.innerHTML = structureProduitPanier;
    }



}

//------ display basket done --------------------


// gestion button delete article-------------------------------

//selection des references de touts les btn-supprimer 

let btn_supprimer = Array.from(document.querySelectorAll(".btn-supprimer"));
console.log(btn_supprimer);

//boucle for pr choper chaque produit present dans le panier 
for ( let l = 0 ; l < btn_supprimer.length; l++) {
    
    //instructions : btn_supprimer doit etre ecouter , methode addeventlistener .
    // fonction fleché qui donne les instructions  
    
    btn_supprimer[l].addEventListener("click", (event) => {
       event.preventDefault();

      let id_selectionner_delete = produitEnregistrerDansLocalStorage[l].id_produitSelectionner;
      console.log(id_selectionner_delete);
    

      // avec la methode filter 
      produitEnregistrerDansLocalStorage = produitEnregistrerDansLocalStorage.filter(el => el.id_produitSelectionner !== id_selectionner_delete); 
console.log(produitEnregistrerDansLocalStorage);
      

// une fois que c est fait , on envoi la variable tranformer en format JSON dans le local storage avc methode setItem 
localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLocalStorage));

//alert pr avettir produit supprimer du panier 
alert("ce produit a ete supprimé de votre panier");
window.location.href = "panier.html";

    })
}

       // event.preventDefault();   // evite de recharger la page si je click plusieurs fois sur supprimer
        // montre l ecoute sur le click supprimer ds la console
      // console.log(event);
       
        //selection de l id du produit qui va etre supprimer au click button
       //console.log("coucou");
       // console.log(id_selectionner_delete);
        // autre solution , methode filter  










