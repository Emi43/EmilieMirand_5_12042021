//creation d'un objet Teddy//
class teddy {
    constructor(name,descrition,price,imageUrl){
        this.name= name;
        this.descrition= descrition;
        this.price= price;
        this.imageUrl= imageUrl;
    }
}
//creation d'un tableau avec tous les teddies//
let teddies=[];
//creation d'une fonction pour recuperer les teddies// 
function getAllTeddies(){
//transmission de l'URL des ressources à recuperer//      
fetch("http://localhost:3000/api/teddies")
            //format de reponse souhaitée en json//
            .then(response => response.json())
            //quand le traitement est terminé//
            .then(response => {displayTeddies(response);
            })
            //quand une erreur se produit//
            .catch(error => {   
                console.log(error);
            })
}
//
function displayTeddies(response)
    let section = document.getElementById("teddies");