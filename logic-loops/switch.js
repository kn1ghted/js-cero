/* switch(expresion) {
  case valor1:
    // código a ejecutar
    break;
  case valor2:
    // código a ejecutar
    break;
  case valor3:
    // código a ejecutar
    break;
  case valor4:
    // código a ejecutar
    break;
  default:
    // código
} */

let expr = "Uvas";

// SWITCH uses an strict comparisson === on the condition
switch (expr) { 
  case "Naranjas":
    console.log("Las naranjas cuestan $2 el kilo");
    break;
  case "Manzanas":
    console.log("Las manzanas cuestan $4 el kilo");
    break;
  case "Plátanos":
    console.log("El plátano esta en $1 el kilo");
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y las papayas cuestan $1 la unidad");
    break;
  default:
    console.log(`Lo siento, no contamos con ${expr}`);
}

console.log("¿Hay algo más que desees?");