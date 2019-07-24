var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log(date);
console.log(hours);

var plusHours = prompt("¿Cuántas horas quieres añadir?");

if (plusHours >= 24 || isNaN(plusHours)) {
  alert("En este ejercicio no contamos los días, un día solo tiene 24 horas!!");
} else {

  var plusMinutes = prompt("¿Cuántos minutos quieres añadir?");
  var plusSeconds = prompt("¿Cuántos segundos quieres añadir?");

  if (isNaN(plusHours) || isNaN(plusMinutes) || isNaN(plusSeconds)) {
    alert("Introduce números por favor!! (Pero coherentes)")
  } else {


    if (plusMinutes == 59 && plusSeconds == 59 && plusHours == 23) {
      plusHours = "00";
      plusMinutes = "00";
      plusSeconds = "00";
    } else {

      if (plusSeconds >= 0 && plusSeconds < 59) {
        plusSeconds++;
      } else if (plusSeconds >= 60 && plusSeconds < 120) {
        plusSeconds++;
        plusSeconds = plusSeconds - 60;
        plusMinutes++;
      } else if (plusSeconds >= 120) {
        alert("Ni se te ocurra poner tantos segundos!!  (<120 please)")
      }

      if (plusMinutes >= 60 && plusMinutes < 120) {
        plusHours++;
        plusMinutes = plusMinutes - 60;
      } else if (plusMinutes == 59 && plusSeconds == 59) {
        plusMinutes = "00";
        plusSeconds = "00";
        plusHours++;
      } else if (plusMinutes >= 120) {
        alert("Ni se te ocurra poner tantos minutos!!  (<120 please)")
      }


    }
    
    alert("La hora introducida es: " + plusHours + ":" + plusMinutes + ":" + plusSeconds);

  }
}