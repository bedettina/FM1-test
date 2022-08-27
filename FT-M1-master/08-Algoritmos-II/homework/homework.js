'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  [5, 1, 4, 2, 8]
      p
   i
   [1]    [5, 4, 2, 8]

  */

if(array.length <= 1) { // primero, si el array es igual a 1 o a 0 ya está ordenado, en ese caso lo retornamos
  return array // ESTE ES EL CASO BASE que para la ejecución
}

var pivot = array[0]; //el pivote lo ponemos donde queremos, lo puse en 0
var left = [] // creamos un array para guardar a la izquierda del pivote los menores
var right = [] // otro para guardar a la derecha los mayores
var same = []; // otro para guardar los que son iguales al pivote

for(let i= 0; i < array.length; i++) { // hacemos un bucle for para recorrer el array
  if(array[i] < pivot) { // si el array es menor al pivote, va a la izquierda
    left.push(array[i])
  }
  else if (array[i] === pivot) { //si es igual, va al same
    same.push(array[i]);
  }
  else {
    right.push(array[i]) //si es mayor va a la derecha
  }
}
return quickSort(left).concat(same).concat(quickSort(right)); /* acá devolvemos el resultado final de:
1. los valores iguales concatenados
2. los valores de la izquierda llamados como parámetro recursivamente para hacerles el for de nuevo
3. los valores de la derecha llamados como parámetro para hacerles el for de nuevo
TODO CONCATENADO.
*/
}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /* [5, 1, 4, 2, 8]
   [5, 1, 4]   [2, 8]
    i              j

    [1] [5] [4]  [2] [8]
  */
/*let middleIndex = Math.ceil(array.length / 2);
let firstHalf = array.splice(0, middleIndex);   
let secondHalf = array.splice(-middleIndex);
let arrayfinal = [] */



/*
if(array.length === 1) { //CASO BASE
  return array;
}

var middleIndex = Math.floor(array.length / 2);
var firstHalf = array.slice(0, middleIndex);   
var secondHalf = array.slice(middleIndex);

organizar(mergeSort(firstHalf), mergeSort(secondHalf));
}

function organizar(firstHalf, secondHalf) {

var leftIndex = 0;
var rightIndex = 0;
var arrayFinal = []

while(leftIndex < firstHalf.length && rightIndex < secondHalf.length) {
  if(firstHalf[leftIndex] < secondHalf[rightIndex]) {
    arrayFinal.push(firstHalf[leftIndex]);
    leftIndex++;
  }
  else {
    arrayFinal.push(secondHalf[rightIndex]);
    rightIndex++;
  }
}
return arrayFinal.concat(firstHalf.slice(leftIndex)).concat(secondHalf.slice(rightIndex));
}
*/


if(array.length === 1) {
  return array;
}

var mitad = Math.floor(array.length/2);
var left = array.slice(0,mitad);
var right = array.slice(mitad);

return ordenar(mergeSort(left), mergeSort(right))
  
}

function ordenar(left,right) {
  var leftIndex = 0;
  var rightIndex = 0;
  var array = [];
  
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex]);
      leftIndex++;
    }
    else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
