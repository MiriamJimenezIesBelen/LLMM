
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
Nivel: ${nivel}
Puntos de vida: ${puntosDeVida}
Tiene armadura equipada: ${tieneArmadura}
`);



nivel += 1; 
puntosDeVida -= 30; 


console.log(`Información después del combate:
Nombre: ${nombreHeroe}
Arma principal: ${armaPrincipal}
Arma secundaria: ${armaSecundaria}
Nivel: ${nivel}
Puntos de vida: ${puntosDeVida}
Tiene armadura equipada: ${tieneArmadura}
`);
