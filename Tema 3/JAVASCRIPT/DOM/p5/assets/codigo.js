document.getElementById("calcular").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");
    let error = document.getElementById("error");
    
    if (isNaN(num1) || isNaN(num2)) {
        error.textContent = "Por favor, introduce números válidos.";
        resultado.value = "";
        return;
    }

    let res;
    switch (operacion) {
        case "suma":
            res = num1 + num2;
            break;
        case "resta":
            res = num1 - num2;
            break;
        case "multiplicacion":
            res = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                error.textContent = "No se puede dividir por 0.";
                resultado.value = "";
                return;
            }
            res = num1 / num2;
            break;
        default:
            error.textContent = "Operación no válida.";
            resultado.value = "";
            return;
    }
    resultado.value = res;
});