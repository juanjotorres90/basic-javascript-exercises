var date = new Date();
var fecha = date.toLocaleDateString();
console.log(fecha);

function showDay() {
    var x = document.getElementById("day");
    x.innerHTML += fecha;
}