var num1 = prompt("Dime un número: ");
var num2 = prompt("Dime un segundo número: ");


// if (typeof num1 === 'number') {

//     if (num1 > num2) {
//     alert("El número mayor es el: " + num1);

//     } else {
//     alert("El número mayor es el: " + num2);
//     }
// } else {

//     alert("Introduce un número por favor!!!");
// }


if (isNaN(num1) || isNaN(num2)) {
alert("Introduce un número por favor!!!");
} else {

      if (parseInt(num1) > parseInt(num2)) {
    alert("El número mayor es el: " + num1);

    } else {
    alert("El número mayor es el: " + num2);
    }
}


var voteable = (age < 18) ? "Too young":"Old enough";

var voteable="";
var age = Number(4);

// if (isNaN(age)) {
//   voteable="No es un número";
// } else {
//   var voteable = (age < 18) ? "Too young":"Old enough";
// }

if (age<5) {
  voteable="no puede votar";
} else if (age<18 && age>16){
  voteable="casi puede votar";
} else {
  voteable="puede votar";
}

console.log(voteable);