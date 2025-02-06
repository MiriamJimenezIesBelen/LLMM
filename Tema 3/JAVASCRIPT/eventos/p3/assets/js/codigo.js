

const b=document.querySelector("body");
const p1=document.querySelector("#unclik");
const foto1=document.querySelector("#fotoclik");
const foto2=document.querySelector("#fotocursor");
const p2=document.querySelector("#dobleclik");

b.addEventListener("onunload",mensaje);
p1.addEventListener("onclick",()=>alert("Has realizado un click"));
foto1.addEventListener("onclick",maximo);
p2.addEventListener("ondblclick",() => alert("Parrafo 2 doble click"));

function mensaje (){
    alert("Bienvenidos a la práctica de eventos");
}

function maximo(){
    const num1 = parseInt(prompt("Introduce un número: "));
    const num2 = parseInt(prompt("Introduce otro número: "));

    if(isNaN(num1) && isNaN(num2)){
        var maximo = num1>num2? num1:num2; 
    }else{
        alert("El número no es valido");
    }

    alert("El número máximo es %d"+maximo);
}








//const num = parseInt(promport ("intrdouce numero"));

//if isNaN(num){
 //   "es valido"
//}