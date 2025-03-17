
const b = document.querySelector("#b1");
b.addEventListener("click",buscarPelicula);
const botonValoracion = document.querySelector("#btnValoracion");
botonValoracion.addEventListener("click",mostrarValoracion)

async function buscarPelicula(){
    const nombrePelicula = document.querySelector("#nombrePelicula").value;
    const apiKey = "6bd47da3";

    const url = `http://www.omdbapi.com/?t=${nombrePelicula}&apikey=${apiKey}`;
    console.log(url); 

    const titulo = document.querySelector(".titulo");
    const anyo = document.querySelector(".anyo");
    const duracion = document.querySelector(".duracion");
    const selectMedios = document.querySelector("#selectMedios");
    const resultadoValoracion = document.querySelector("#resultadoValoracion");


    try{
        const response = await fetch(url);
        const data = await response.json();

        titulo.innerHTML = `<h3>${data.Title}</h3>`;
        anyo.innerHTML = `<h3>${data.Year}</h3>`;
        duracion.innerHTML = `<h3>${data.Runtime}</h3>`;
        resultadoValoracion.innerHTML = "";

        selectMedios.innerHTML = "<option value=''>Seleccione una opción</option>";

        data.Ratings.forEach(rating => {
                let option = document.createElement("option");
                option.value = rating.Value;
                option.textContent = rating.Source;
                selectMedios.appendChild(option);
        });

    }catch(error){
        titulo.innerHTML = "<p>No se encontró la película";
        anyo.innerHTML = "";
        duracion.innerHTML = "";
        selectMedios.innerHTML = "";
        resultadoValoracion.innerHTML = "";
        console.error("Error al obtener datos",error);
    }

}

function mostrarValoracion() {
    const selectMedios = document.querySelector("#selectMedios");
    const resultadoValoracion = document.querySelector("#resultadoValoracion");
    const nombrePelicula = document.querySelector("#nombrePelicula").value;


    if (selectMedios.value) {
        resultadoValoracion.innerHTML = `<p>El medio ${selectMedios.options[selectMedios.selectedIndex].text} 
        ha valorado la película ${nombrePelicula} con un valor de ${selectMedios.value}</p>`;
    }

}

