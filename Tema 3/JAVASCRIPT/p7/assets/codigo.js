
let primerOp = "";
let segundoOp = "";
let operacion = "";

const buttons = document.querySelectorAll(".boton");
const display = document.getElementById("display");
const operaciones = document.querySelectorAll(".operacion");
const igual = document.querySelector("#igual");
const borrar = document.querySelector("#borrar");

buttons.forEach(boton => {
    boton.addEventListener("click", () => {
        if (operacion === "") {
            primerOp += boton.value;
            display.value = primerOp;
        } else {
            segundoOp += boton.value;
            display.value = segundoOp;
        }
    });
});

operaciones.forEach(boton => {
    boton.addEventListener("click", () => {
        if (segundoOp !== "") {
            calcular();
        }
        operacion = boton.value;
    });
});

igual.addEventListener("click", () => {
    if (segundoOp !== "") {
        calcular();
    }
});

borrar.addEventListener("click", () => {
    primerOp = "";
    segundoOp = "";
    operacion = "";
    display.value = "0";
});

function calcular() {
    let resultado;
    switch (operacion) {
        case "+":
            resultado = parseFloat(primerOp) + parseFloat(segundoOp);
            break;
        case "-":
            resultado = parseFloat(primerOp) - parseFloat(segundoOp);
            break;
        case "x":
            resultado = parseFloat(primerOp) * parseFloat(segundoOp);
            break;
        case "/":
            resultado = parseFloat(primerOp) / parseFloat(segundoOp);
            break;
        default:
            return;
    }
    display.value = resultado;
    primerOp = resultado.toString();
    segundoOp = "";
    operacion = "";
}
