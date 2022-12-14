// recup de la chaine de requete (la suite de l url a partir du ?) voir mdn urlsearchparams/get

// on va utiliser la methode window.location.search --> recupere/defini l emplacement de l url en cours , de l objet de fenetre .
// window.location.search
// query= requete , string = chaine de caractere

const queryString_url_id = window.location.search;
//console.log(queryString_url_id);  // j ai recup ? avec l id du produit 


// pr retirer le ? de la reponse dans la console on va faire :
//methode 1 - slice commence a partir de l index qu on lui a defini , ici index 1 on degage donc le ? et affiche seulement l id . 01 ou 02 etc... 

//const unId = queryString_url_id.slice(1);
//console.log(unId);


//methode 2 , on utilise un constructeur ! + puissant et un peu plus tricky pour extraire l id 

const urlSearchParams = new URLSearchParams(queryString_url_id);
//console.log(urlSearchParams);

const id = urlSearchParams.get("id");
//console.log(id);



//RECUPERATION DE TT UN OBJET D UN TABLEAU PAR LE BIAIS DE SA KEY-ID ------------------
//methode 1 -> depuis une web api avec methode fetch , les promises .

//c est juste un exemple car mon fichier en local ca fonctionne pas faut une api 
//const recupObjetViaId = await fetch(`http://localhost:3000/api/service/${id}`);


//methode 2 depuis une variable .find()  --> via stackoverflow , quand t bloquer va jeter un coup d oeil 




const idProduitSelectionner = response.find((element) => element._id == id);    // attention si === alors donnera undefined car va s attendre a donner juste un id alors qu avec la metode .find() on veut tt l objet 
// element._id car l id dans le tabl response est ecrit _id
// console.log(response);
// console.log(idProduitSelectionner);



// selection de la classe ou je vais injecter le code html 

const positionElement2 = document.querySelector(".container-page-produits");
//console.log(positionElement2);


//la structure html pr l affichage du produit selectionner depuis la page d accueil dans la page produit 
//ln 58 on met donc le idproduitselectionner car ces la que ce se trouve les key et value de l objet .

const structureProduits2 = `
 <div class ="mise-en-page-produit">
            <div class="produit">   
               <img src="${idProduitSelectionner.urlPhoto}" />
            </div>
            <div class="produit">
            <ul>

                <li>ProductName : <span>${idProduitSelectionner.productName}</span></li>
                <li>description :<span>${idProduitSelectionner.description}</span> </li>
                <li>use_for: <span>${idProduitSelectionner.use_for}</span></li>
                <li>price: <span>${idProduitSelectionner.price / 100} $</span></li>
            </ul>
<form>
    <label for="option_produit">choisis l option </label>
        <select name="option_produit" id="option_produit">    
        </select>    
       
    <label for="quantite_produit">choisir la quantite </label>
        <select name="quantite_produit" id="quantite_produit">    
        </select>    
         
        <button id="btn-envoyer" type="submit" name="btn-envoyer">Ajouter au panier</button>
        </form>
    </div>
</div>
`;

//formulaire pr adapter au nbre d options qu il y a dans l objet du produit

const optionQuantite = idProduitSelectionner.options;
console.log(optionQuantite);
let structureOptions = [];


// boucle for pour afficher toutes les options du produit 
//j+1 permet de commencer l index a 1 pour l option 1
for (let j = 0; j < optionQuantite.length; j++) {
    structureOptions = structureOptions +
        `
    <option value ="${optionQuantite[j]}">${optionQuantite[j]}</option>
    `;
}

//ln93 pour avoir les options qui s affiche dynamiquement le mot option + integer


console.log(structureOptions);

//injection html dans la page produit  

positionElement2.innerHTML = structureProduits2;

//injection html dans la page produit  pr le choix des OPTIONS dans le FORMULAIRE

const positionElement3 = document.querySelector("#option_produit");
//console.log(positionElement3);

// injection html dans la page produit , au niveau des options 

positionElement3.innerHTML = structureOptions;


//Quantite : choisir la quantite de produits possible 
const structureQuantite = `
<option value ="1">1</option>
<option value ="2">2</option>
<option value ="3">3</option>
`;
// QUANTITE : afficher les quantites de structureQuantite ds le form
const positionElementQuantite = document.querySelector("#quantite_produit ");
//console.log("positionElementQuantite");
//console.log(positionElementQuantite);
positionElementQuantite.innerHTML = structureQuantite;

//-------------------GESTION DU PANIER 
// RECUP DES DONNEES SELECTIONNES PAR L UTILISATEUR ET ENVOIE AU PANIER 

// selection de l id du formulaire 
// viens de select name 
const idForm = document.querySelector("#option_produit");
//console.log(idForm);

//mettre choix de loption par l utilisateur dans une variable 

const choixForm = idForm.value;
//console.log(choixForm);


//selection du bouton ajouter l article au panier 
const btn_envoyerAuPanier = document.querySelector("#btn-envoyer");
//console.log(btn_envoyerAuPanier);


//------------------- addEventListener mnt ecouter le bouton et envoyer le panier ---------------------------

btn_envoyerAuPanier.addEventListener("click", (event) => {
    event.preventDefault();   // preventDefault() ne reactualisera pas la page dans la logique 

    //mettre choix de loption par l utilisateur dans une variable 

    const choixForm = idForm.value;
    //console.log(choixForm);


    // QUANTITE : Mettre la quantite dans une variable , donc la on peut selectionner la quantite 
    const choixQuantite = positionElementQuantite.value;
    console.log("choixQuantite");
    console.log(choixQuantite);

    //recuperation des valeurs du formulaires

    let optionProduitRecup = {
        productName: idProduitSelectionner.productName,                         // du tableau response
        id_produitSelectionner: idProduitSelectionner._id,                          // qui recup l id selectionner???
        option_produit: choixForm,                                                   // dans le label du form ln101
        quantite: choixQuantite,
        price: (idProduitSelectionner.price * choixQuantite) / 100                                // pour avoir prix en euros et pas en centimes d euros               
    };

    console.log(optionProduitRecup);  // permet l ajout au panier 



    // -------------------------------------------- le local storage ----------------------------- 
    //pour mettre les articles dans le panier reellement 
    // stocker la recuperation des valeurs du formulaire dans le local storage -------------------
    // ca se recupere sous la forme chaine de caractere , il faut que ce soit un objet json 
    // le local sotage permet si tu ferme ton pc , de pas perdre tes donnees , et donc ton panier --> comme amazon

    // storage est une methode --> qq exemple de storage --> 
    //storage.key() lorsqu on lui passe un nombre n , renvoie le nom de n-ieme cl?? dans le stockage
    //storage.getItem() lorsqu 'on lui passe le nom d une cl?? , renvoie la valeur de la cl?? correspondante 
    //storage.setItem() lorsqu on lui passe un nom de cl?? et une valeur , cette methode ajoute cette cl?? et cette valeur ds le stockage . si la cl?? existe deja , elle met a jour la valeur 
    //storage.removeItem() lorsqu on lui passe le nom d une cl?? il supprime cette cl?? du stockage
    //storage.clear() lorsqu elle est appel??e , cette methode supprime ttes les cl??s du stockage .
    //localstorage permet d acceder a un objet local stoage . local storage pas de delai d expiration ---> session storage nettoy??s quand on ferme le navigateur .
    //window.localStorage --> convertir en json --> json parse ou stringify pr le convertir en objet js 
    // pour envoyer des donnees js ds le local storage faut les convertir en format json 

    let produitEnregistrerDansLocalStorage = JSON.parse(localStorage.getItem("produit"));     // .getItem --> ceci nous permet d aller lire dans le local storage 
    //console.log(produitEnregistrerDansLocalStorage);

    //n convertir ln175 ce string en format json / json.parse
    //json.parse converti les donn??es Json qui sont dans le local storage  en objet js 


    // si y a deja des donnees dans le localstorage
    //NB : ne mettra qu une cl?? produit d un article car la condition c est que si c okay y a une cle produit , alors le boolean devient true , le localstorage contient qqch , il rajoute pas de 2eme produit
    //fonction fenetre popup 
    const popupConfirmation = () => {
        if (window.confirm(`${idProduitSelectionner.productName} ${choixForm} a bien ete ajout?? au panier pr check le panier ok ou revenir a l accueil ANNULER `)) {
            window.location.href = "panier.html"        // si la personne veut voir son panier , utiliser la dresse url du panier via cette methode window.location.href
        } else {       //.confirm affiche un dialogue avec un message et 2 boutons , ok et annuler .
            window.location.href = "index.html";
        }
    }


//fonction ajouter un produit selectionee dans le local storage 
const ajoutProduitLocalStorage = () => {
    produitEnregistrerDansLocalStorage.push(optionProduitRecup);

    // la transformation en format json et l envoyer dans la key produit du local storage 
    localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLocalStorage))
    // okay ca marche mais il faut sortir du localstorage et se remettre sur la page pour voir le produit apparaitre , ne se fait pas en temps reel comme avec la console 
    // on rajoute ceci pr pouvoir avoir plusieurs produits ds le localstorage 
}

    if (produitEnregistrerDansLocalStorage) {
        ajoutProduitLocalStorage();
        //console.log("ok");
        popupConfirmation(); // on apelle la fonction ici pour le popup

        // s il n y a pas de produit enregistr?? dans le local storage 
    } else {
        produitEnregistrerDansLocalStorage = [];   // tab vide cr??e , on va rajouter dedans les options du produit recup
        ajoutProduitLocalStorage();
        popupConfirmation();
        //??? mnt on va envoyer ca ds le local storage et cr??e la cl?? qu ont a appeler "produit" ln 173




    }
});    // la fonction commence au addEventListener ln 135 et termine ici 











