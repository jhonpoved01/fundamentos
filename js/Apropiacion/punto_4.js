// Tasa de cambio fija
const tasaCambio = 4000;

// Solicitar valor en pesos colombianos
let pesos = prompt("Ingrese el valor en pesos colombianos pesos (COP):");

// Convertir a número
pesos = parseFloat(pesos);

// Validar que sea un número válido
if (!isNaN(pesos) && pesos >= 0) {
    let dolares = pesos / tasaCambio;
    alert("El valor en dólares (USD) es: $" + dolares.toFixed(2));
} else {
    alert("Por favor, ingrese un valor numérico válido.");
}