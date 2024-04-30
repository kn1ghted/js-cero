// Classic IF conditional
let mensaje;
const edad = 17;

if (edad >= 18) {
   mensaje = "Es mayor de edad, puede pasar";
} else {
   mensaje = "No es mayor de edad, no puede pasar";
}

console.log(mensaje);

// condition ? true : false

const age = 17;

const message =
  edad >= 18
    ? "Age is enough, access granted"
    : "Age is not enough, access denied";

console.log(mensaje);