let producto = prompt("Ingrese el nombre del producto:");
let precio = Number(prompt("Ingrese el precio del producto:"));
let cantidad = Number(prompt("Ingrese la cantidad comprada:"));

let total = precio * cantidad;

alert("El total a pagar por la" + cantidad + " " + producto + " es: " + total);