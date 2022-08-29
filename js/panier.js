let produitEnregistrerDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistrerDansLocalStorage);

//ln recup ce qui a dans le local storage et je peux le voir dans la console


//******************************************************Affichage des produits du panier********************************************************************************** 

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

    for (k = 0; k < produitEnregistrerDansLocalStorage.length; k++) {
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

//-------------------------------------------------------------------- display basket done -------------------------------------------------------------------------------


// ***************************************************************gestion button delete article**************************************************************************************************************

//selection des references de touts les btn-supprimer 

let btn_supprimer = Array.from(document.querySelectorAll(".btn-supprimer"));
console.log(btn_supprimer);

//boucle for pr choper chaque produit present dans le panier 
for (let l = 0; l < btn_supprimer.length; l++) {

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

positionElement4.insertAdjacentHTML("beforeend", btn_supprime_tout_html);


//↑cette methode prend en parametre beforebegin ou afterbengin opu beforened etc ... mdn :)

//la selection de la reference du bouton "btn-tous-supprimer-panier"

const btn_supprime_tout_js = document.querySelector(".btn-supprime-tout");
//console.log(btn_supprime_tout_js);

//suppression de la key "produit" du localstorage pr vider entierement le panier 

btn_supprime_tout_js.addEventListener('click', (e) => {
    e.preventDefault();
    //.removeItem pr vider le local storage 
    localStorage.removeItem("produit");

    //alert panier a ete vidé 

    alert("le panier a été vidé");

    //rechargement de la page panier 
    window.location.href = "panier.html";
});



// ↑FIN -------------------------------------------------LE BOUTON POUR VIDER TT LE PANIER----------------------------------------------------------------------------↑FIN 

//************************************************************MONTANT TOTAL DU PANIER ************************************************************************************
// partie price --> declarer variable pr pouvoir y mettre les prix qui sont presents dans le panier

let priceTotalCalculated = [];

// aller chercher les prix ds le panier sous fiorme de array 

for (let p = 0; p < produitEnregistrerDansLocalStorage.length; p++) {
    let priceProduitPanier = produitEnregistrerDansLocalStorage[p].price;
    // console.log(priceProduitPanier); 

    //mettre les price du panier dans la var priceTotalCalculated
    priceTotalCalculated.push(priceProduitPanier);
    // console.log(priceTotalCalculated);

}


//additionner les prix dans le tableau priceTotalCalculated avec methode .reduce --> accumule les valeurs pour les reduire a une seule valeur 


const reducer = (accumulator, currentValue) => accumulator + currentValue;
//console.log(priceTotalCalculated.reduce(reducer));

const priceTotal = priceTotalCalculated.reduce(reducer, 0); // rajoute le 0 car si panier vide ce la va créer une erreur ;) 
//console.log(priceTotal);


// &fficher le total dans le html 

const affichagePriceHtml = `<div class="affichage-prix-html">le prix est de : ${priceTotal} $ </div>`

//injection Html apres le dernier enfant (a la suite de tout ceci )

positionElement4.insertAdjacentHTML("beforeend", affichagePriceHtml);



//--------------------------------------------------------------FIN montant du panier ↑----------------------------------------------------------------------------------


//*************************************************************************FORMULAIRE ************************************************************************************

//Le formulaire dans le html mais dans le js pour pouvoir interagir avec 

const afficherFormulaireHtml = () => {

    //selection element du DOM pour le formulaire 

    const positionElement5 = document.querySelector("#container-produits-panier");

    const structureFormulaire = `
    <!--Le formulaire dans le html -->
            
    <div id = "formulaire-commande">
        <h2 id="h2form">FORMULAIRE A REMPLIR POUR VOTRE COMMANDE </h2>
        
        <form action="#" id="form">

        <label for="prenom"> Prenom</label><span id="prenomMissing" class="couleurChampMissing"></span>
        <input type="text" id="prenom" name="prenom" 
        minlength="4" maxlength="14" size="16" placeholder="prenom">
        
        <label for="nom">Nom</label><span id ="nomMissing" class="couleurChampMissing"></span>
        <input type="text" id="nom" name="nom" placeholder="nom">
        
        <label for="adresse">Adresse</label><span id ="adresseMissing" class="couleurChampMissing"></span>
        <textarea type="text" id="adresse" name="adresse"></textarea>
        
        <label for="ville">Ville</label><span id ="villeMissing" class="couleurChampMissing"></span>
        <input type="text" id="ville" name="ville">

        <label for="codePostale">Code Postale</label><span id ="codepostaleMissing" class="couleurChampMissing"></span>
        <input type="number" id="codePostale" name="codePostale" placeholder ="number">

        <label for="telephone">telephone</label><span id ="telMissing" class="couleurChampMissing"></span>
        <input type="text" id="telephone" name="telephone" placeholder="champ obligatoire">
        
        <label for="email">E-mail</label><span id ="emailMissing" class="couleurChampMissing"></span>
        <input type="email" id="email" name="email" placeholder="champ obligatoire">
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

btnEnvoyerForm.addEventListener("click", (e) => {
    e.preventDefault();

    //recuperation des valeurs du formulaire
    /*const formulaireValues = {
        prenom : document.querySelector("#prenom").value,
        nom :    document.querySelector("#nom").value,  
        adresse :   document.querySelector("#adresse").value,
        ville : document.querySelector("#ville").value,
        telephone : document.querySelector("#telephone").value,
        email : document.querySelector("#email").value,
    }
    */
    //console.log(formulaireValues);

    // const ln 235 autre moyen en creant une classe a la place de la const formulaireValues

    class Formulaire {
        constructor(input) {    // on laisse proprietes du constructor vide car document.queryselector . / si input ici alors input dans la ln 259 
            // dans l exemple avec cet input , montre qu ont peut decide de prendre seulement une proprietes de l objet , exemple prendre que prenom 
            // mais pour ca faut tt mettre en greenscreen , a voir pq je n ai pas encore compris 
            this.prenom = document.querySelector("#prenom").value;
            this.nom = document.querySelector("#nom").value;
            this.adresse = document.querySelector("#adresse").value;
            this.ville = document.querySelector("#ville").value;
            this.telephone = document.querySelector("#telephone").value;
            this.email = document.querySelector("#email").value;
            this.codePostale = document.querySelector("#codePostale").value;
            //truc sympa ↓ avec litteraux de gabarits
            // this.input = document.querySelector(`#${input}`).value;
        }
    }

    //appel de l instance de la Class Formulaire pr créer l objet formulaireValues2
    const formulaireValues2 = new Formulaire();     //("prenom") par exemple pr juste recup le prenom 

    console.log("formulaireValues2");
    console.log(formulaireValues2);

    // mettre l objet formulaireValues dans le local storage 
    //recuperation des valeurs du formulaire  pour les mettres ds le local storage
    // NB : je recup les valeurs en storage car ce n est pas une vrai api , sinon j aurais utiliser fetch post ! ;)


    //**********************************************************GESTION VALIDATION DU FORMULAIRE*************************************************************************
    // ---------utilisation des regex--------------------- NB y a des createur de regex sur le net , plus simple

    const textAlert = (value) => {
        return `${value} "chiffre et symbole pas autorisé ne pas depasser 20 charact merci"`;

    };

    //↓ ceci s appelle une expression de fonction , on declare une const puis fonction fleché
    const regExPrenomNomVille = (value) => {
        return /^[A-Z a-z]{2,20}$/.test(value);
    };
    
    const regExCodePostale = (value)=> {
        return /^[0-9]{5}$/.test(value);
    };
    
    const regEmail = (value)=> {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };

    const regExAdresse = (value) => {
        return /^[A-Z a-z 0-9]{5,50}$/.test(value);   // j ai mis des espaces pr accepter espaces ds le form , sinon mettre /s a la fin du 0-9/s]
    };

    const regExTelephone = (value) => {
        return /^[0-9]{5,12}$/.test(value);
    };

    // function pr gerer l affichage au dessus de l input  du remplissage du champ correctement , de touts les champs au lieu de faire un par un 

    function dataChampManquant(queryselectorId){
        document.querySelector(`#${queryselectorId}`).textContent = "";
    };
    function prenomControle() {
        // controle la validite du prenom 
        const lePrenom = formulaireValues2.prenom;
        if (regExPrenomNomVille(lePrenom)) {    // {2,20} entre min 2 et max 20 lettres , on appel ca les quantificateurs
            dataChampManquant("prenomMissing");
            //console.log("ok");
            return true;
        } else {
            //console.log("ko");
            document.querySelector("#prenomMissing").textContent = "veuillez remplir correctement le prenom";   //.textContent permet de raj du texte 
            alert(textAlert("Prenom :"));
            return false;
        }
    };

    //console.log("lePrenom");
    //console.log(lePrenom);

    function nomControle() {
        //controle validite du nom
        const leNom = formulaireValues2.nom;
        if (regExPrenomNomVille(leNom)) {
            dataChampManquant("nomMissing");
            console.log("true nomcontrole");
            return true;
        } else {
            document.querySelector("#nomMissing").textContent = "veuillez bien remplir le nom";
            alert(textAlert("Nom :"));
            return false;
        }
    }

    function adresseControle() {
        const lAdresse = formulaireValues2.adresse;
        if (regExAdresse(lAdresse)) {
            dataChampManquant("adresseMissing");
           // console.log("true adresse controller");
            return true;
        } else {
            document.querySelector("#adresseMissing").textContent = "veuillez remplir correctement l adresse";
            alert(textAlert("adresse :"));
            return false;
        }
    }

    function villeControle() {
        //controle validite du code postale 
        const laVille = formulaireValues2.ville;
        if (regExPrenomNomVille(laVille)) {
            dataChampManquant("villeMissing");
           // console.log("true ville controle");
            return true;
        } else {
            document.querySelector("#villeMissing").textContent = "veuillez bien remplir la ville";
            alert(textAlert("ville :"));   // pr touts les alert a remplacer par la suite part une fenetre modale
            return false;
        }
    }
    function codePostaleControle() {
        //controle validite du code postale 
        const leCodePostale = formulaireValues2.codePostale;
        if (regExCodePostale(leCodePostale)) {
            dataChampManquant("codepostaleMissing");
            console.log("true code postale controle");
            return true;
        } else {
            document.querySelector("#codepostaleMissing").textContent = "veuillez bien remplir le code postale";
            alert("code postale : doit etre composé de 5 chiffres");   // pr touts les alert a remplacer par la suite part une fenetre modale
            return false;
        }
    }

    function emailControle() {
        //controle validite de l email
        const leEmail = formulaireValues2.email;
        if (regEmail(leEmail)) {
            dataChampManquant("emailMissing");
            console.log("true email controle");
            return true;
        } else {
            document.querySelector("#emailMissing").textContent = "veuillez mettre un email valide";
            alert("l'email est incorrecte");   // pr touts les alert a remplacer par la suite part une fenetre modale
            return false;
        }
    }

    function telephoneControle(){
        const leTelephone = formulaireValues2.telephone;
        if(regExTelephone(leTelephone)){
            dataChampManquant("telMissing");
            console.log("tel true controle");
            return true;
        } else {
            document.querySelector("#telMissing").textContent= "veuillez entrer un num de tel valide";
            alert("le tel est incorrect");
            return false;
        }
    }

    // controle validité du formulaire avant envoi et surtt stockage dans le localstorage
    if (prenomControle() && nomControle() && adresseControle() && villeControle() && codePostaleControle() && emailControle() && telephoneControle()) {
        //mettre l objet formulaireValues2 ds le local storage
        localStorage.setItem("formulaireValues2", JSON.stringify(formulaireValues2));  // va cree un objet formulaireValues mais pas ce qu on attend , car il a besoin d un string dans la methode . check l appli du localstorage ce sera ecrit object object .
        //console.log('prenomControle');
        //console.log(prenomControle());
    } else {
        // console.log(prenomControle());
        alert("veuillez bien remplir le formulaire");
    }



    //↑---------------****************************FIN - GESTION VALIDATION DU FORMULAIRE**************************************-------------------------------------------------------------


    // c et pr ca on a rajouter JSON.stringify et la ca fonctionne on a acces a tous les sections du formulaireValues
    //↑ nickel a tt recuperer ds le local storage.
    // mettre les valeurs du form et mettre les produits selectionnes dans l obet a envoyer vers le serveur 
    //2 objets que je met dans un objet 

    const aEnvoyer = {
        produitEnregistrerDansLocalStorage,
        //formulaireValues     // ln 235 soit cette methode soit avec class
        //Formulaire
    }
    console.log("aEnvoyer");
    console.log(aEnvoyer);

    //envoie de l objet " aEnvoyer" vers le serveur 

});


//***********************************************Mettre le contenu du local storage ds le champs du formulaire*****************************************************en gros que les données entrée ds le form reste la meme si je reactualise la page ou je vais chercher un autre produit 
//--------------------------------------------------prendre la key ds le localstorage et la mettre ds une variable-----------------------------------------------------------------

const dataLocalStorage = localStorage.getItem("formulaireValues2");

//convertir la string pr avoir un  object js ln 299
// meth ode structured clone a tester un de ces 4 ;)
const dataLocalStorageObject = JSON.parse(dataLocalStorage);

//mettre les values du localstorage du formulaire dans les champs pr qu il reste // NB pas la methode la plus belle , car pas mal de code sur ln 303
/*
document.querySelector("#prenom").setAttribute("value", dataLocalStorageObject.prenom);
document.querySelector("#nom").setAttribute("value", dataLocalStorageObject.nom);

// 2eme methode plus sympa et un peu moins longue 
document.querySelector("#telephone").value = dataLocalStorageObject.telephone;
document.querySelector("#ville").value = dataLocalStorageObject.ville;
document.querySelector("#adresse").value = dataLocalStorageObject.adresse;
document.querySelector("#email").value = dataLocalStorageObject.email;
*/
console.log("dataLocalStorage");
console.log(dataLocalStorageObject);

//3eme methode la meilleur et la + pro ! avec une fonction pr que le champ du formulaire soit rempli par les donnees du localstorage si elle existe

function remplirInputDepuisLocalStorage(input) {
    document.querySelector(`#${input}`).value = dataLocalStorageObject[input];
};

remplirInputDepuisLocalStorage("prenom");  // -> laisse le prenom ds le formulaire via ce qui se trouve ds le localstorage
remplirInputDepuisLocalStorage("nom");    // -> idem 
remplirInputDepuisLocalStorage("telephone");    // -> idem 
remplirInputDepuisLocalStorage("adresse");    // -> idem 
remplirInputDepuisLocalStorage("email");    // -> idem 
remplirInputDepuisLocalStorage("ville");    // -> idem 



//--------------*******************Formulaire validation du champ avc conditions avt envoi ds local storage*********************---------------------------------

