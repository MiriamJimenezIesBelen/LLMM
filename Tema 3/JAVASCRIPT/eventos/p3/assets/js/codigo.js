
const b = document.querySelector("body");
const p1 = document.querySelector("#unclik");
const foto1 = document.querySelector("#fotoclik");
const foto2 = document.querySelector("#fotocursor");
const p2 = document.querySelector("#dobleclik");
const boton = document.querySelector("#contarclik");
const capa6 = document.querySelector(".seis");
let contador = 0;

// Evento cuando la web se carga completamente
window.addEventListener("load", mensaje);

// Evento para clic en el primer párrafo
p1.addEventListener("click", () => alert("Has realizado un click"));

// Evento para clic en la imagen del robot
foto1.addEventListener("click", maximo);

// Evento para cuando el cursor deja la imagen invisible
foto2.addEventListener("mouseleave", () => {
    const num = parseInt(prompt("Introduce un número:"));
    if (isNaN(num)) {
        alert("El número no es válido");
    } else {
        alert(`El número ${num} es ${num % 2 === 0 ? "par" : "impar"}`);
    }
});

// Evento para doble clic en el segundo párrafo
p2.addEventListener("dblclick", () => alert("Has realizado un doble click"));

// Evento para contar clics en el botón
boton.addEventListener("click", () => {
    contador++;
    alert(`Has pulsado el botón ${contador} veces`);
});

// Evento para entrada del cursor en la sexta capa y multiplicación de números
capa6.addEventListener("mouseenter", () => {
    const num1 = parseInt(prompt("Introduce el primer número:"));
    const num2 = parseInt(prompt("Introduce el segundo número:"));
    if (isNaN(num1) || isNaN(num2)) {
        alert("El número no es válido");
    } else {
        alert(`La multiplicación de ${num1} y ${num2} es ${num1 * num2}`);
    }
});

function mensaje() {
    alert("Bienvenidos a la práctica de eventos");
}

function maximo() {
    const num1 = parseInt(prompt("Introduce un número: "));
    const num2 = parseInt(prompt("Introduce otro número: "));
    if (isNaN(num1) || isNaN(num2)) {
        alert("El número no es válido");
    } else {
        alert(`El número máximo es ${Math.max(num1, num2)}`);
    }
}
