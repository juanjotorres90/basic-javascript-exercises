var nuevoArray = new Array(2);

nuevoArray[0] = new Array(2);
nuevoArray[1] = new Array(2);

nuevoArray[0][0] = 10;
nuevoArray[0][1] = 12;
nuevoArray[1][0] = 34;
nuevoArray[1][1] = 28;

// var text = nuevoArray[0];

for (var i=0; i<2; i++) {
    for (var k=0;k<1;k++) {
    for (var j=0; j<2; j++) {
        document.write(nuevoArray[i][j]);
    }
    document.write("<br>");
}


}


// document.write(nuevoArray[0][0]);


// document.getElementById("mensaje").innerHTML = text;


