/* var x = prompt("Dime un número:");
var y = Math.sqrt(x);

alert("La raíz cuadrada de "+ x +" es " + y);

var z = Math.floor(Math.random() * 10 + 1);

alert(z); */

/* function numAleatorio(num1, num2) {
    return Math.round((Math.random()*(num2-num1)+num1));
}

var resultado = numAleatorio(8,20);


alert("El valor aleatorio es: " + resultado);

 */

// var x = prompt("Introduce un número!");





var z = parseInt(Math.floor(Math.random() * 10 + 1));
var i = 0;
do {
    var x = parseInt(prompt("Introduce un número del 1 al 10"));
    i++;
} while (x !== z);

if (x == z) {
    document.getElementById("mensaje").innerHTML = "Correcto! Has realizado "+ i + " intentos.";
    
} else {
    document.getElementById("mensaje").innerHTML = "Incorrecto, prueba de nuevo!";
    
}





