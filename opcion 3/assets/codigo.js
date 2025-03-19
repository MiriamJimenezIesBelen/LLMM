
const b = document.querySelector("#b1");
b.addEventListener("click", buscarPalabra);

async function buscarPalabra() {
    const palabra = document.querySelector("#palabra").value;
    const url = `https://rae-api.com/api/words/${palabra}`;

    const palabraEnLatin = document.querySelector(".palabraLatin");
    const definicion = document.querySelector(".definicion");
    const numDefinicion = document.querySelector(".numDefinicion");
    // Selección de las definiciones
    const selectDefiniciones = document.querySelector("#selectDefinicion"); 

    // Limpiar el contenido anterior
    palabraEnLatin.innerHTML = "";
    definicion.innerHTML = "";
    numDefinicion.innerHTML = "";
    selectDefiniciones.innerHTML = ""; 

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

        // Creamos la lista desplegable con las definiciones con su numero correspondiente
        meaning.senses.forEach((element, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `Definición ${index + 1}`;
            selectDefiniciones.appendChild(option);
        });

        // Mostramos la primera definición por defecto
        mostrarDefiniciones(0, meaning);

        // Mostramos la definición seleccionada cuando cambiamos la opción en el desplegable
        selectDefiniciones.addEventListener("change", function() {
            const selectedIndex = parseInt(this.value);
            mostrarDefiniciones(selectedIndex, meaning);
        });

    } catch (error) {
        palabraEnLatin.innerHTML = "<p>Palabra no encontrada.</p>";
        palabraEnLatin.style.color = "red";
        console.error("Error al obtener datos", error);
    }
}

// Función para mostrar la definicion seleccionada
function mostrarDefiniciones(index, meaning) {
    const definicion = document.querySelector(".definicion");

    definicion.innerHTML = "";
    const element = meaning.senses[index];

    definicion.innerHTML = `<li>${element.raw}</li>`;
}  
    

