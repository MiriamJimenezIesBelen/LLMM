
let monedasCofre = [3, 15, 100, 40];
let atuendos = ["Duende", "Arquero", "Caballero"];

let suma = 0;

// Sumar las monedas
for (let i = 0; i < monedasCofre.length; i++) {
    suma += monedasCofre[i];
}

console.log(`Total de monedas: ${suma}`);

// Recorrer los atuendos
atuendos.forEach((atuendo, index) => {
    console.log(`Atuendo ${index}: ${atuendo}`);
});