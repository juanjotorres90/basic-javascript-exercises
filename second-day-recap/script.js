'use strict';


//! Array
var tickets = [234, 23, 23];
var secondValue = tickets[1];

//! Objetos
//La diferencia con array es que hay key: value
//Crear objeto que defina la persona Pedro
// Los clientes de tu app no quieren que salga en tu perfil el año de nacimiento, quieren que salga su edad. Hay que hacer un método para calcularlo.

var pedro = {
    firstName: 'Pedro',
    lastName: 'Oliveras',
    birthYear: 1989,
    family: ['Montse', 'Xavi', 'Maria'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age= 2019-this.birthYear;
    }
};
pedro.calcAge();
console.log("Edad de Pedro es:",pedro.age);


console.log(pedro.firstName, pedro.lastName);

console.log(pedro.birthYear);
pedro.birthYear = 1700;
console.log(pedro.birthYear);

var luis = new Object();
luis.firstName = 'luis';

