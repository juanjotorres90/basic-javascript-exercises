'use strict';


//***************
// Funciones
//***************


// Función que devuelve el precio con iva
// Acepta number
// Devuelve number


/* function getPriceWithIVA(precio, type) {
    var iva;
    if (type === "book") {
        iva = 1.05;
    } else if (type === "education") {
        iva = 1;
    } else {
        iva = 1.21;
    }
    return precio = iva * precio;
}

var userPrice = prompt("Indica precio que te calculo el IVA: ");
var userType = prompt("Indica tipo de producto: ");
var priceWithIVA = getPriceWithIVA(userPrice, userType);
console.log("Precio con IVA de " + userPrice, priceWithIVA);
 */


//***************
// Arrays
//***************

/* var tickets = [32,10,200,22];
var secondValue = tickets[1];
console.log(secondValue);

// Push
tickets.push(333);
console.log("Tickets: ", tickets);


//Longitud

var longitud = tickets.length;
console.log("Longitud de Array: ", longitud);

// Modificar valor array
tickets[2] = 999;
console.log(tickets[2]); */


// 1. Crear un array con valores de facturas
// 2. Hacer un bucle for que vaya calculando el iva de cada valor y guardando en un nuevo array (var ticketsWithIVA)
// 3. Crear una función que acepte un array y calcule la suma de los valores
// 4. Pintar por consola: "La suma de tus tickets con IVA es: ...."

/* function getTicketWithIVA(ticket) {
    ticket = ticket * 1.21;
    return ticket;
}
function getTotal(arr) {
    var suma=0;
    var arr;
    for (i=0;i<arr.length;i++) {
       suma += arr[i];
     }
     return suma;
}


var i;
var tickets = [10,20,30];
var ticketsWithIVA = [];

for (i=0;i<tickets.length;i++) {
   ticketsWithIVA[i] = getTicketWithIVA(tickets[i]);
}

console.log(ticketsWithIVA);



var sumaTotal = getTotal(ticketsWithIVA);

console.log(sumaTotal);
 */

function getTotalPrice (array) {
    var totalPrice = 0;
    for (var i=0;i<array.length;i++) {
        totalPrice = totalPrice + array[i];
       }
       return totalPrice;
}

var tickets = [10,20,30];
var totalPrice = getTotalPrice(tickets);


 console.log("El precio total es de: ", totalPrice);