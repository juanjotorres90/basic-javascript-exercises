var guarderia = ["Javier", "Marta", "Carla", "Jesús", "Jorge"];

var firstSon = prompt("¿Cuál es el nombre de su primer hijo?");
var secondSon = prompt("¿Cuál es el nombre de su segundo hijo?");

guarderia.push(firstSon, secondSon);

guarderia.sort();

alert(guarderia);

var consulta = guarderia.slice(2,5);


alert(consulta);
