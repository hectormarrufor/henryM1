'use strict';

function BinarioADecimal(num) { // recibe como paramtero un string y debe retornar un entero
   const array = num.split('').reverse()
   let result = 0
   let count = 0
   for(let element of array){
      result = result + element * Math.pow(2 , count)
      count++ 
   }
   return result
}

function DecimalABinario(num) {  //recibe como parametro un numero y debe regresar un string
   console.log(num)
   let string =''
   console.log(string)
   
   

   do {
      console.log(num%2)
      string = string + (num%2)
      console.log(typeof string + ': ' + string)
      num = Math.floor(num / 2)
      console.log(Math.floor(num))
   } while (num != 0)
   string = string.split('')
   string.reverse()
   string = string.join('')
   

   return string
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};


