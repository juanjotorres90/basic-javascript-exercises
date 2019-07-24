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





/* Implementar la calculadora mediante loops y objetos:

1. Crear un objeto pedro con el array de valores de las facturas, bills, fullName.
2. Añadir un método en este objeto para calcular las propinas, calcTips()
3. Este método debe incluir un loop sobre las facturas para ir calculando las propinas.
4. Pintar por consola el array con todas las propinas y la del total pagado: (factura+propina).
5. Crear una funcion que calcule la media de propinas pagado. */


var pedro = {
    fullName: "Pedro López",
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.tips[i] + bill;
        }
    },
    calcAverage: function() {
        var tipsSuma = 0;
        for (var i = 0; i < this.tips.length; i++) {
            tipsSuma += this.tips[i]
        }
       this.tipAverage = tipsSuma / this.tips.length;
    }
};
pedro.calcTips();
console.log(pedro.tips);
console.log(pedro.finalValues);

pedro.calcAverage();


/* function calcAverage(tips) {
    var tipsSuma = 0;
    for (var i = 0; i < tips.length; i++) {
        tipsSuma += tips[i]
    }
    return tipsSuma / tips.length;
};

console.log(calcAverage(pedro.tips)); */

console.log(pedro.tipAverage);