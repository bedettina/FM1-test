
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

<!--- 
La diferencia es que si directamente asignamos un valor y estamos en contexto global, vamos a estar definiendo esa variable como si fuera
global. Es una práctica que no se usa y que se desaconseja y probablemente nunca lo veamos usado de ese modo.
Si "definimos" una variable sin poner nada antes y estamos en un scope distinto al  global, vamos a estar
reasignando la variable global correspondiente.
 --->

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
   // a = 8, b = 9, c = 10

  var x = 10;
  console.log(x); // 10
  console.log(a); // 8

  var f = function(a, b, c) {
   // a = 8, b = 9, c = 10
    b = a; // b = 8
    console.log(b); // 8
    b = c; // b = 10
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}

c(8,9,10);
console.log(b);
console.log(x);
```

<!--- 
Output consola: //se ejecuta la función C que muestra todo esto:
10
8
8
9
Se sale de c y se consologuea lo de abajo
10
1
 --->

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```
<!--- 
undefined
ERROR! Se rompe la consola (?)
'Hola!'
 --->

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
```

<!--- 
Output:
   Franco
   undefined

Adentro del if se está redefiniendo la variable "instructor".
El "if" no es función, entonces no crea contexto. Es un "bloque".
El let y el const tienen alcance de bloque, viven dentro de un bloque. En el caso de que ambas variables
instructor estuvieran definidas con el "let", las dos variables (global y dentro del bloque) serían distintas.
 --->

```javascript
var instructor = "Tony";
console.log(instructor);
(function() { //IIFE Immediately Invoked Function Expression. Y es una función anónima porque no tiene nombre.
//Se auto-ejecuta porque en cuanto se declara, se invoca. 
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
```
<!--- 
Output:
  Tony
  Franco
  Tony

  Este lo hice bien pero no sabía lo de la función anónima jajaja.
 --->

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // vemos The Flash, porque la variable fue REASIGNADA. Eso sucede con VAR
    // las variables definidas con var no tienen alcance de bloque.
    console.log(pm); // Vemos Reverse Flash porque la variable dentro del if es distinta de la global.
    // por qué? porque fue definida con LET. Y let tiene alcance de bloque. Son dos variables distintas.
}
console.log(instructor);
console.log(pm);
```

<!---
The flash
Reverse Flash

The Flash
Franco
--->

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN (Not a number)
7 / 0 // Infinity (es un objeto de JS que indicar que el restulado de algo es infinito)
{}[0] // {0} ----> Le pasamos un objeto vacío y un array y devuelve la última expresión que evaluó.
parseInt("09") // 9   ---> es un método que pasa a un entero la string
5 && 2 // 2 ---> Tenemos un valor a la izq y derecha del ampersan. Si ambas cosas dan true, devuelve el valor de la derecha (es el último evaluado). ** IMPORTANTE** Si ponemos dos !! antes de una expresión, se devuelve si es true o false.
2 && 5 // 5 ---> por lo mismo de arriba, devuelve siempre la última expresión evaluada.
5 || 0 // 5 ---> Devuelve 5 porque evalúa la última expresión que EVALUÓ EN TRUE. Y el 0 es False, entonces devuelve 5
0 || 5 // 5 ---> Lo mismo de arriba
[3]+[3]-[10] // 23 ---> concatena el 3 y el 3 como si fueran un string (33) y resta 10 como número.
3>2>1 // false ---> va evaluando de a partes. 3 > 2 es true. y true > 1 es false jaja.
[] == ![] // true ---> bueno esta explicación es más extensa y extraña, dijo wanda.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined. Por qué? porque todavía no está definida, se define más abajo.
   console.log(foo()); // 2.  ---> la función foo retorna 2. La declaración de función en el hoisting se "sube completa".

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
<!--
Output consola:

undefined
2
-->


Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);// undefined   --- por qué? porque el false hace que la función se saltee el if, entonces pasa
//directamente al return snack - y snack está definido dentro del if, no de la función (y es una "var") 
```
<!---
si el argumento pasado fuera "true" en vez de false, sí retornaría "Friskies". Porque en ese caso entraría al if, y estaría retornando el snack que está definido dentro de la función, no el de afuera.

Si la variable snack ('Friskies') estuviera definida con let, y pasamos false como argumento, retornaría "Meow Mix".
Porque iría a tomar la variable de afuera.
--->


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```
<!---
console.log(obj.prop.getFullname()); // 'Aurelio de Rosa'
console.log(test()); // 'Juan Perez'
--->

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();  // 1    3     4     2
// se muestra así porque el primer setTimeout está demorando la ejecución entonces pasa
// a las web apis. Cuando se termina de procesar recién se muestra.
// el resto son consologueos que se muestran al instante o en el caso del segundo settimeout,
// está seteado en 0 entonces también es instantáneo.
```
