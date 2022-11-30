'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.
​
nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
​
nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.
​
Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
​
​
Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

//FUNCION nFACTORIAL HECHA CON RECURSIVA
function nFactorial(n, decremento = n - 1){
   if(n == 1 || n == 0) return 1
   n = n * decremento
   decremento--
   if (decremento == 0) return n
   return nFactorial(n, decremento)
}
console.log(nFactorial(6))
//FUNCION nFIBONACCI HECHA CON RECURSIVA
function nFibonacci(n, f = 0, l = 1) {
   if(n == 0) return f
   f = f + l
   l = f - l
   n--
   return nFibonacci(n , f, l)
}


// // FUNCION nFACTORIAL HECHA CON ITERADORES
// function nFactorial (n){
//    var b = n - 1;

//    while(b > 0){
//       n = n * b
//       b--
//    }
//    return n
// }

//FUNCION nFIBONACCI HECHA CON ITERADOR
// function nFibonacci(n){
//    if (n==0) return 0
//    else {
//    var numero_anterior = 0
//    var numero_actual = 1
//    for (let i = 1 ; i < n ; i++){
      
      
//       numero_actual = numero_actual + numero_anterior
//       console.log(numero_actual)
//       numero_anterior = numero_actual - numero_anterior
//       console.log(numero_anterior)
      
//    }
//    return numero_actual
//    }
// }

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.
​
Pueden utilizar class o función constructora.
*/

function Queue() {
   this.queue = []
   
}
Queue.prototype.enqueue = function(item){
   return this.queue.push(item)
}
Queue.prototype.dequeue = function(item){
  return this.queue.shift(item)
}
Queue.prototype.size = function(){
   return this.queue.length
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};