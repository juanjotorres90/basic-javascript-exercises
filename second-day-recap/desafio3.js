'use strict';
// Vamos a calcular el IMC de Pedro y Antonio
// IMC = peso (kg) / (altura (m) * altura(m))


// 1. Crear las variables altura y peso de Pedro y Antonio
// 2. Calcular su IMC
// 3. Crear un boolean que indique si Pedro tiene un IMC mayor que Antionio
// 4. Imprimir resultado por consola "¿Pedro tiene un IMC mayor que Antonio? True"


var alturaPedro = 1.78;
var alturaAntonio = 1.70;

var pesoPedro = 85;
var pesoAntonio = 67;

var imcPedro = pesoPedro / (alturaPedro * alturaPedro);
var imcAntonio = pesoAntonio / (alturaAntonio * alturaAntonio);

var esMayorPedro = imcPedro > imcAntonio;


console.log(imcPedro, imcAntonio);

console.log("¿Pedro tiene un IMC mayor que Antonio? " + esMayorPedro);

var pedro = {
    name: "Pedro",
    altura: 1.78,
    peso: 85,
    calcIMC: function () {
        this.imc = this.peso / (this.altura * this.altura)
    }
};

var antonio = {
    name: "Antonio",
    altura: 1.70,
    peso: 67,
    calcIMC: function () {
        this.imc = this.peso / (this.altura * this.altura);
    }
};
pedro.calcIMC();
console.log(pedro.imc);
antonio.calcIMC();




if (pedro.imc > antonio.imc) {
    console.log(pedro.name + " tiene mayor IMC");
} else {
    console.log(antonio.name + " tiene mayor IMC");
}