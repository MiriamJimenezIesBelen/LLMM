
const b = document.querySelector("#b1");
b.addEventListener("click",buscarPelicula);

async function buscarPelicula(){
    const nombrePelicula = document.querySelector("#nombrePelicula").value;
    const apiKey = "6bd47da3";

    const url = `http://www.omdbapi.com/?t=${nombrePelicula}&apikey=${apiKey}`;
    console.log(url); 

    const titulo = document.querySelector(".titulo");
    const anyo = document.querySelector(".anyo");
    const duracion = document.querySelector(".duracion");
    const calificacion = document.querySelector(".calificacion");

    try{
        const response = await fetch(url);
        const data = await response.json();

        titulo.innerHTML = `<h3>${data.Title}</h3>`;
        anyo.innerHTML = `<h3>${data.Year}</h3>`;
        duracion.innerHTML = `<h3>${data.Runtime}</h3>`;

        calificacion.innerHTML = "";

        data.Ratings.forEach((rating) => {
            calificacion.innerHTML  += `<ul><li>${rating.Source}: ${rating.Value}</li></ul>`;
        });

    }catch(error){
        titulo.innerHTML = "<p>No se encontró la película";
        anyo.innerHTML = "";
        duracion.innerHTML = "";
        calificacion.innerHTML = "";
        console.error("Error al obtener datos",error);
    }
}