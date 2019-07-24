var miFecha = new Date();




var diaSemana = miFecha.getDay();

var weekDay = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];


var months = miFecha.getMonth();

var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");



document.getElementById("mensaje").innerHTML = "Hoy es " + weekDay[diaSemana] + ", " + miFecha.getDate() + " de " + meses[months] + " de " + miFecha.getFullYear();



var fecha1 = new Date(2019, 4, 5);
var fecha2 = new Date(2019, 4, 5, 2);

console.log(fecha1);

fecha1.setHours(0, 0, 0, 0);
fecha2.setHours(0, 0, 0, 0);

var fechaMs1 = fecha1.getTime();
var fechaMs2 = fecha2.getTime();





if (fechaMs1 == fechaMs2) {
  alert("Las fechas son iguales");
} else {
  alert("Las fechas no son iguales");
}





document.getElementById("mensaje2").innerHTML = miFecha.getDate() + "/" + (miFecha.getMonth()+1) + "/" + miFecha.getFullYear();

document.getElementById("mensaje3").innerHTML = miFecha.toLocaleDateString();


var birthDate = new Date(1990, 4, 25);

var birthDateMs = birthDate.getTime();

var dateMs = miFecha.getTime();

var differenceMs = dateMs - birthDateMs;

document.getElementById("mensaje4").innerHTML = "Nací hace " + Math.floor(differenceMs/1000/60/60/24) + " días.";