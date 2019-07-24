
var x = document.getElementById("miBoton");

// x.addEventListener("click", mensaje, false);

// function mensaje() {
//     alert("Tanto tocar");
// }

x.addEventListener("click", function() {
    alert("Tanto tocar");
    x.style.backgroundColor = "lightblue";
}, false);