//page produit//
const apiUrl = "http://localhost:3000/api/teddies";
//récupération de l'Id//
let search = new URLSearchParams(window.location.search);
let productId = search.get("id");
//fonction getTeddy pour récuperer les données de l'ID de chaque Teddy
function getTeddy(){
    fetch(apiUrl + '/' + productId)
        .then(response => {
            console.log(response)
            return response.json();
 })            
        .then(data => {
            article = data
            displayTeddy()
            console.log(article);
})        
        .catch(error =>{
            console.log(error);
        })
}   
window.onload = getTeddy();
//affiche les données de l'object//
function displayTeddy(){
    document.getElementById("affich_product").innerHTML +=
        "<div>" +
        "<h2>"  +
         article.name +
        "</h2>" +
        "<img width=100% src='" +
         article.imageUrl + "'>" +
        "<p>" +
         article.description +
        "</p>" +
        "<select id='select'>" +
        "</select>" +
        "<p>Prix : " + 
        article.price / 100 + "€" +
        "</p>" +
        "<button id='button'>Ajoutez au panier </button>" +
        "<p id = 'alerte_ajout_panier'></p>" +
        "</div>";

//menu déroulant colors//
 let selectOption = ""
    for (let i = 0; i < article.colors.length; i++) {
        selectOption +="<option value=\""+ article.colors[i]+"\">"+ article.colors[i]+"</option>";
    }    
        console.log(selectOption);
        document.getElementById('select').innerHTML = selectOption

        document.getElementById('button').addEventListener("click", function(){
        //function addProduct pour récuperer le panier et son contenu//
            addProduct();
        document.getElementById('alerte_ajout_panier').innerHTML = "Le produit a été ajouté au panier";
    });
};
//localstorage//
function addProduct(){
    //transformation la chaine JSON(string) en objet JS//
    let card = document.querySelector('select').value; //Récupère la valeur de la couleur choisie
    if (card === null) { //si le tableau n'existe pas je le crée
      card=[]
    } 
     const panier = JSON.parse(localStorage.getItem("panier"))  //On extrait notre json ou on crée un tableau si le panier est vide
        panier.push(article );//pour chaque article, on pousse les infos suivantes dans le panier
        
        
        window.localStorage.setItem("panier", JSON.stringify(panier))
        //console.log(panier)
        console.log("Le produit a été ajouté au panier"); 
    }        

let write = localStorage.getItem('panier');
console.log(write);
//lit la valeur dans le localstorage//
let read = JSON.parse(write);
console.log(read);