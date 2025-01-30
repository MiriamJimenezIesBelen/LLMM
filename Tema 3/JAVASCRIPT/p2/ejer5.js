
let puntos1 = 50;
let pocion1 = 20;
let puntos2 = 60;
let pocion2 = 50;

function curar(puntosActuales,pocion){
    return Math.min(puntosActuales+pocion,100);
}


console.log(`Puntos 1: ${curar(puntos1,pocion1)}`);
console.log(`Puntos 2: ${curar(puntos2,pocion2)}`);