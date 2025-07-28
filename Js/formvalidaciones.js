document.getElementById("enviarBtn").addEventListener("click", function () {
  const nombre = document.querySelector('input[name="Nombre"]').value.trim();
  const email = document.getElementById("mail").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  let errores = [];

  if (nombre === "") {
    errores.push("El nombre no puede estar vacío.");
  } else if (/\d/.test(nombre)) {
    errores.push("El nombre no puede contener números.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errores.push("El correo electrónico no es válido.");
  }

  if (mensaje === "") {
    errores.push("El mensaje no puede estar vacío.");
  }

  const errorDiv = document.getElementById("empty-name");
  if (errores.length > 0) {
    errorDiv.innerHTML = errores.join("<br>");
    errorDiv.style.color = "red";
  } else {
    errorDiv.style.color = "green";
    errorDiv.innerHTML = "Formulario enviado correctamente.";
    document.getElementById("myform").reset();
  }
});