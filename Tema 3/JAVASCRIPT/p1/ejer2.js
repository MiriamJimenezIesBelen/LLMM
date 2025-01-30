
const nombreHeroe = "Éxarion"; 
const armaPrincipal = "Espada del Destino"; 
let armaSecundaria = "Arco Simple"; 
let nivel = 5; 
let puntosDeVida = 100; 
let tieneArmadura = true; 


console.log(`Información inicial del héroe:
Nombre: ${nombreHeroe}
Arma principal: ${armaPrincipal}
Arma secundaria: ${armaSecundaria}
Nivel: ${nivelCadena}
Puntos de vida: ${puntosFloat}
Tiene armadura equipada: ${tieneArmadura}
`);


let nivelCadena = nivel.toString(); 
let puntosFloat = parseFloat(puntosDeVida); 


console.log(`Transformaciones:
Nivel en cadena: ${nivelCadena}
Puntos de vida en float: ${puntosFloat}
`);


let dañoBase = 50; 
let multCritico = 2; 
let probCritico = 0.5; 
let esCritico = probCritico > Math.random(); 


let dañoTotal = esCritico ? dañoBase * multCritico : dañoBase;


console.log(`Resultado del combate:
¿Golpe crítico?: ${esCritico}
Daño total infligido: ${dañoTotal}
`);