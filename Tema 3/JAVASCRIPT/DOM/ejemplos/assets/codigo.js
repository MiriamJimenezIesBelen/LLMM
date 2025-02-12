
const enc = document.querySelector("#enc");
const p = document.querySelector(".p1");
const img = document.querySelector(".img");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");


b1.addEventListener("click",() => {p.style.color="red";});

b2.addEventListener("click",() => {img.src="./assets/manzana.png";});

//b3.addEventListener("click",() => {enc.classList.toggle("nueva");});

console.log(enc); // Esto debería mostrar el elemento <h1> en la consola
