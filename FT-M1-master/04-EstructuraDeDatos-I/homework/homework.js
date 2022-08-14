'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.
nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89. 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n < 0) {
  return -1; // esta es una excepción, por si nos pasan un número negaivo
  }
    else if (n == 0) {
    return 1; // este es el caso de corte.
    }
      else {
      return (n * nFactorial(n - 1));
      }
}

/*
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.
0  1  2  3  4  5  6   7   8   9  10  11
*/

function nFibonacci(n) {
  if (n === 0) {
    return 0
  }
  else if (n === 1) { 
    return 1
}
else {
    return nFibonacci(n - 1) + nFibonacci(n - 2); // el proceso que hace esta recursión es medio complejo, es un llamado de función doble, o sea, se bifurca. Digamos que si pasáramos de argumento por ejemplo un cuatro, sucedería esto:
    /*                                nFibonacci(2)
                    nFibonacci(3)         +
                                      nFibonacci(1)
    nFibonacci(4)          +
                                      nFibonacci(1)
                   nFibonacci(2)           +
                                      nFibonacci(0)
    
    Y se va resolviendo el arbolito, va retornando los valores en cuanto llega a la condición de corte.
    O sea era RE COMPLEJO jaja. 
                                      */
}
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() { // esto es una función constructora. Si después hago "var q = New Queue()" estaría creando un queue nuevo que va a ser un array vacío! SI ES QUE ENTENDÍ BIEN
  this.queue = []; // tengo una propiedad queue con un array dentro. This se usa porque va a estar refiriendo al que está siendo invocado. Dado que las fn constructoras hacen "fotocopias" y necesitás saber a quién tiene que aplicar.
}

Queue.prototype.enqueue = function(elemento) {
  this.queue.push(elemento) // agregás un método al prototipo con la función que piden. Recibe un "elemento" como argumento que es lo que vas a pushear al final del array.
}

Queue.prototype.dequeue = function() {
return this.queue.shift() // agregas un método para sacar elementos y ponés RETURN para devolver (o sea, para mostrar) el elemento que sacaste. Yo al principio no lo había puesto. No me di cuenta. No hace falta hacer nada con el undefined, porque si el array está vacío va a devolver undefined por defecto.
}

Queue.prototype.size = function() {
  return this.queue.length; //agregas un método para mostrar la longitud del array.
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
