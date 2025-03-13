
let primerOp = "";
let segundoOp = "";
let operacion = "";
const buttons = document.querySelectorAll(".boton");
const display = document.getElementById("display");
const operaciones = document.querySelectorAll(".operacion");
const igual = document.querySelector("#igual");
const borrar = document.querySelector("#borrar")

buttons.forEach(boton =>{
    boton.addEventListener("click",() => {
    if (operacion === "") {
        primerOP += boton.textContent;
        display.value = primerOP;
    } else {
        segundoOP += boton.textContent;
        display.value = segundoOP;
    }
    });
});

operaciones.forEach(boton =>{
    boton.addEventListener("click",() =>{
        if(segundoOp !== ""){
            calcular();
        }
        operacion = boton.textContent;
    });
});

igual.addEventListener("click",() =>{
    if(segundoOp !== ""){
        calcular();
    }
});

borrar.addEventListener("click",() =>{
    primerOp = "";
    segundoOp = "";
    operacion = "";
    display.value = "0";
});


function calcular(){
    let resultado;
    switch(operacion){
        case "+":
            resultado = parseFloat(primerOP) + parseFloat(segundoOP);
            break;
        case "-":
            resultado = parseFloat(primerOp) - parseFloat(segundoOp);
            break;
        case "x":
            resultado = parseFloat(primerOp) * parseFloat(segundoOp);
            break;
        case "/":
            parseFloat(primerOp) / parseFloat(segundoOp);
            break;
    }
    display.value = resultado;
    primerOP = resultado;
    segundoOP = "";
    operacion = "";
}

