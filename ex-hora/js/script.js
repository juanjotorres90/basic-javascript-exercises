var date = new Date();
var time = date.getHours();

console.log(date);
console.log(time);


if (time >= 0 && time < 7) {
  alert("Buenas noches");
} else if (time >= 7 && time < 13) {
  alert("Buenos días");
} else if(time >= 13 && time < 21) {
  alert("Buenas tardes");
} else if (time >= 21 && date < 24) {
  alert("Buenas noches");
}