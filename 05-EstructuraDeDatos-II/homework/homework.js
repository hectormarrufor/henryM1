'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.length = 0,
  this.head = null
}
LinkedList.prototype.add = function(node){
  node = new Node(node)
  if (this.hasOwnProperty('head') && this.head == null){
    this.head = node
    this.length++
    return this.head
  }
  else if (this.hasOwnProperty('head') && this.head != null){
    let current = this.head
    while (current.next != null){
          current = current.next
    }
    current.next = node
    this.length++
    return current.next
  }
}

LinkedList.prototype.remove = function(){
  var ret
  if (this.head == null) return null
  else if(this.head.next == null) {
    ret = {...this.head}
    this.head = null
    this.length--
    return ret.value
  }
  else {
    var current = this.head
    while (current.next.next != null) current = current['next']
    ret = current.next
    current.next = null
    this.length--
    return ret.value
  }
}

LinkedList.prototype.search = function(property) {
  
  if(typeof property == 'string'){
    console.log('string')
      if (this.head != null && this.head.value == property) return this.head.value
      else{
        var current = this.head
        if (current != null && current.next != null){
          do{
            if (current.next.value == property) return current.next.value
            else current = current.next
          } while(current.next != null)
          if (current.next == null) return null
        }
        else return null
        
      }
     }
     else if(typeof property == 'function'){
      if (this.head != null && property(this.head.value)) return this.head.value
      else{
        var current = this.head
        if (current != null && current.next != null){
          do{
            if (property(current.next.value)) return current.next.value
            else current = current.next
          } while(current.next != null)
          if (current.next == null) return null
        }
        else return null
     }
  
  
}
}

function Node(data) {
  this.value = data,
  this.next = null
}


/* EJERCICIO 2
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
function HashTable(numBuckets = 35) {
  this.numBuckets = numBuckets
  this.buckets = []
  this.buckets.length = numBuckets
}
HashTable.prototype.set = function(key, value) {
  
  if (typeof key != 'string') throw new TypeError('Keys must be strings')
  
  else if(this.buckets[this.hash(key)] != undefined){
    for (let element in this.buckets[this.hash(key)]){
      console.log(this.buckets[this.hash(key)][element])
      console.log(this.buckets[this.hash(key)][element].key)
      if(this.buckets[this.hash(key)][element].key == key) {
        console.log(this.buckets[this.hash(key)][element])
        this.buckets[this.hash(key)][element] = {key, value}
        console.log(this.buckets[this.hash(key)][element])
        return element
      }
    }
    this.buckets[this.hash(key)].push({key, value})
  }
  else{this.buckets[this.hash(key)] = [{key, value}]}
  
  return this.buckets[this.hash(key)]
  
}
HashTable.prototype.get = function(key) {
  for(let i in this.buckets){
    
    for(let o in this.buckets[i]){
      if (this.buckets[i][o].key == key){
        return this.buckets[i][o].value
      }
    }

  }
  return null
}
HashTable.prototype.hasKey = function(key){
  for(let i in this.buckets){
    for(let o in this.buckets[i]){
      if(this.buckets[i][o].key == key) return true
    }
    
  }
  return false

}
HashTable.prototype.hash = function(string){
    let keyCodeSum = 0
    
    for(let char of string){
      
      keyCodeSum = keyCodeSum + char.charCodeAt()
      
    }
    
    let mod = keyCodeSum % this.numBuckets
    console.log(mod)
    return mod
}
var table = new HashTable()

console.log(table.set('foo', 'Hector'))
console.log(table.set('ofo', 'Maria'))
console.log(table.set('ofo', 'Carmen'))
console.log(table.set('oof', 'Belkis'))
console.log(table.set('Violinista', 'Maria'))
console.log(table.get('Violinista'))
console.log(table.hasKey('Violinista'))
console.log(table.hasKey('oof'))
console.log(table)
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
