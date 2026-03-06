// Solicitar temperatura en Celsius
let celsius = prompt("Ingrese la temperatura en grados Celsius aqui:");

// Convertir a número
celsius = parseFloat(celsius);

// Validar que sea un número válido
if (!isNaN(celsius)) {
    let fahrenheit = (celsius * 9/5) + 32;
    alert("La temperatura en Fahrenheit es: " + fahrenheit.toFixed(2) + " °F");
} else {
    alert("Por favor, ingrese un valor numérico válido.");
}