'use strict'
// No cambies los nombres de las funciones.


function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Devolver la secuencia de un número dado.
  // Tu código:
var array = [1];
var indice = 2

if(num < 0) {
  return -1;
}
else if(num === 0) {
  return 1;
}
else { 
  while (num !== 1) { 
    if(num % indice === 0) {
      array.push(indice);
      num = num / indice
    }
    else indice++;
  }
  return array;
}
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // [5, 1, 4, 2, 8]
  //  0  1  2  3  4
  // 
  // Tu código:
var arraySorteado = array
var i
var j

for(i = 0; i < array.length; i++) {
  if(array[i] > array[i+1]) {
    let right = array[i+1];
    let left = array[i]
    arraySorteado[i+1] = left;
    arraySorteado[i] = right;
  }

  for(j = 0; j < arraySorteado.length; j++) {
    if(array[j] > array[j+1]) {
      let right = array[j+1];
      let left = array[j]
      arraySorteado[j+1] = left;
      arraySorteado[j] = right;
  }
  }
  }
  return arraySorteado
  }


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
  //  0  1  2  3  4                         
var i
var j

for(i= 1; i <= array.length; i++) {
  if(array[i] < array[i - 1]) {
    let position = array[i];
    let left = array[i-1]
    array[i - 1] = position;
    array[i] = left;
  }

for(j= 1; j <= array.length; j++) {
  if(array[j] < array[j - 1]) {
    let position = array[j];
    let left = array[j-1]
    array[j - 1] = position;
    array[j] = left;
  }
}
}
return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5,   1,   4,   2,   8]
  //  0    1    2    3    4
  // 
  // i = 1
  // min = 2
  // j = 2
  // aux = 5

for(let i = 0; i < array.length-1; i++) {
  let min = i;
  for(let j = i+1; j < array.length; j++) {
    if(array[j] < array[min]) {
      min = j
    }
  }
  let aux = array[i];
  array[i] = array[min];
  array[min] = aux;
}
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
