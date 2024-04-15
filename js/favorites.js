import {renderCard} from "./function.js"
//localStorage.clear('favoritesMovies')
let data=[]
let arrayLikeMovies=[]
let LSarray = JSON.parse(localStorage.getItem('favoritesMovies'))
if(LSarray){
    arrayLikeMovies= LSarray
}


fetch('https://moviestack.onrender.com/api/movies',{
  headers:{ "X-API-Key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd" }
} )
.then((response) => response.json())
.then((dataApi) =>{

Object.assign(data,dataApi.movies)
console.log(data);

let arrayid = JSON.parse(localStorage.getItem('favoriteMovies'))
let arrayFavorites=[]

for (const iterator of arrayid) {
    let aux=data.find(obj =>obj.id == iterator)
    arrayFavorites.push(aux)
}

let favoriteContent=document.getElementById('favoriteContent')
renderCard (arrayFavorites, arrayid, favoriteContent)

console.log(arrayFavorites);
console.log(favoriteContent);


favoriteContent.addEventListener('click', (event)=>{
         
    //PARA CAPTAR EL IDLIKE: RECORDAR QUE TIENE QUE ESTAR TODO EN MINUSCULA Y SI HAY - HAY QUE HACER CAMELCASE
   if (event.target.dataset.idlike) {
       console.log(event);
       let idLikeMovie=event.target.dataset.idlike
       console.log(idLikeMovie);
       if(idLikeMovie){
           if (arrayid.includes(idLikeMovie) ){
            arrayid= arrayid.filter(id => id != idLikeMovie)
           }
       }
       console.log(arrayid);
    }
       //PERSISTENCIA EN LOCAL STORAGE
       localStorage.setItem('favoriteMovies', JSON.stringify(arrayid))
       renderCard (arrayFavorites, arrayid, favoriteContent)
})
   //RENDERIZACION PARA VER LOS RESULTADOS INMEDIATOS DEL CAMBIO EN EL BOTON})





})