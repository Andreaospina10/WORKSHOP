function calcularEdad() {
    const anioNacimiento = document.getElementById('anioNacimiento').value;
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;
    document.getElementById('resultado').textContent = `Tu edad es: ${edad}`;
  }
  