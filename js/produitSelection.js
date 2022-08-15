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

