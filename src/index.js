import "./styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { mostrarAlerta } from "./js/alerts";

const inputER = document.getElementById("er");
const inputTexto = document.getElementById("texto");
const resultado = document.getElementById("resultado");

const comparar = () => {
  const patron = inputER.value.trim();
  const texto = inputTexto.value;

  if (patron === "") {
    mostrarAlerta("Escribe una expresión regular", "aviso");
    return;
  }

  try {
    const regex = new RegExp(patron);
    const cumple = regex.test(texto);

    resultado.textContent = cumple
      ? "✔ El texto SÍ cumple con la expresión regular"
      : "✖ El texto NO cumple con la expresión regular";
    resultado.className = cumple ? "ok" : "fallo";

    mostrarAlerta(cumple ? "Sí cumple" : "No cumple", cumple ? "exito" : "error");
  } catch (error) {
    mostrarAlerta("La expresión regular no es válida", "error");
  }
};

const limpiar = () => {
  inputER.value = "";
  inputTexto.value = "";
  resultado.textContent = "";
  resultado.className = "";
  mostrarAlerta("Pantalla limpia", "aviso");
};

document.getElementById("comparar").addEventListener("click", comparar);
document.getElementById("limpiar").addEventListener("click", limpiar);