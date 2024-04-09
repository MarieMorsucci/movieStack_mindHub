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

export let createCard = (
  obj
) => `<article class="h-[350px] w-3/5 md:w-1/5 flex flex-column flex-wrap content-between justify-center text-center bg-indigo-300 bg-opacity-25 align-middle p-2 rounded-2xl shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
  <img class="w-[270px] align-middle rounded-2xl" src=${obj.image}
      alt="${obj.title}">
  <h6 class="w-full font-bold">${obj.title}</h6>
  <p class="w-full">${obj.tagline}</p>
  <P class="w-full p-1 italic">${obj.overview.slice(0, 50)}</P>
  <a class="justify-items-end font-medium text-blue-600 dark:text-blue-500 hover:underline italic " href="./details.html?id=${
    obj.id
  }">Ver mas..</a>
  </article>`;

//CREAR SELECT
export let createOption = (e) => `<option value="${e}">${e}</option>`;

//CREATE MOVIE DETAILS
export let createMovieDetails = (obj) =>
  `<div class="detailsPrincipal w-full flex flex-wrap bg-indigo-400 bg-opacity-25 justify-around">
    <img class="h-[300px] w-4/6 md:w-1/3 object-cover shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]" src= '${
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
