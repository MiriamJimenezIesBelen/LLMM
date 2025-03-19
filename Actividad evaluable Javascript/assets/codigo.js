
const b = document.querySelector("#b1");
b.addEventListener("click", buscarPalabra);

async function buscarPalabra() {
    const palabra = document.querySelector("#palabra").value;
    const url = `https://rae-api.com/api/words/${palabra}`;

    const palabraEnLatin = document.querySelector(".palabraLatin");
    const definicion = document.querySelector(".definicion");

    // Limpiar el contenido anterior
    palabraEnLatin.innerHTML = "";
    definicion.innerHTML = "";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const meaning = data.data.meanings[0];

        // Mostrar origen en latín, sino sale un error
        if (meaning.origin && meaning.origin.raw) {
            palabraEnLatin.innerHTML = `<p>${palabra} (${meaning.origin.raw})</p>`;
        } else {
            palabraEnLatin.innerHTML = "<li>No se encontró el origen en latín.</li>";
            palabraEnLatin.style.color = "red";
        }

        // Mostrar las definiciones
        meaning.senses.forEach((element) => {
            definicion.innerHTML += `<li>${element.raw}</li>`;
        });

    } catch (error) {
        palabraEnLatin.innerHTML = "<p>Palabra no encontrada.</p>";
        palabraEnLatin.style.color = "red";
        console.error("Error al obtener datos", error);
    }
}
