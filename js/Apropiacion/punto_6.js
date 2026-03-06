// Solicitar la longitud del lado
let lado = prompt("Ingrese la longitud del lado del cuadrado aqui:");

// Convertir a número
lado = parseFloat(lado);

// Validar que sea un número válido
if (!isNaN(lado) && lado > 0) {
    let perimetro = 4 * lado;
    alert("El perímetro del cuadrado es: " + perimetro);
} else {
    alert("Por favor, ingrese un valor numérico válido y mayor que 0.");
}