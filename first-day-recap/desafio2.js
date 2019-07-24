// El Espanyol y el Atleti han metido en los últimos tres partidos
// Espanyol --> 4,6,2 goles
// Atleti --> 2, 5 , 4 goles


// 1. Calcular la media de goles de cada equipo
// 2. Calcular qué equipo es el ganador por media de goles
// 3. Cambiar valores de goles para ir viendo diferentes reultados
// 4. Real Madrid ha metido 3, 2 y 4 goles. Calcular el ganador por media de goles de los tres equipos



// 1

var mediaGolesEspanyol = (4+6+2)/3;
var mediaGolesAtleti = (2+5+4)/3;

if (mediaGolesEspanyol> mediaGolesAtleti) {
    console.log("El Espanyol gana!!")
} else if(mediaGolesEspanyol===mediaGolesAtleti) {
console.log("Empate!");
}
else {
    console.log("Gana el Atleti")
}

var mediaGolesMadrid = (3+2+4)/3;
console.log(mediaGolesEspanyol,mediaGolesAtleti, mediaGolesMadrid);

if (mediaGolesEspanyol> mediaGolesAtleti && mediaGolesEspanyol>mediaGolesMadrid) {
    console.log("El Espanyol gana!!");
} else if(mediaGolesEspanyol===mediaGolesAtleti&& mediaGolesAtleti===mediaGolesMadrid) {
console.log("Triple empate!");
}
else if (mediaGolesAtleti>mediaGolesMadrid && mediaGolesAtleti>mediaGolesEspanyol){
    console.log("Gana el Atleti");
} else if (mediaGolesMadrid>mediaGolesEspanyol && mediaGolesMadrid>mediaGolesAtleti) {
    console.log("Gana el Real Madrid");
} else {
    console.log("ganan varios");
}
