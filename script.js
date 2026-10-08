document.getElementById("calcular").addEventListener("click", () => {
  const op = document.getElementById("operacion").value;
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const salida = document.getElementById("resultado");
  salida.classList.remove("error");

  if (isNaN(n1) || isNaN(n2)) {
    salida.textContent = "Introduce solo números válidos.";
    salida.classList.add("error");
    return;
  }

  let texto;
  if (op === "1") texto = `${n1} + ${n2} = ${n1 + n2}`;
  else if (op === "2") texto = `${n1} − ${n2} = ${n1 - n2}`;
  else if (op === "3") texto = `${n1} × ${n2} = ${n1 * n2}`;
  else if (n2 === 0) {
    salida.textContent = "Error: No se puede dividir entre cero.";
    salida.classList.add("error");
    return;
  } else texto = `${n1} ÷ ${n2} = ${n1 / n2}`;

  salida.textContent = texto;
});