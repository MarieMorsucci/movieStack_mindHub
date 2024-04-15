import {  filterGenre, filterName, createCard, createOption} from "../js/function.js";
console.log(data);

//RENDERIZACION DE LAS CARTAS

let renderCard = (array, conteiner) => 
{
  if(array.length>0){
    let template =""
    for (let iterator of array) {
      template += createCard(iterator) //Obtengo el string de tooooodas las cartas
    }
    conteiner.className = " flex flex-wrap justify-around gap-6 p-6"
    conteiner.innerHTML= template ;
}else{
  conteiner.className = " flex flex-wrap justify-around gap-6 p-6"
  conteiner.innerHTML = "<h2>Movie not founded</h2> "
} 
}

let movieConteiner = document.getElementById("movieContent");
renderCard(data, movieConteiner);

//CREAR LOS FILTROS POR GENERO
let conteinerGenre = document.getElementById("selectedGenre");
let genres = (array) => [
  ...new Set(array.map((obj) => obj.genres).reduce((a, b) => [...b, ...a])),
]; // ...a,...b: quiere decir todo lo que tengo del elemento actual de a con lo acumulado de b
/* Array.from(new Set(array.map(obj =>obj.genres)))*/
//console.log(genres(data, genres));
 

//Renderizar las opciones
let renderOptions = (array, conteiner) => {
    for (const iterator of array) {
    conteiner.innerHTML += createOption(iterator)
  }
}
renderOptions(genres(data), conteinerGenre);
//console.log(document.querySelectorAll("option"));


 
//FUNCION FILTRAR POR GENERO
let check = "";
let inputName = "";


conteinerGenre.addEventListener("change", (e) => {
  //console.log(conteinerGenre.selectedIndex); //sale la posicion del index seleccionada
  //console.log(check);
  check = conteinerGenre.options[conteinerGenre.selectedIndex].value; //Busco el value la opcion seleccionada
  movieConteiner.innerHTML = "";
  inputName = document.getElementById("nameSearch").value.trim().toLowerCase();

  renderCard(filterGenre(filterName(data,inputName),check),movieConteiner)

})



//FILTRAR POR PALABRAS y GENERO

nameSearch.addEventListener("keyup", (e) => {
  inputName = nameSearch.value.trim().toLowerCase();
  console.log(inputName);
  console.log(check)

  renderCard(filterGenre(filterName(data,inputName),check),movieConteiner)
})


  //IF change SIN PRECRUZADO

/*   if (inputName != "") {
   renderCard(filterGenre(filterName(data, inputName), check), movieConteiner);
  } else {
    renderCard(filterGenre(data, check), movieConteiner);
  }
}); */


  //IFS keyup SIN PRECRUZADO
 /*  if (check != "") {
    movieConteiner.innerHTML = "";
    if (filterName(filterGenre(data, check), inputName) == 0) {
      movieConteiner.innerHTML = "<h2>Movie not founded</h2> ";
    } else {
      renderCard(
        filterName(filterGenre(data, check), inputName),
        movieConteiner
      );
    }
  } else if (filterName(data, inputName)) {
    movieConteiner.innerHTML = "";

    if (filterName(data, inputName) == 0) {
      movieConteiner.innerHTML = "<h2>Movie not founded</h2> ";
    } else {
      renderCard(filterName(data, inputName), movieConteiner);
    }
  } */


