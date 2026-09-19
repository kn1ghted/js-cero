const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const formulario = document.querySelector("#guess-form");
const entrada = document.querySelector("#guess-input");
const pista = document.querySelector("#hint");
const contador = document.querySelector("#attempts");
const botonCancelar = document.querySelector("#cancel-button");
let intentos = 3;

function actualizarContador() {
    contador.textContent = `Intentos restantes: ${intentos}`;
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const numeroJugador = Number(entrada.value);
    if (numeroJugador < 1 || numeroJugador > 10) {
        pista.textContent = "Elige un número entre 1 y 10.";
        return;
    }

    intentos--;
    actualizarContador();

    if (numeroJugador === numeroSecreto) {
        pista.textContent = "¡Felicidades, adivinaste el número secreto!";
        entrada.disabled = true;
        formulario.querySelector("button[type=submit]").disabled = true;
    } else if (intentos === 0) {
        pista.textContent = `Se acabaron los intentos. Era el ${numeroSecreto}.`;
        entrada.disabled = true;
        formulario.querySelector("button[type=submit]").disabled = true;
    } else if (numeroJugador < numeroSecreto) {
        pista.textContent = "El número es muy bajo, intenta de nuevo.";
    } else {
        pista.textContent = "El número es muy alto, intenta de nuevo.";
    }

    entrada.value = "";
    entrada.focus();
});

botonCancelar.addEventListener("click", () => {
    intentos = 0;
    actualizarContador();
    pista.textContent = "Juego cancelado.";
    entrada.disabled = true;
    formulario.querySelector("button[type=submit]").disabled = true;
});