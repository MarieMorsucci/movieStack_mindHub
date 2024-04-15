import {
  filterGenre,
  filterName,
  renderCard,
  createOption,

} from "../js/function.js";

//INGRESO DE API

let data = [];
let arrayLikeMovies=[]
let LSarray = JSON.parse(localStorage.getItem('favoriteMovies'))
if(LSarray){
    arrayLikeMovies= LSarray
}

fetch("https://moviestack.onrender.com/api/movies", {
  headers: {
    "X-API-Key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd",
  }})
  .then((res) => res.json())
  .then((dataApi) => {
    //Asignacion de Obj de la API a una variable
    Object.assign(data, dataApi.movies);
    console.log(data);
    

    //RENDERIZACION DE LAS CARTAS

    let movieConteiner = document.getElementById("movieContent");
    renderCard(data,arrayLikeMovies,movieConteiner);

    //CREAR LOS FILTROS POR GENERO

    let obtainGenres = (array) => [
      ...new Set(array.map((obj) => obj.genres).reduce((a, b) => [...b, ...a])),
    ]; // ...a,...b: quiere decir todo lo que tengo del elemento actual de a con lo acumulado de b
    /* Array.from(new Set(array.map(obj =>obj.genres)))*/
    //console.log(genres(data, genres));

    //Renderizar las opciones
    let renderOptions = (array ,conteiner) => {
      for (const iterator of array) {
        conteiner.innerHTML += createOption(iterator);
      }
    };

    let conteinerGenre = document.getElementById("selectedGenre");
    renderOptions(obtainGenres(data), conteinerGenre);
    //console.log(document.querySelectorAll("option"));

    //FUNCION FILTRAR POR GENERO
    let check = "";
    let inputName = "";

    conteinerGenre.addEventListener("change", (e) => {
      //console.log(conteinerGenre.selectedIndex); //sale la posicion del index seleccionada
      //console.log(check);
      check = conteinerGenre.options[conteinerGenre.selectedIndex].value; //Busco el value la opcion seleccionada
      movieConteiner.innerHTML = "";
      inputName = document
        .getElementById("nameSearch")
        .value.trim()
        .toLowerCase();

      renderCard(
        filterGenre(filterName(data, inputName), check), arrayLikeMovies,movieConteiner);







        
    });

    //FILTRAR POR PALABRAS y GENERO

    nameSearch.addEventListener("keyup", (e) => {
      inputName = nameSearch.value.trim().toLowerCase();
      console.log(inputName);
      console.log(check);

      renderCard(filterGenre(filterName(data, inputName), check),arrayLikeMovies, movieConteiner);

    });


//PRECHEQUEO EN LOCAL STORAGE

//localStorage(likedMovies)
movieConteiner.addEventListener('click', (event)=>{
         
  //PARA CAPTAR EL IDLIKE: RECORDAR QUE TIENE QUE ESTAR TODO EN MINUSCULA Y SI HAY - HAY QUE HACER CAMELCASE
 if (event.target.dataset.idlike) {
     console.log(event);
     let idLikeMovie=event.target.dataset.idlike
     if(idLikeMovie){
         if (!arrayLikeMovies.includes(idLikeMovie) ){
             arrayLikeMovies.push(idLikeMovie)
         }else{
             arrayLikeMovies= arrayLikeMovies.filter(id => id != idLikeMovie)
         }
     }
     console.log(arrayLikeMovies);

     //PERSISTENCIA EN LOCAL STORAGE
     localStorage.setItem('favoriteMovies', JSON.stringify(arrayLikeMovies))
 }
 //RENDERIZACION PARA VER LOS RESULTADOS INMEDIATOS DEL CAMBIO EN EL BOTON
 renderCard(data,arrayLikeMovies,movieConteiner);

 //PARA QUE ME RESPETE FILTROS PREVIOS
 if ((inputName)||(check)){
  renderCard(filterGenre(filterName(data, inputName), check),arrayLikeMovies, movieConteiner);
 }
})
    

});
