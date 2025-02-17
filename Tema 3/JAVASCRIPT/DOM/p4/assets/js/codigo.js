

let p1 = document.querySelector(".p1");
const img = document.querySelector(".img");
const botonFondo = document.querySelector(".cambiarFondo");
const caja = document.querySelector(".cajaNueve");

p1.addEventListener("mouseover", () => { p1.style.color = "red";});
p1.addEventListener("mouseout", () => { p1.style.color = "black";});

img.addEventListener("mouseover", () => {img.src="./assets/invisible.jpg";})
img.addEventListener("mouseout", () => {img.src="./assets/robot.jpg";})


botonFondo.addEventListener("click",cambiarFondo);

// no sale nada
function edad() {
    const edad = document.querySelector(".edad");
    let result = parseInt(edad.value);
    const borde = document.querySelector(".formulario");
    const mensaje = document.querySelector(".mensaje");

    if (isNaN(result)) {
        mensaje.textContent = "Introduce un número válido";
        mensaje.style.color = "red";
        borde.style.borderColor = "red";

    } else if (result >= 1 && result <= 100) {
        mensaje.textContent = "Número correcto";
        mensaje.style.color = "green";
        borde.style.borderColor = "green";
    } else {
        mensaje.textContent = "Introduce un valor entre 1 y 100";
        mensaje.style.color = "red";
        borde.style.borderColor = "red";
    }
}


function cambiarFondo(){
    const cajasNegras = document.querySelectorAll(".cajaNegra");

    cajasNegras.forEach(caja => {
        caja.classList.toggle("rojo");
    });
}


window.onload = function()  {
    const opcion1 = document.querySelector(".opcion1");
    const opcion2 = document.querySelector(".opcion2");
    const opcion3 = document.querySelector(".opcion3");

    // Añadimos los eventos de clic a los botones
    opcion1.addEventListener("click", function() {
        // Cambiar estilo de los botones
        caja.classList.toggle("opcion1Click"); // Cambia el estilo del primer botón
    });

    opcion2.addEventListener("click", function() {
        // Cambiar estilo de los botones
        caja.classList.toggle("opcion2Click"); // Cambia el estilo del segundo botón
    });

    opcion3.addEventListener("click", function() {
        // Cambiar estilo de los botones
        caja.classList.toggle("opcion3Click"); // Cambia el estilo del tercer botón
    });
}

