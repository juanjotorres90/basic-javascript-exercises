'use strict';

//! Loops y arrays
// Vamos a crear un array y mediante un bucle for vamos a practicar los conceptos de continue y break

var montse = ['Montse', 'Farres', 1987, 'designer', false, 'blue'];


//Loop para practicar continue
for( var i = 0; i<montse.length; i++) {
    if(typeof montse[i] !== 'string') {
        continue; 
    }
    console.log(montse[i]);
}


//Loop para practicar break
for( var i = 0; i<montse.length; i++) {
    if(typeof montse[i] !== 'string') {
        break;
    }
    console.log(montse[i]);
}