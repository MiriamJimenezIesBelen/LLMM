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
Nivel: ${nivel}
Puntos de vida: ${puntosDeVida}
Tiene armadura equipada: ${tieneArmadura}
`);


// Simulación del combate
nivel += 1; // Aumenta el nivel en 1
puntosDeVida -= 30; // Resta 30 puntos de vida

// Mostrar la información después del combate
console.log(`Información después del combate:
Nombre: ${nombreHeroe}
Arma principal: ${armaPrincipal}
Arma secundaria: ${armaSecundaria}
Nivel: ${nivel}
Puntos de vida: ${puntosDeVida}
Tiene armadura equipada: ${tieneArmadura}
`);
