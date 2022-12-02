'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  var auxleft = [], auxright = []
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivot = array.splice(Math.floor(array.length / 2), 1)

  //console.log(pivot)
  let lefthand = []
  //console.log(array.length)
  for(let index = 0; index<= array.length; index++){
    //console.log(index)
    if(array[index] <=  pivot){
      lefthand = lefthand.concat(array.splice(index, 1))
      index--
    }
  }
  let righthand = array.splice(0)
  //console.log(righthand)
  //console.log(array)
  
  //console.log(lefthand)

  while(lefthand.length > 1) auxleft = auxleft.concat(quickSort(lefthand))
  
  while(righthand.length > 1) auxright = auxright.concat(quickSort(righthand))
  console.log(array)
  // lefthand = [...auxleft]
  // righthand = [...auxright]
  array = array.concat(auxleft)
  array = array.concat(lefthand)
  array = array.concat(pivot)
  array = array.concat(auxright)
  array = array.concat(righthand)


  
  //console.log(array)
  // let lefthand = array.slice(0, Math.floor(array.length /2))
  // console.log(lefthand)
  // let righthand = array.slice(Math.floor(array.length /2)+1)
  // console.log(righthand)
  // while(lefthand.length > 2) quickSort(lefthand)
  // while(righthand.length>2) quickSort(righthand)
  return array
}
var array = [22,33,5,63,51,234,344]
console.log(quickSort(array))
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
