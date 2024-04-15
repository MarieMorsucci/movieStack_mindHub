//PAGINA DE DETAILS
import {createMovieDetails} from "./function.js"
let data=[]

fetch('https://moviestack.onrender.com/api/movies',{
  headers:{ "X-API-Key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd" }
} )
.then((response) => response.json())
.then((dataApi) =>{
console.log(dataApi.movies);
  Object.assign(data, dataApi.movies);
  console.log(data);
  
let url = new URLSearchParams(location.search); //window.location.search
console.log(url);
let id = url.get("id");

 let movie = (array, key) => array.find((obj) => obj.id == key);

//crear metodo de Renderizar la pelicula con detalles

let createDetail = (contenedor, array, id) => {
  contenedor.className =
    "h-full p-2 flex flex-wrap flex-column gap-3 justify-center align-between ";
  contenedor.innerHTML = createMovieDetails(movie(array, id));
};

let detailCont = document.getElementById("detailMovie");
createDetail(detailCont, data, id); 
 

})











