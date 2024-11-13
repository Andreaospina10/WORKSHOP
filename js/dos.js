function contarPalabras() {
    const parrafo = document.getElementById('parrafo').value;
    const palabras = parrafo.trim().split(/\s+/);
    const numeroDePalabras = palabras[0] === "" ? 0 : palabras.length;
    document.getElementById('resultado').textContent = `Número de palabras: ${numeroDePalabras}`;
  }
  