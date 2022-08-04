'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // "Trabajo con el orden
  // del número al revés. De derecha a izq.
  // Primero elevo el número a la potencia y después multiplico por el binario"
  //     1 1 1 = 1 x 2 el 2  + 1 x 2 el 1 + 1 x 2 el 0
  // 1 x 2 ^ 2 = 4
  // 1 x 2 ^ 1 = 2
  // 1 x 2 ^ 0 = 1    sumar todo. 7

  // pos 2 1 0      Multiplicar el número por 2 y elevarlo a la posición

  // ** Mi intento mal hecho **
var numero = num.split("").reverse().join("").split("")
var numeroFinal = 0
for(var i = 0; i < numero.length; i++) { 
numeroFinal = numeroFinal + numero[i] * 2 ** [i];
} 

return numeroFinal
  
  //var numeroFinal = 0
  //for(var i = 0; i < num.length; i++) {
   //numeroFinal = numeroFinal + num[i] * 2 ** (num.length - 1 - i); // El número que está en la posición de i, multiplicado
   
   //por 2 y elevado a la posición (** es el "elevado"). La posición se saca de num.length - 1 - i menos la posición,
   // porque estamos leyendo el número al revés
   // 1 1 1 0                        
   // 0 1 2 3 --> posiciones originales
   
   // 1 2 3 4 --> length original
   //   1 2 3   --> length - 1
   
   // length - 1 - i siempre da el valor que buscamos.
   // 3 - 0 (i) es 3 
   // 3 - 1 (i) es 2
   // 3 - 2 (i) es 1
   // 3 - 3 (i) es 0

   // 1 * 2 ** 3
   // 1 * 2
   
  //return numeroFinal;
}

function DecimalABinario(num) {
  // tu codigo aca
  // Tomás un valor decimal y vas diviendo a la mitad. Separás la parte entera de lo decimal
  // 7 = 7 / 2      3  --> 1 es el resto/residuo
  // Entero    Resto
  //   3         2     
  // Lo divido nuevamente. 3/2 = 1  1  --> 1
  //   Dividís de nuevo, 1 / 1 ----> el resto es uno.
  // Entonces sumás todos los restos. 111 es el binario.
  // let decimal = prompt(num);
  // return Number(decimal).toString(2);

  // ** RESOLUCIÓN 2 **
  // let bin = 0;
  //   let rem, i = 1, step = 1;
  //   while (num != 0) {
  //       rem = num % 2;
  //       console.log(
  //           `Step ${step++}: ${num}/2, Remainder = ${rem}, Quotient = ${parseInt(num/2)}`
  //       );
  //       num = parseInt(num / 2);
  //       bin = bin + rem * i;
  //       i = i * 10;
  //       var resultado = bin.toString();
  //   }
  //   return resultado

  var binario = []

  while (num > 0) {
    binario.unshift(num % 2);
    num = Math.floor(num / 2);
  }
return binario.join('')

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}