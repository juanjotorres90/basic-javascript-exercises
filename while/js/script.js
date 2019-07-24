/* var text="";
var i=0;
while(i<10) {
    text+="<p> El número es: " + i + "</p>";
    i++;
}

document.getElementById("mensaje").innerHTML = text; */

var text="";
var i=0;


do {
    text+="<p> El número es: " + i + "</p>";
    i++;
}
while(i<10);

document.getElementById("mensaje").innerHTML = text;
