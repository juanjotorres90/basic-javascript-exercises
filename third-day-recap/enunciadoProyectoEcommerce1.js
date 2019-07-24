/*
Vamos a construir un ecommerce. Donde podamos
- Añadir productos a la cesta de la compra
- Quitar productos de la cesta de la compra
- Vaciar carrito
- Añadir unidades de un producto determinado

En esta primera parte, haremos:
1. Crear dos objetos producto1 y producto2, que contengan los csampos: name, price, description.
2. Crear una función addToCart que acepte objetos producto y los añada al array shoppingCart previamente inicializado.
4. Añadir los producto1 y producto2 al carrito usando la función addToCart.
5. Calcular el precio total de los procuctos de shoppingCart sin usar loops.
6. Calcular el precio total de los procuctos de shoppingCart usando loops.
*/
'use strict';


var producto1 = {
    name: "Producto bonito",
    price: 25,
    description: "Muy bonito"
}

var producto2 = {
    name: "Producto genial",
    price: 15,
    description: "Es genial para todo"
}

var shoppingCart = [];
var button1 = document.getElementById("boton1");
var button2 = document.getElementById("boton2");

function addToCart(producto) {
  shoppingCart.push(producto);
};

// button1.addEventListener("click", addToCart(producto1), false);
// button2.addEventListener("click", addToCart(producto2), false);

addToCart(producto1);
addToCart(producto2);

console.log(shoppingCart);

var totalPrice = producto1.price + producto2.price;
console.log(totalPrice);

var totalPriceLoop = 0;
for (var i=0; i<shoppingCart.length;i ++) {
    totalPriceLoop += shoppingCart[i].price;
}
console.log(totalPriceLoop);