function temp(a) {
  return a * 9 / 5 + 32;
}

var tempF = temp(parseInt(prompt("Dime la temperatura en Celsius:")));

if (isNaN(tempF)) {
  alert("¡Introduce un número por favor!")
} else {
  alert(tempF + " ºF");
}