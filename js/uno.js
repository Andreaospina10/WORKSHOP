function convertirAFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        document.getElementById("resultadoTemp").innerText = "Por favor, ingresa una temperatura.";
    } else {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("resultadoTemp").innerText = `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    }
}
