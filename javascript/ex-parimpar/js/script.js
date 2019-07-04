

function evenCheck(a) {



  if (isNaN(a)) {
    alert("Introduce un número por favor!!!");
    } else {
    parseInt(a)%2 == 0 ? alert("El número es par") :   alert("El número es impar");
        //   if (parseInt(a)%2 == 0) {
        // alert("El número es par");
    
        // } else {
        // alert("El número es impar");
        // }
    }
}

var num1 = prompt("Dime un número: ");


evenCheck(num1);

