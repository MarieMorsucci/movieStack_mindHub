console.log(data);

//Funcion de Creacion de Cartas

let createCard = (
  obj
) => `<article class="h-[350px] w-3/5 md:w-2/5 flex flex-column flex-wrap content-between justify-center text-center bg-indigo-300 align-middle p-2 rounded-2xl shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
<img class="w-[270px] align-middle rounded-2xl" src=${obj.image}
    alt="${obj.title}">
<h6 class="w-full font-bold">${obj.title}</h6>
<p class="w-full">${obj.tagline}</p>
<P class="w-full p-1 italic">${obj.overview.slice(0, 90)}</P>
</article>`;

//RENDERIZACION DE LAS CARTAS

let renderCard = (array, conteiner) =>
  (conteiner.innerHTML = array.map(createCard).reduce((a, b) => a + b));
//Obtengo el string de tooooodas las cartas

let template = document.createElement("template");
let movieConteiner = document.getElementById("movieContent");

movieConteiner.className = "flex flex-wrap justify-around gap-6 p-6";
movieConteiner.innerHTML = renderCard(data, template);
