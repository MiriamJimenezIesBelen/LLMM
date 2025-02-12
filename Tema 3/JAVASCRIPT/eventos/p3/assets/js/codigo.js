
const b = document.querySelector("body");
const p1 = document.querySelector("#unclik");
const foto1 = document.querySelector("#fotoclik");
const foto2 = document.querySelector("#fotocursor");
const p2 = document.querySelector("#dobleclik");

// Evento cuando la web se carga completamente
window.addEventListener("load", mensaje);

// Evento para clic en el primer párrafo
p1.addEventListener("click", () => alert("Has realizado un click"));

// Evento para clic en la imagen del robot
foto1.addEventListener("click", maximo);

// Evento para doble clic en el segundo párrafo
p2.addEventListener("dblclick", () => alert("Parrafo 2 doble click"));

function mensaje() {
    alert("Bienvenidos a la práctica de eventos");
}

function maximo() {
    const num1 = parseInt(prompt("Introduce un número: "));
    const num2 = parseInt(prompt("Introduce otro número: "));

    if (isNaN(num1) || isNaN(num2)) {
        alert("El número no es válido");
    } else {
        const maximo = num1 > num2 ? num1 : num2;
        alert(`El número máximo es ${maximo}`);
    }
}