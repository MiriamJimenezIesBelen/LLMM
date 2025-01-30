
let nivel = 4;
let dificultad = [1,2,3];
let experienciaActual = 90;
let experienciaGanada = 30;
let experienciaParaSubirDeNivel = 100;

experienciaActual += experienciaGanada;

if(experienciaActual  >= experienciaParaSubirDeNivel){
    nivel ++;
    experienciaActual -= experienciaParaSubirDeNivel;
}

let dificultadTexto;
if(dificultad == 1){
    dificultadTexto = 'Novato';
}else if(dificultad == 2){
    dificultadTexto = 'Media'
}else{
    dificultadTexto = 'Profesional'
}

console.log(`Nivel: ${nivel}`);
console.log(`Nivel de dificultad: ${dificultadTexto}`)
console.log(`Experiencia Actual: ${experienciaActual}`);
