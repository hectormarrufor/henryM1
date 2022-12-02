'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let divisor = 2
  let array = [1]
  while(num >1){
    if(num%divisor == 0){
      num = num / divisor
      array.push(divisor)
    }
    else{
      divisor++
    }
  }
  return array
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var end = array.length - 1
  console.log(end)

  var a = 0
  while(a!= end){
  while(a < end){
    if (array[a] > array[a+1]){
      let aux = array[a]
      array[a] = array[a+1]
      array[a+1] = aux
    }
    a++
  }
  a=0
  end--
}
  return array
}
var array = [8,6,5,7,4,2,1]
//console.log(bubbleSort(array))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
for(let index in array){
  if(index>=1){
  //console.log(index)
  let extracted = array.splice(index, 1)
  //console.log(extracted)
  //console.log(array)
  //console.log(array[index-1])
  for(let i = index -1 ; i >= -1 ; i--){
    if(extracted > array[i] || array[i] == undefined){
      array.splice(i+1,0,extracted[0])
      break
    }
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
  for(let i = 0; i < array.length; i++){
    let extracted
    let selected = array[i]
    for(let o = i ; o< array.length; o++){
      if (selected > array[o]) {selected = array[o]
      extracted = o
      }
    }
    if (array[extracted] != undefined){
      array[extracted]= array[i]
      array[i]= selected
    }
    
    

  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
