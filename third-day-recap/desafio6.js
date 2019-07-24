'use strict';

/* 1. Crear 5 objetos de personas, con los campos fullName, age, gender("male/female")
2. Crear una funcion separatePeople que cree dos arrays: uno con las personas mayores de edad y otro con los menores.
3. Crear una función countRepeatedNames que detecte si un nombre está repetido y sumarlo a un contador. Probar a repetir un nombre y que efectivamente el contador funciona.
4. Crear una funcion que calcule la media de edad.
5. Crear una funcion que devuelva un objeto con dos campos, la persona de menor edad y la persona de mayor edad. */


//! 1

var brayan = {
    fullName: "Brayan Trujillo",
    age: 27,
    gender: "male"
};

var helena = {
    fullName: "Helena Peris",
    age: 17,
    gender: "female"
};
var guillem = {
    fullName: "Alexandre Montserrat",
    age: 15,
    gender: "male"
};
var alex = {
    fullName: "Alexandre Montserrat",
    age: 28,
    gender: "male"
};
var estela = {
    fullName: "Estela López",
    age: 23,
    gender: "female"
};




//!2

var people = [brayan,helena, guillem, alex, estela];
var older18 = [];
var younger18 = [];

function separatePeople() {
       for (var i = 0; i<people.length;i++) {
           if (people[i].age>=18) {
               older18.push(people[i]);
           } else {
               younger18.push(people[i]);
           }
       }
}
separatePeople();
console.log(older18);
console.log(younger18);




//!3

var contador = 0;
var repeatedName = "Ningún nombre repetido";

function countRepeatedNames() {
    for (var i = 0; i<people.length;i++) {
        for (var j = 0; j<people.length;j++) {

        if (people[i].fullName === people[j].fullName && i!==j) {
            contador++;
            repeatedName = people[i].fullName;
        } 
    }
    var result = {
        counter: contador,
        name: repeatedName
    }
    }
}
var repeatedNames = countRepeatedNames();
console.log(contador);
console.log(repeatedName);




//!4

function calcAverage() {
    var sum = 0;
    for (var i = 0; i<people.length;i++) { 
      sum += people[i].age;
    }
return sum/people.length;
}

console.log(calcAverage());




//!5

var oldestYoungest = new Array;
var oldest;
var youngest;
var ages = [];

function ageWho() {
    for (var i = 0; i<people.length;i++) {
     ages.push(people[i].age);
    }
    oldest = Math.max(...ages);
    youngest = Math.min(...ages);

    for (var i = 0; i<people.length;i++) {
       if (oldest === people[i].age) {
           oldestYoungest.push(people[i]);
       } else if (youngest === people[i].age) {
           oldestYoungest.push(people[i]);
       }
       }
   
}
    
ageWho();
console.log(oldest);
console.log(youngest);
console.log(oldestYoungest);

//!5 v2

function calculateOlderYounger(people) {
    var older = people[0];
    var younger = people[0];


    for (var i =0; i<people.length; i++) {
        if (people[i].age >older.age) {
            older = people[i];
        } else if (people[i].age < younger.age) {
            younger = people[i];
        }
    }

    // var result = [older, younger];

    var result = {
        older: older,
        younger: younger
    };
    return result;

}

var youngerOlderObject = calculateOlderYounger(people);
console.log("5 -> La persona más mayor es: ", youngerOlderObject.older);
console.log("5 -> La persona más menor es: ", youngerOlderObject.younger);
