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

    
// tjrs creer le code html du button avant la methode insertAdjacentHTML sinon ca ne fonctionne pas !

const btn_supprime_tout_html = `
<button class= "btn-supprime-tout"> Vider le panier </button> 
`;
//insertion du button ds le html du panier , car pr que le queryselector existe , faut que le button existe !
//aller recup la class container-panier-vide dans le panier.js

positionElement4.insertAdjacentHTML("beforeend",btn_supprime_tout_html);


//↑cette methode prend en parametre beforebegin ou afterbengin opu beforened etc ... mdn :)

//la selection de la reference du bouton "btn-tous-supprimer-panier"

const btn_supprime_tout_js = document.querySelector(".btn-supprime-tout");
console.log(btn_supprime_tout_js);

//suppression de la key "produit" du localstorage pr vider entierement le panier 

btn_supprime_tout_js.addEventListener('click' , (e)=> {
    e.preventDefault();
    //.removeItem pr vider le local storage 
    localStorage.removeItem("produit");

    //alert panier a ete vidé 
    
    alert("le panier a été vidé");
    
    //rechargement de la page panier 
    window.location.href = "panier.html";
});



// ↑FIN -------------------------------LE BOUTON POUR VIDER TT LE PANIER 

//MONTANT TOTAL DU PANIER -----------------------------
// partie price --> declarer variable pr pouvoir y mettre les prix qui sont presents dans le panier

let priceTotalCalculated = [];

// aller chercher les prix ds le panier sous fiorme de array 

for ( let p = 0 ; p <  produitEnregistrerDansLocalStorage.length ; p++){
    let priceProduitPanier =  produitEnregistrerDansLocalStorage[p].price;
   // console.log(priceProduitPanier); 
   
   //mettre les price du panier dans la var priceTotalCalculated
   priceTotalCalculated.push(priceProduitPanier);
   console.log(priceTotalCalculated);
   
}


//additionner les prix dans le tableau priceTotalCalculated avec methode .reduce --> accumule les valeurs pour les reduire a une seule valeur 


const reducer = (accumulator , currentValue) => accumulator + currentValue;
//console.log(priceTotalCalculated.reduce(reducer));

const priceTotal = priceTotalCalculated.reduce(reducer,0); // rajoute le 0 car si panier vide ce la va créer une erreur ;) 
//console.log(priceTotal);


 // &fficher le total dans le html 

 const affichagePriceHtml = `<div class="affichage-prix-html">le prix est de : ${priceTotal} $ </div>`

 //injection Html apres le dernier enfant (a la suite de tout ceci )
 
 positionElement4.insertAdjacentHTML("beforeend", affichagePriceHtml) ;



//--------------------FIN montant du panier ↑


//FORMULAIRE -------------------------------------------------------------------

 
 //Le formulaire dans le html mais dans le js pour pouvoir interagir avec 

 const afficherFormulaireHtml = () => {

    //selection element du DOM pour le formulaire 

    const positionElement5 = document.querySelector("#container-produits-panier");
   
    const structureFormulaire = `
    <!--Le formulaire dans le html -->
            
    <div id = "formulaire-commande">
        <h2 id="h2form">FORMULAIRE A REMPLIR POUR VOTRE COMMANDE </h2>
        
        <form action="#" id="form">
            <label for="prenom"> Prenom</label>
        <input type="text" id="prenom" name="prenom" 
        minlength="4" maxlength="14" size="16" placeholder="prenom">
        
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom" placeholder="nom">
        
        <label for="adresse">Adresse</label>
        <textarea type="text" id="adresse" name="adresse"></textarea>
        
        <label for="ville">Ville</label>
        <input type="text" id="ville" name="ville">
        
        <label for="telephone">telephone</label>
        <input type="text" id="telephone" name="telephone" placeholder="champ obligatoire">
        
        <label for="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="champ obligatoire">
        <button id="envoyerform" type="submit" name="envoyerform">Valider la commande</button>
    </form>
    `;

    //injection HTML

    positionElement5.insertAdjacentHTML("afterend", structureFormulaire);

 };

 // mnt ca va affichage le formulaire 

 afficherFormulaireHtml();

//selection du bouton pour envoyer le formulaire 
const btnEnvoyerForm = document.querySelector("#envoyerform");
//console.log(btnEnvoyerForm);


 //addeventlistener pr ecouter du button formulaire

 btnEnvoyerForm.addEventListener("click" , (e)=>{
    e.preventDefault();
    //recuperation des valeurs du formulaire  pour les mettres ds le local storage
    // NB : je recup les valeurs en storage car ce n est pas une vrai api , sinon j aurais utiliser fetch post ! ;)

     localStorage.setItem("prenom", document.querySelector("#prenom").value);
     localStorage.setItem("nom", document.querySelector("#nom").value);
     localStorage.setItem("adresse", document.querySelector("#adresse").value);
     localStorage.setItem("ville", document.querySelector("#ville").value);
     localStorage.setItem("telephone", document.querySelector("#telephone").value);
     localStorage.setItem("email", document.querySelector("#email").value);
   
     //console.log(document.querySelector("#prenom").value);
     
//↑ nickel a tt recuperer ds le local storage.

//Mettre les values du formulaire ds un objet , tjrs dans le addeveventlistener sinon ne fonctionne pas

const formulaire = {
    prenom: localStorage.getItem("prenom"),
    nom:localStorage.getItem("nom"),
    adresse:localStorage.getItem("adresse"),
    ville:localStorage.getItem("ville"),
    telephone:localStorage.getItem("telehone"),
    email:localStorage.getItem("email")
}
console.log("formulaire");
console.log(formulaire);

// mettre les valeurs du form et mettre les produits selectionnes dans l obet a envoyer vers le serveur 
//2 objets que je met dans un objet 

const aEnvoyer = {
   produitEnregistrerDansLocalStorage,
   formulaire

}
console.log("aEnvoyer");
console.log(aEnvoyer);

//envoie de l objet " envoyer" vers le serveur 

})    






