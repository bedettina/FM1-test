"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
// Hay dos constructores. Este crea una "lista" nueva, es decir, un marcador nuevo, que va a apuntar
// a algo (al principio siempre va a apuntar a null)
  this.head = null; //Al principio no hay nodos entonces la head está vacía
  this.length = 0; //La length de la lista al principio es 0 porque está vacía.

}

function Node(value) {
// El segundo constructor se encarga de crear un nodo con la data que le pasemos.
this.value = value; //este valor tiene la data en sí
this.next = null; //este next indica cuál es el nodo que sigue. Apunta a ese nodo
}

LinkedList.prototype.add = function (value) { //Este método AGREGA UN NODO AL FINAL DE LA LISTA.
  // this va a ser la instancia de la linked list a la cual le aplico el método.
  
  var node = new Node(value); //Crea el nuevo nodo pasandole la data.
  var current = this.head; //me guarda el nodo sobre el cual estoy parada ahora.

  if(!current) { // esto es lo mismo que decir "if(current === null)"
  // puedo o no tener información en el head. acá estoy en el caso de que no tengo un nodo asociado al head. por lo tanto, list: - null
  this.head = node;
  this.length++;
  return node;
  }
              /* AL WHILE SE ENTRA CUANDO YA HAY POR LO MENOS DOS NODOS */
     while(current.next) { // while(current.next !== null) "current.next" es current accediendo a su
      // propiedad next. Mientras haya un next dentro de current, recorro hasta encontrar el último nodo.
     current = current.next; //en esta línea te desplazás al siguiente nodo.
  }
        current.next = node //Agrega el nodo actual a la lista
        this.length++; //aumenta en 1 la longitud de la lista
        return node //devuelve el nodo agregado
}

LinkedList.prototype.remove = function () {
  var current = this.head //hay que volver a definir la variable current para que sepa por dónde empezar.
  var aux;

  if (this.head === null) { //si la lista está vacía hay que retornar null
    return null;
  }
  
  else if(this.length === 1) {
    aux = current.value; // aux = nodo 1
    this.head = null;
    this.length--;
    return aux;
  }

  while(current.next.next) {
  current = current.next;
 }
   aux = current.next.value;
   current.next = null;
   this.length--;
  return aux;
}

/*- search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. */

LinkedList.prototype.search = function(parameter) { // puede ser un valor o un cb
  var current = this.head

  while(current) { //es lo mismo que decir "mientras current sea distinto que null"
    if(current.value === parameter) {
      return current.value;
    }
    else if(typeof parameter === 'function') {
    if(parameter(current.value)) {
      return current.value;
    }
    }
    current = current.next
  }
  return null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
/* usar método charCodeAt(i) --> n°
// acumulador = suma de n° charCodeAt
// utilizar el módulo % por el número de buckets para saber dónde colocar el elemento.

Para la función set hay que: 
1) validar que pasen un string como key, 
2) pasar la key por la fn hash y 
3)  
    a. verificar que no haya nada adentro, 
    b. si no hay nada genero una sub-estructura [ ], 
    c. si ya hay cosas, agrego a la [{}]

    fn get(key) {
      1. paso por la fn hash para obtener la posición.
      2. busco el valor y lo tomo
      3. si está devuelvo true, sino false.
    }
fn hasKey() {
  1. uso la fn get para buscar el valor
  2. retorno true o false según encuentre ese valor
}
*/
this.numBuckets = 35;
this.hashTeibol = [];
this.hash = function(key) {
  var acumulador = 0;
  
  for(let i = 0; i < key.length; i++) { //la key es una string, por eso se recorre
    acumulador = acumulador + key.charCodeAt(i)
}
return acumulador % this.numBuckets; //este número es la posición donde se guarda la data
}
}

HashTable.prototype.set = function (key, value) {
  if(typeof key !== 'string') {
    throw new TypeError('Keys must be strings'); // si no es una string hay que devolver mensaje de error.
  }

  var indice = this.hash(key)
   // política de colisiones:
  this.hashTeibol[indice] = this.hashTeibol[indice] || [];
  this.hashTeibol[indice].unshift({
    key: key,
    value: value,
  })
}

HashTable.prototype.get = function(key) { // [{}, {}, [{}], [{}], [{}, {}]]
  var indice = this.hash(key);

  for (let i= 0; i < this.hashTeibol[indice].length; i++)  {//recorrés el array dentro del array. O sea, los
  // elementos del sub-array.
  if(this.hashTeibol[indice][i].key === key) {
return this.hashTeibol[indice][i].value;
  }
}
return false;
}

HashTable.prototype.hasKey = function(key) {
  var found = this.get(key) // me puede guardar o un valor o false, según que haya encontrado

  if(found === false) return false;

  return true;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
