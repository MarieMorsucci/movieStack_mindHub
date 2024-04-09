import { filterGenre , filterName, createCard, createOption } from "./function.js"

console.log(data);
 
//RENDERIZACION DE LAS CARTAS
let renderCard = (array, conteiner) =>{
    for (let iterator of array) {
        conteiner.innerHTML += createCard(iterator)
    }}

//Obtengo el string de tooooodas las cartas
//Template acumulador pre render
let template = document.createElement("template");
let movieConteiner = document.getElementById("movieContent");

movieConteiner.className = " flex flex-wrap justify-around gap-6 p-6";
renderCard(data, movieConteiner);

//CREAR LOS FILTROS POR GENERO
let conteinerGenre = document.getElementById("selectedGenre");

let genres = (array) => [
  ...new Set(array.map((obj) => obj.genres).reduce((a, b) => [...b, ...a])),
]; // ...a,...b: quiere decir todo lo que tengo del elemento actual de a con lo acumulado de b
/* Array.from(new Set(array.map(obj =>obj.genres)))*/

console.log(genres(data, genres));



//Renderizar las opciones
let renderOptions = (array, conteiner) => {
  for (const iterator of array) {
    conteiner.innerHTML += createOption(iterator);
  }
};

renderOptions(genres(data), conteinerGenre);
//console.log(document.querySelectorAll("option"));

//FUNCION FILTRAR POR GENERO

let check=""
conteinerGenre.addEventListener("change", (e) => {
  console.log(conteinerGenre.selectedIndex); //sale la posicion del index seleccionada
  console.log(check);
  check = conteinerGenre.options[conteinerGenre.selectedIndex].value; //Busco el value la opcion seleccionada

  //PARA FILTRAR SOLAMENTE POR GENERO

  movieConteiner.innerHTML = "";
  renderCard(filterGenre(data,check),movieConteiner)
});


//FILTRAR POR PALABRAS y GENERO

nameSearch.addEventListener("keyup", (e) => {
  //console.log(nameSearch.value);
  let inputName = nameSearch.value.trim().toLowerCase();
  console.log(inputName)
  console.log(check);
  
  if(check != ""){
    movieConteiner.innerHTML =""
    if (filterName(filterGenre(data,check),inputName)==0){ 
        
        movieConteiner.innerHTML ="<h2>Movie not founded</h2> " 

    }else{
        renderCard(filterName(filterGenre(data,check),inputName),movieConteiner)
    }
  }else if(filterName(data,inputName)){
    movieConteiner.innerHTML =""
    if (filterName(data,inputName)==0){
        movieConteiner.innerHTML ="<h2>Movie not founded</h2> "
    }else{
       renderCard(filterName(data,inputName),movieConteiner)
    }
  }
});


  