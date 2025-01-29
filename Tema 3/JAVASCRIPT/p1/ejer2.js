// Declaración de variables
const nombreHeroe = "Éxarion"; // Nombre del héroe (constante)
const armaPrincipal = "Espada del Destino"; // Arma principal (constante)
let armaSecundaria = "Arco Simple"; // Arma secundaria (variable)
let nivel = 5; // Nivel inicial
let puntosDeVida = 100; // Puntos de vida iniciales
let tieneArmadura = true; // Indica si tiene armadura equipada (booleano)


// Mostrar la información inicial del héroe
console.log(`Información inicial del héroe:
Nombre: ${nombreHeroe}
Arma principal: ${armaPrincipal}
Arma secundaria: ${armaSecundaria}
Nivel: ${nivelCadena}
Puntos de vida: ${puntosFloat}
Tiene armadura equipada: ${tieneArmadura}
`);


let nivelCadena = nivel.toString(); // Transformar nivel a texto
let puntosFloat = parseFloat(puntosDeVida); // Transformar puntos de vida a float

// Mostrar nuevas variables
console.log(`Transformaciones:
Nivel en cadena: ${nivelCadena}
Puntos de vida en float: ${puntosFloat}
`);

// Declarar variables para el cálculo de daño
let dañoBase = 50; // Puntos de vida que quita por golpe
let multCritico = 2; // Multiplicador de daño crítico
let probCritico = 0.5; // Probabilidad de crítico (50%)
let esCritico = probCritico > Math.random(); // Determina si el golpe es crítico

// Calcular el daño total
let dañoTotal = esCritico ? dañoBase * multCritico : dañoBase;

// Mostrar resultado del daño
console.log(`Resultado del combate:
¿Golpe crítico?: ${esCritico}
Daño total infligido: ${dañoTotal}
`);