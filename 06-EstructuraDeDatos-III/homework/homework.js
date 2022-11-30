'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - length: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value,
   this.left = null,
   this.right = null
}

 BinarySearchTree.prototype.insert = function(value){
   
   if(value <= this.value){
      if(this.left == null){
         this.left = new BinarySearchTree(value)
         return this.left
      }
      else{
         return this.left.insert(value)
      }
   } 
   else if (value >= this.value){
      if(this.right == null){
         this.right = new BinarySearchTree(value)
         return this.right
      }
      else {
         return this.right.insert(value)
      }
   }
  
}
BinarySearchTree.prototype.size = function(){
  var sum = 0
  if(this.left != null) sum = sum + this.left.size()
  if(this.right != null) sum = sum + this.right.size()
   sum ++
   console.log(sum)
  return sum
}
BinarySearchTree.prototype.contains = function(value){
   if (this.value == value) return true
   else if (value > this.value && this.right != null) return this.right.contains(value)
   else if( value < this.value && this.left != null) return this.left.contains(value)
   else return false
}
BinarySearchTree.prototype.depthFirstForEach = function(cb, order = 'in-order'){
  
   switch(order){
      case 'in-order':
         if (this.left != null) this.left.depthFirstForEach(cb,order)
         cb(this.value)
         if (this.right != null) this.right.depthFirstForEach(cb,order)
         break

      case 'pre-order':
         cb(this.value)
         if (this.left != null) this.left.depthFirstForEach(cb,order)
         if (this.right != null) this.right.depthFirstForEach(cb,order)
         break

      case 'post-order':
         if (this.left != null) this.left.depthFirstForEach(cb,order)
         if (this.right != null) this.right.depthFirstForEach(cb,order)
         cb(this.value)
   }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, breadth = [1]){
   cb(this.value)
   breadth.shift()
   if (this.left != null) breadth.push(this.left)
   if (this.right != null) breadth.push(this.right)
   
   
   breadth[0] && breadth[0].breadthFirstForEach(cb, breadth)
   
   
}

var arbol = new BinarySearchTree(5)

console.log(arbol.insert(4))
console.log(arbol.insert(3))
console.log(arbol.insert(5))
console.log(arbol.insert(6))
console.log(arbol.insert(7))
console.log(arbol.insert(6))
console.log(arbol.insert(10))
console.log(arbol)
console.log(arbol.size())
console.log(arbol.contains(10))


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
