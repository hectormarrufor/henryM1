const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    
    let sum =0
    for(let element of array){
        
        if (Array.isArray(element)) sum = sum + countArray(element)
        else sum += element
        
    }
    return sum
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    var propertiesQuantity = 0
    var properties = Object.values(obj)
    // function recorrer(object){
    //     for(let element of object){
    //         if (typeof element == 'object' && !Array.isArray(element)) propertiesQuantity = propertiesQuantity + countProps(element)
    //         else if (Array.isArray(element)) recorrer(element)
    //     }
    // }
    for(let property of properties){
        if (typeof property == 'object' && !Array.isArray(property)) propertiesQuantity = propertiesQuantity + countProps(property)
    }
    propertiesQuantity += Object.values(obj).length
    return propertiesQuantity

}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    
    let current = this.head
    let count = 0
    do {
        switch(typeof current.value){
            case 'boolean':
                break
            case 'string':
                if (isNaN(parseInt(current.value))){
                    current.value = 'Kiricocho'
                    count++
                }
                break
            case 'number':
                break
            case 'object':
                break
        }
       
        
        if(current.next) current = current.next
        else break
    }while(current.value != null)
    return count
}



// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    var merged =  new Queue()

    if(queueOne.size() >= queueTwo.size()) var bigger = queueOne
    else var bigger = queueTwo

    for(let i = 0; i < bigger.size(); i++){
        queueOne.array[i] && merged.enqueue(queueOne.array[i])
        queueTwo.array[i] && merged.enqueue(queueTwo.array[i])
    }
    return merged

}





// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    var multiplier = multiplier
    return function(num){
        return multiplier * num
    }
}


// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    var sum = 0
    if (this.left) sum = sum + this.left.sum()
    if (this.right) sum = sum + this.right.sum()
    sum += this.value
    return sum
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}