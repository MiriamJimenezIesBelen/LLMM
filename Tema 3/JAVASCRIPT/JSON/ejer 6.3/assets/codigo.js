
const b = document.querySelector("#btnSeleccionar");
b.addEventListener("click",buscarPersonaje);


async function buscarPersonaje(){
    const selectElement = document.querySelector("#selectPersonaje").value;

    const url = `https://rickandmortyapi.com/api/character/${selectElement}`;


    const nombre = document.querySelector(".nombre");
    const especie= document.querySelector(".especie");
    const genero = document.querySelector(".genero");
    const imagen = document.querySelector(".imagen");
    const numEpisodios = document.querySelector(".numEpisodios");
    const tabla = document.querySelector(".tabla");
    

    try{
        const response = await fetch(url);
        const data = await response.json();

        nombre.innerHTML = `<h3>${data.name}</h3>`;
        especie.innerHTML = `<h3>${data.species}</h3>`;
        genero.innerHTML = `<h3>${data.gender}</h3>`;
        imagen.innerHTML = `<img src="${data.image}" alt="${data.name}" width="100">`;
        numEpisodios.innerHTML = `<h3>${data.episode.length}</h3>`;
        
        tabla.classList.remove("masculino", "femenino");
        if (data.gender === "Male") {
            tabla.classList.add("masculino");
        } else if (data.gender === "Female") {
            tabla.classList.add("femenino");
        }


    }catch(error){
        nombre.innerHTML = "<p>No se encontró el personaje";
        console.error("Error al obtener datos",error);
    }
}


