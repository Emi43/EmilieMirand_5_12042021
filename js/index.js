//creation d'un objet Teddy//
class teddy {
    constructor(name,descrition,price,imageUrl){
        this.name= name;
        this.descrition= descrition;
        this.price= price;
        this.imageUrl= imageUrl;
    }
}
//creation d'un tableau//
let teddies=[];

fetch("http://localhost:3000/api/teddies")
.then(response => response.json() )
.then(response => {displayteddies(response);})
.catch(error =>    
    {console.log(error);
})
