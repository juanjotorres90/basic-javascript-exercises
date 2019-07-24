var ciutats=["Barcelona","Valencia","Albacete","London","Teruel"];
var text = "";
var i;

for (i=1; i<=10; i++) {
    text += "The number is " + i + "<br>";
}

document.getElementById("mensaje").innerHTML = text;
var ciudades = "";
for (i = 0; i < ciutats.length; i++) {
    ciudades += (i+1) + ". " + ciutats[i] +"<br>";
}
document.querySelector("#mensaje2").style.paddingTop="2rem";
document.getElementById("mensaje2").innerHTML = ciudades;

document.querySelector("table").style.marginTop="2rem";


var ciudades2 = "<table><tr><th colspan='2'>CIUDADES</th></tr>";


for (i = 0; i < ciutats.length; i++) {
    ciudades2 += "<tr>"+ "<td>" + (i+1) + "</td>" + "<td>"+ ciutats[i]+"</td>" +"</tr>";
}
ciudades2 += "</table>"


document.getElementById("tabla").innerHTML = ciudades2;

// document.querySelector("td").style.border="1px solid black";
// document.getElementById("tabla").innerHTML = "<tr>" + "<th>" + "CIUDADES" + "</th>" + "</tr>";
