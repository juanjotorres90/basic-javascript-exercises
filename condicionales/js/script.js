var num1 = parseInt(prompt("Dime un número: "));
var num2 = parseInt(prompt("Dime un segundo número: "));
var num3 = parseInt(prompt("Dime un tercer número: "));

// if (typeof num1 === 'number') {

//     if (num1 > num2) {
//     alert("El número mayor es el: " + num1);

//     } else {
//     alert("El número mayor es el: " + num2);
//     }
// } else {

//     alert("Introduce un número por favor!!!");
// }

// para dos números

/* if (isNaN(num1) || isNaN(num2)) {
alert("Introduce un número por favor!!!");
} else {

      if (parseInt(num1) > parseInt(num2)) {
    alert("El número mayor es el: " + num1);

    } else {
    alert("El número mayor es el: " + num2);
    }
} */



if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("Introduce un número por favor!!!");
} else {

  if (num1 > num2 && num1 > num3) {
    alert("El número mayor es el: " + num1);

  } else if (num2 > num3) {
    alert("El número mayor es el: " + num2);
  } else {
    alert("El número mayor es el: " + num3);
  }


}







function compareNumbers(a, b, c) {
  var result = Math.max(a, b, c);
  return result;

}

var result = compareNumbers(num1, num2, num3);
alert(result);






var voteable = (age < 18) ? "Too young" : "Old enough";

var voteable = "";
var age = Number(4);

// if (isNaN(age)) {
//   voteable="No es un número";
// } else {
//   var voteable = (age < 18) ? "Too young":"Old enough";
// }

if (age < 5) {
  voteable = "no puede votar";
} else if (age < 18 && age > 16) {
  voteable = "casi puede votar";
} else {
  voteable = "puede votar";
}

console.log(voteable);