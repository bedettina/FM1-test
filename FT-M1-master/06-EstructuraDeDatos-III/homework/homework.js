"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value; //cuando invoquemos nos pasan un value.
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function(value) {
  
  if (value > this.value) {
    if(this.right !== null) {
      //si sigue habiendo nodos, hay que seguir moviéndose para la derecha
    this.right.insert(value) //llamar recursivamente a la función para que lo haga de nuevo
    }
  else {
    this.right = new BinarySearchTree(value)
  }
}

if (value < this.value) {
  if(this.left !== null) {
    //si sigue habiendo nodos, hay que seguir moviéndose para la izquierda
  this.left.insert(value) //llamar a la función para que lo haga de nuevo
  }
else {
  this.left = new BinarySearchTree(value)
}
}
}

BinarySearchTree.prototype.size = function () {
  if(this.right === null && this.left === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size(); //llamada recursiva
  if(this.right !== null && this.left === null) return 1 + this.right.size(); //otra recusión
  if(this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size(); //último caso de recursión
}

BinarySearchTree.prototype.contains = function(value) {
/* if (value === this.value) {
  return true;
}
if (value === this.right) {
return true;
}
if (value !== this.right) {
  if(this.right !== null && this.right === value) { //en el caso de encontrar el nodo
  return true;
  }
    else this.right.contains(value) 
 }
      if (value === this.left) {
       return true;
      }
      if (value !== this.left) {
      if(this.left !== null && this.left === value) { //en el caso de encontrar el nodo
       return true;
      }
      else this.left.contains(value) 
 }
 return false;*/ 
 if(this.value === value) {
  return true;
 }
 else if(value > this.value) {
  if (this.right === null) {
    return false;
  }
  return this.right.contains(value) //recursión
 }
 else {
  if(this.left === null) {
    return false;
  }
  return this.left.contains(value) //llamada recursiva de nuevo
 }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  if(order === 'pre-order') { // primero guarda root, después izq y después derecha 
  cb(this.value);
  if(this.left !== null) this.left.depthFirstForEach(cb, order);
  if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }

  else if(order === 'post-order') { // primero izq y después derecha y después root
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value);
    }
    else { //in-order: izq - root - derecha
    if(this.left !== null) this.left.depthFirstForEach(cb,order);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb,order);
    }
  }

    BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) { //recorre a lo ancho
    // aux --> array = [25, 5, 17]
    
      if(this.left !== null) {
        array.push(this.left);
      }
      if(this.right !== null) {
        array.push(this.right);
          }
    cb(this.value)
    if(array.length > 0) {
      array.shift().breadthFirstForEach(cb, array) //ahora le paso un array que tiene un 25 adentro
    //es lo mismo que tener 15.breadthFirstForEach()
    }
    }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
