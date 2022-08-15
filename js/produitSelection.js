// recup de la chaine de requete (la suite de l url a partir du ?) voir mdn urlsearchparams/get

// on va utiliser la methode window.location.search --> recupere/defini l emplacement de l url en cours , de l objet de fenetre .
// window.location.search
// query= requete , string = chaine de caractere

const queryString_url_id = window.location.search;
console.log(queryString_url_id);  // j ai recup ? avec l id du produit 


// pr retirer le ? de la reponse dans la console on va faire :
//methode 1 - slice commence a partir de l index qu on lui a defini , ici index 1 on degage donc le ? et affiche seulement l id . 01 ou 02 etc... 

//const unId = queryString_url_id.slice(1);
//console.log(unId);


//methode 2 , on utilise un constructeur ! + puissant et un peu plus tricky pour extraire l id 

const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);

const id = urlSearchParams.get("id");
console.log(id);



//RECUPERATION DE TT UN OBJET D UN TABLEAU PAR LE BIAIS DE SA KEY-ID ------------------
//methode 1 -> depuis une web api avec methode fetch , les promises .

//c est juste un exemple car mon fichier en local ca fonctionne pas faut une api 
//const recupObjetViaId = await fetch(`http://localhost:3000/api/service/${id}`);


//methode 2 depuis une variable .find()  --> via stackoverflow , quand t bloquer va jeter un coup d oeil 



    
    const idProduitSelectionner = response.find((element) => element._id == id);    // attention si === alors donnera undefined car va s attendre a donner juste un id alors qu avec la metode .find() on veut tt l objet 
                                                                                    // element._id car l id dans le tabl response est ecrit _id
    console.log(response);
    console.log(idProduitSelectionner);



    // selection de la classe ou je vais injecter le code html 

const positionElement2 = document.querySelector(".container-page-produits");
console.log(positionElement2);


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
                <li>option: <span>${idProduitSelectionner.option}</span></li>
                <li>use_for: <span>${idProduitSelectionner.use_for}</span></li>
                <li>price: <span>${idProduitSelectionner.price}</span></li>
            </ul>
<form>
    <label for="option_produit"></label>
        <select name="option_produit" id="option_produit">
         <option value="option1">option 1 </option>
            <option value="option2">option 2 </option>
        </select>    
    </form>
<button id="btn-envoyer" type="submit" name="btn-envoyer">Ajouter au panier</button>
    </div>
</div>
`;


//injection html dans la page produit

positionElement2.innerHTML = structureProduits2;




//-------------------GESTION DU PANIER 
// RECUP DES DONNEES SELECTIONNES PAR L UTILISATEUR ET ENVOIE AU PANIER 

// selection de l id du formulaire 
// viens de select name 
const idForm = document.querySelector("#option_produit");
console.log(idForm);

//mettre choix de loption par l utilisateur dans une variable 

const choixForm = idForm.value;
console.log(choixForm);


//selection du bouton ajouter l article au panier 
const btn_envoyerAuPanier = document.querySelector("#btn-envoyer");
console.log(btn_envoyerAuPanier);


//mnt ecouter le bouton et envoiyer le panier 

btn_envoyerAuPanier.addEventListener("click", (event)=> {
event.preventDefault();   // preventDefault() ne reactualisera pas la page dans la logique 

//mettre choix de loption par l utilisateur dans une variable 

const choixForm = idForm.value;
console.log(choixForm);

//recuperation des valeurs du formulaires

let optionProduitRecup = {
    productName : idProduitSelectionner.productName,                         // du tableau response
    id_produitSelectionner : idProduitSelectionner._id,                          // qui recup l id selectionner↑
    option_produit: choixForm,                                                   // dans le label du form ln101
    quantite: 1,                 
    price: idProduitSelectionner.price /100                                // pour avoir prix en euros et pas en centimes d euros               
}

console.log(optionProduitRecup);
});



