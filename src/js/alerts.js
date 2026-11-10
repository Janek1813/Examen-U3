export const mostrarAlerta = (mensaje, tipo = "aviso") => {
  const alerta = document.createElement("div");
  alerta.className = `alerta ${tipo}`;
  alerta.textContent = mensaje;

  document.getElementById("alertas").appendChild(alerta);

  setTimeout(() => alerta.remove(), 3000);
};