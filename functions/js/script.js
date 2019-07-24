function saludar(nom) {
  alert("Buenos días " + nom);
}

// userName = prompt("Dime tu nombre");
// saludar(userName);

function numbers(a,b) {
  if (isNaN(a) || isNaN(b)) {
    alert("Introduce un número por favor!!!");
    } else {
    
          if (parseInt(a) > parseInt(b)) {
        alert("El número mayor es el: " + a);
    
        } else {
        alert("El número mayor es el: " + b);
        }
    }
}

// var num1 = prompt("Dime un número: ");
// var num2 = prompt("Dime un segundo número: ");

// numbers(num1, num2);

function producte(param1, param2) {
  return param1*param2;
}

var num1 = producte(8,9);
var num2 = producte(10,5);

alert("El valor de la primera multiplicación es " + num1 + " y el valor de la segunda multiplicación es " + num2);
