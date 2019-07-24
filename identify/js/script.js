var elementoId = document.getElementById("principal");
var elementoTag = document.getElementsByTagName("p");
// alert("El texto elegido " + elementoTag[1].innerHTML);
var elementoClass = document.getElementsByClassName("titular");
var elementoQuery = document.querySelectorAll("p.titular");

// document.getElementById("texto").innerHTML="El primer párrafo dentro de la capa principal es: " +elementoTag[0].innerHTML;

var text = "";
for (i=0;i<elementoTag.length-1;i++) {
    text += elementoTag[i].innerHTML + "<br>";
}

document.getElementById("texto").innerHTML = "El primer párrafo dentro de la capa principal es: <br>" + text;


function miFuncion(elemento,color,size) {
    var e = elemento.style;
    e.color = color;
    e.fontSize = size;
}

function reset() {
    var i = 0;
    for (i=0; i<elementoTag.length;i++) {
        elementoTag[i].style.color = "black";
        elementoTag[i].style.fontSize = "16px";
    }
}