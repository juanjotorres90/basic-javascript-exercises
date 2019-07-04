// document.write("Hello \"the best\" world!");
// alert("Hello world!");

var num1 = 10;
document.write("Mi número 1 guardado es: " + num1);


var nombre = "Juanjo";
var edad = 29;

// alert("Mi nombre es " + nombre + " y mi edad es " + edad);


// var precio = prompt("Precio:");
// var cantidad = prompt("Cantidad:");

// var total = precio * cantidad;

// alert(total);

var a=0;
var b=eval("10+25+44");
var a=++b;
document.write("<br>");
document.write(a);
document.write("<br>");
document.write("Valor de b: "+ b);




/* var nombre = prompt("Dime tu nombre:");
var apellido = prompt("Dime tu apellido:");
var hijos = eval(prompt("¿Cuántos hijos tienes?"));
var masHijos = eval(prompt("¿Desea tener más hijos?¿Cuantos?"));
var totalHijos = hijos + masHijos;
document.write("<p>");
document.write("Hola, " + nombre + " " + apellido);
document.write("</p>");
document.write("<p>");
document.write("Ahora tienes " + hijos + " hijo/s y quieres tener " + masHijos + " más.");
document.write("</p>");
document.write("<p>");
document.write("Total de hijos "+ totalHijos);

document.write("</p>"); */




/* var nombre = prompt("Dime tu nombre:");
var apellido = prompt("Dime tu apellido:");
var age = eval(prompt("¿Cuántos años tienes?"));
var lessAge = eval(prompt("¿Cuántos años te quieres quitar?"));
var totalAge = age - lessAge;

alert("No te engañes " + nombre + " " + apellido + ". Estarías más guapo con " + totalAge + " años, la verdad.") */




/* var alumnes = ["Xavi", "Brayan", "Helena","Juanjo"];
alert(alumnes[2]);
alert("En el aula hay "+ alumnes.length + " alumnos.");
alumnes.push("Alex");
alert(alumnes);
alert("En el aula hay "+ alumnes.length + " alumnos."); */





// var productos = [];
var productos = new Array;
var producto1 = prompt("Dime el primer producto");
var producto2 = prompt("Dime el segundo producto");
var producto3 = prompt("Dime el tercer producto");
var producto4 = prompt("Dime el cuarto producto");

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);

alert("Aquí tienes todo lo que vas a comprar: " + productos + ".");
document.write("<h1>Productos de la compra</h1>")
document.write("<ul>");
document.write("<li>"+productos[0]+"</li>");
document.write("<li>"+productos[1]+"</li>");
document.write("<li>"+productos[2]+"</li>");
document.write("<li>"+productos[3]+"</li>");
document.write("</ul>"); 

document.write("<ul>");
document.write("<li>"+productos[0]+"</li>");

document.write("<li>"+productos[productos.length-1]+"</li>");
document.write("</ul>"); 


