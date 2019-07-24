'use strict';

/* Vas de viaje por la costa oeste de EEUU y quieres tener bien solucionado el tema de las propinas mediante una calculadora:
- Si la factura es menos de 50$, calcular el 20%.
- Si oscila entre 50$ y 200$, calcular el 15%.
- Si es mayor de 200$ será el 10%.
Has ido a tres restaurantes con un gasto de $124, $48, $268.

Obtener dos arrays que contengan:

1. Las tres facturas.
2. Las tres propinas (aplicando los porcentajes que tocan).
3. Precio de las tres facturas con propina.
4. Suma de todo el gasto en restaurantes */


var bills = [124,48,268];
var tips = [];

function getTip(bill) {

    var tipFactor;
    if (bill>=200) {
        tipFactor = 0.1;
    } else if (bill>50 && bill<200) {
        tipFactor = 0.15;
    } else {
        tipFactor = 0.20;
    }
    var tip = tipFactor * bill;
    return tip;
}


for (var i=0;i<bills.length;i++) {
    tips[i] = getTip(bills[i]);
 
}
console.log(tips);

var billWithTips=[];
for (var i=0;i<bills.length;i++) {
    billWithTips[i] = tips[i]+bills[i];
 
}

console.log(billWithTips);



var totalValue = 0;
for (var i=0;i<billWithTips.length;i++) {
   totalValue +=  billWithTips[i];
 
}
console.log(totalValue);