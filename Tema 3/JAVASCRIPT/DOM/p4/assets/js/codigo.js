
// Seleccionamos los elementos
let p1 = document.querySelector(".p1");
const img = document.querySelector(".img");
const botonFondo = document.querySelector(".cambiarFondo");
const caja = document.querySelector(".cajaNueve");

// Cambiamos el color cuando pasamos el ratón por encima y cuando salimos
p1.addEventListener("mouseover", () => { p1.style.color = "red";});
p1.addEventListener("mouseout", () => { p1.style.color = "black";});

// Cambiamos la imagen cuando pasamos el ratón por encima y cuando salimos
img.addEventListener("mouseover", () => {img.src="./assets/invisible.jpg";})
img.addEventListener("mouseout", () => {img.src="./assets/robot.jpg";})

// Cuando le damos click al botón de cambiar fondo utilizamos la función cambiar fondo
botonFondo.addEventListener("click",cambiarFondo);

// Cuando le damos click al botón del formulario ultilizamos la función de la edad
document.querySelector(".formulario button").addEventListener("click", edad);


// Llamar a la función opciones para añadir los eventos
opciones();

// Función para validar la edad
function edad() {
    const edad = document.querySelector("#edad");
    const borde = document.querySelector(".formulario");
    const mensaje = document.querySelector(".mensaje");
    // Convertimos el valor a número
    let result = parseInt(edad.value);

    // Si el numero ingresado no es válido sale ese mensaje y se cambia el borde a rojo
    if (isNaN(result)) {
        mensaje.textContent = "Introduce un número válido";
        mensaje.style.color = "red";
        borde.style.borderColor = "red";

        // Si el número ingresado está entre 1 y 100 sale ese mensaje y el borde en verde
    } else if (result >= 1 && result <= 100) {
        mensaje.textContent = "Número correcto";
        mensaje.style.color = "green";
        borde.style.borderColor = "green";

        // Si el número ingresado NO está entre 1 y 100 sale ese mensaje y el borde en rojo
    } else {
        mensaje.textContent = "Introduce un valor entre 1 y 100";
        mensaje.style.color = "red";
        borde.style.borderColor = "red";
    }
}


function cambiarFondo(){
    // Seleccionamos todos los elementos que tenga clase cajaNegra
    const cajasNegras = document.querySelectorAll(".cajaNegra");

    // Los vamos recorriendo y cambiandole el color a todas las cajas negras
    cajasNegras.forEach(caja => {
        caja.classList.toggle("rojo");
    });
}


function opciones() {
    const opcion1 = document.querySelector(".opcion1");
    const opcion2 = document.querySelector(".opcion2");
    const opcion3 = document.querySelector(".opcion3");

    // Si le damos click a la opción 1 ponemos el formato que tiene la clase opcion1Click que esta descrita en el estilo.css
    opcion1.addEventListener("click", () => {
        caja.classList.toggle("opcion1Click");
    });

    // Hacemos lo mismo con la opción 2 y la 3

    opcion2.addEventListener("click", () => {
        caja.classList.toggle("opcion2Click");
    });

    opcion3.addEventListener("click", () => {
        caja.classList.toggle("opcion3Click");
    });
}


