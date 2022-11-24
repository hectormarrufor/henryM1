# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); 
   console.log(a); 
   var f = function (a, b, c) {
      b = a;
      console.log(b); 
      b = c;
      var x = 5;
   };
   f(a, b, c); 
   console.log(b); 
};
c(8, 9, 10); // 10 8 8 9
console.log(b); // 10
console.log(x); // 10
```

```javascript
console.log(bar); //undefined
console.log(baz); //2
foo(); // 'Hola!'
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // 'Franco'
```

```javascript
var instructor = 'Tony';
console.log(instructor); // 'Tony'
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})(); // 'Franco'
console.log(instructor); // 'Franco'
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // 'The Flash'
   console.log(pm); // 'Reverse Flash'
}
console.log(instructor); // 'The Flash'
console.log(pm); 'Franco'
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0  //
{}[0]  //null
parseInt("09") // 09
5 && 2 true
2 && 5 true
5 || 0 true
0 || 5 true
[3]+[3]-[10] //
3>2>1 //true
[] == ![] // false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//undefined
//2

/* Se imprime eso porque primero el codigo se ejecuta una primera vez (fase de creacion) para asignar un espacio de memoria a las variables y funciones que se declaran en cada uno de los scope, en este caso la funcion test. Ella crea la variable var a pero no le asigna un valor todavia, eso lo va a hacer en el segundo barrido del codigo (fase de ejecucion). como el console.log se hace antes de asignarle un valor a var a, la imprime undefined

y en el caso de imprimir el return de foo si imprime el numero dos porque el numero no esta siendo guardado en una variable sino que se esta retornando de la funcion, por lo tanto cuando se llama inmediatamente ya ese numero se tiene disponible para ser retornado en el console.log */
```

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

getFood(false); // 'Meow Mix'

/*no se imprime nada en consola porque la llamada de la funcion no esta dentro de un console.log*/

/* si la llamada de la funcion estuviese dentro de un console.log, Imprime 'Meow Mix' porque snack es en un principio una variable global a la que se puede acceder desde cualquier scope hijo (en este caso se puede acceder desde dentro de la funcion getFood(). Ahora bien, getFood() intenta cambiar el valor de la variable snack dentro de un condicional if, pero eso no tiene exito ya que para que el if se ejecute, el parametro food debe ser true, pero en este caso, la llamada a la funcion se hizo pasando como parametro un false, por lo que el if no se va a ejectutar, y snack no va a cambiar a 'Friskies'). el unico comando que se ejecuta dentro de la funcion es el return snack fuera del if, y snack es una variable a la que getFood puede acceder porque el scope de snack es padre del scope getFood, por lo tanto retorna el 'Meow Mix' que es el valor que se le dio en dicho scope global */
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // 'Aurelio de Rosa' porque el metodo es hijo del objeto prop por ende el metodo se aplica a las propiedades de dicho objeto, y la propiedad fullname de ese objeto es 'aurelio de rosa'

var test = obj.prop.getFullname;

console.log(test()); // 'aurelio de rosa' porque test es un espacio de memoria que se esta igualando a la funcion getFullname que sirve al objeto obj. por ende, dicha funcion retirna la propiedad fullname de el objeto prop, por lo tanto devuelve el valor 'aurelio de rosa' */
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing(); // 1 4 3 2

/*Se imprime en ese orden porque al ejecutar la funcion lo primero que hay es un console log de 1, los siguientes dos comando son setTimeout los cuales son unos web API y por lo tanto son asincronos, lo cual va a ser trasladado a un contexto distinto de ejecucion tardia, y le va a dar prioridad a lo sincrono en ejecutarse, por lo cual lo siguiente que se ejecuta es el log del 4 el cual no esta dentro de un setTimeOut. El siguiente en imprimirse es el 3 ya que de los dos comandos asincronos, el 3 es el que tiene menos tiempo de retardo (0ms) por lo tanto es el primero en ejecutarse de los dos comandos que fueron al contexto web api y posteriormente paso de primero al event loop y lueco al call stack. y finalmente, luego de 1 segundo, el otro setTimeOut pasa al event loop porque ya cumplio su condicion y luego es enviado al call stack para ser ejecutado e impreso el 4
```
