var aula = ["Brayan", "Helena", "Guille", "Estela"];

// var alumno = aula.pop();  elimina y extrae el último elemento de la array
// var alumno = aula.shift(); //el primer elemento
var alumno = aula.unshift("Alex"); //añade un elemento al principio
// alert(alumno);

// aula[2] = "Xavi"; //cambia un elemento de la array
// delete aula[2]; //elimina un elemento de la array pero deja el espacio
// aula.push("Marc");

var aulaChicos = ["Victor", "Ivan", "Andrei", "Willem"];
var aulaChicas = ["Debi", "Helena", "Laura", "Estela"];
var aulaTotal = aulaChicos.concat(aulaChicas);

var nuevaAula = aulaTotal.slice(1, 3);

alert(aulaTotal);
alert(nuevaAula);

aula.splice(2, 2, "Xavi", "Marc", "Debi");



var notas = [17,7,9,10];

// aula.sort();

notas.sort(function(a,b){return a-b}); //para ordenar númericamente


alert(aula);
// notas.sort();
alert(notas);


