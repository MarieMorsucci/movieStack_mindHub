//CREAR FILTROS POR GENERO Y POR NOMBRE
export let filterGenre = (array, value) => {
  if (value) {
    return array.filter((obj) => obj.genres.includes(value));
  } else if (value == "") {
    return array;
  }
};

export let filterName = (array, value) => {
  if (value) {
    return array.filter((obj) =>
      obj.title.trim().toLowerCase().includes(value)
    );
  } else if (value == "") {
    return array;
  }
};

//Funcion de Creacion de Cartas
export let createCard = (obj, arrayLike) =>
  `<article class="h-[350px] w-3/5 md:w-3/12 flex flex-column flex-wrap content-between justify-center text-center bg-indigo-300 bg-opacity-25 align-middle p-2 rounded-2xl shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
    
${
  arrayLike.includes(obj.id)
    ? `
    <div class="flex flex-wrap w-full relative md:relative">
 <div  class=" con-like w-[45px] h-[45px] flex absolute -top-1 right-1 md:absolute">
<input id="like" data-idLike='${obj.id}' class="like" type="checkbox" title="like">
<div class="checkmark">
    <svg xmlns="http://www.w3.org/2000/svg" class="rounded-full bg-red-200 p-1 transition-colors"  viewBox="0 0 24 24">
        <path class=" fill-red-800 transition-colors "
            d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
        </path>
    </svg>
    

</div>
</div> 

    </div>
   `
    : `<div class="flex flex-wrap w-full relative md:relative">
    <div  class=" con-like w-[45px] h-[45px] flex absolute -top-1 right-1 md:absolute">
<input id="like" data-idLike='${obj.id}' class="like" type="checkbox" title="like">
<div class="checkmark">
    <svg xmlns="http://www.w3.org/2000/svg" class=" rounded-full bg-white p-1" viewBox="0 0 24 24">
        <path
            d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
        </path>
    </svg>
</div>
</div>
</div>`
}

<img class="w-[270px] align-middle rounded-2xl" src='https://moviestack.onrender.com/static/${
    obj.image
  }'
      alt="${obj.title}">
  <h6 class="w-full font-bold">${obj.title}</h6>
  <p class="w-full">${obj.tagline}</p>
  <P class="w-full p-1 italic">${obj.overview.slice(0, 50)}</P>
  <a id="" class="verMas justify-items-end font-medium text-blue-600 dark:text-blue-500 hover:underline italic " href="./details.html?id=${
    obj.id
  }">Ver mas..</a>
  </article>`;

//CREAR SELECT DE PELICULAS
export let createOption = (e) => `<option value="${e}">${e}</option>`;

//CREATE MOVIE DETAILS
export let createMovieDetails = (obj) =>
  `<div class="detailsPrincipal w-full flex flex-wrap bg-indigo-400 bg-opacity-25 justify-around">
    <img class="h-[200px] w-4/6 md:w-1/3 object-cover shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]" src= 'https://moviestack.onrender.com/static/${
      obj.image
    }' alt="${obj.title}">
    <div class=" w-3/4 pt-5 pb-6 flex flex-column flex-wrap md:w-2/4">
        <h2 class="w-full exo-font font-bold text-2xl">${obj.title}</h2>
        <p class="w-full">${obj.tagline}</p>
        <p class="w-full pt-7 italic ">${obj.genres.join(", ")}</p>
        <p class="w-full pt-7 pr-2">${obj.overview}</p>
    </div>
  
  </div>
<div class="detailTables w-full gap-4  p-6 md:w-3/4 flex flex-wrap justify-around ">
    <h2 class="w-full  p-2 text-lg font-semibold text-right rtl:text-right text-indigo-800 text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-800">  Details of the movie</h2>
    <table class="p-1 w-3/4 md:w-2/5 text-sm text-center relative overflow-x-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-l-lg rtl:text-right text-gray-500 dark:text-gray-400">
         
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th class="bg-gray-700  text-white" scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Original
                    Lenguage
                </th>
                <td class="px-6 py-4">
                    ${obj.original_language}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th class="bg-gray-700  text-white" scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Release
                    date
                </th>
                <td class="px-6 py-4">
                ${obj.release_date}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th class="bg-gray-700  text-white" scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Runtime
                </th>
                <td class="px-6 py-4">
                ${obj.runtime + " mins"}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th class="bg-gray-700  text-white" scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Status
                </th>
                <td class="px-6 py-4">
                ${obj.status}
                </td>
            </tr>
                       
        </tbody>
    </table>



    <table class="p-1 w-3/4 md:w-2/5 text-sm text-center relative overflow-x-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-l-lg rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th class="bg-gray-700  text-white" scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Vote
                    Average
                </th>
                <td class="px-6 py-4">
                ${obj.vote_average.toFixed(2) + "%"}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th class="bg-gray-700  text-white" scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Budget
                </th>
                <td class="px-6 py-4">
                ${"USD " + obj.budget}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th class="bg-gray-700  text-white" scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Revenue
                </th>
                <td class="px-6 py-4">
                ${"USD " + obj.revenue}
                </td>
            </tr>  

        </tbody>
     </table>



 </div>`;

//RENDERIZAR LAS CARTAS
export let renderCard = (array, arrayLike, conteiner) => {
  if (array.length > 0) {
    let template = "";
    for (let iterator of array) {
      template += createCard(iterator, arrayLike); //Obtengo el string de tooooodas las cartas
    }
    conteiner.innerHTML = template;
  } else {
    conteiner.innerHTML = "<h2>Movie not founded</h2> ";
  }
};
