/*
Pass by value and reference
Value copies the value but the variables remain independent
Reference copies the memory direction, but multiple data types variables
can point to the same memory direction
*/

let x = 10
let y = x
console.log(x, y)
x = 15
console.log(x, y)


let firstArray = [1,2,3,4]
let secondArray = firstArray
console.log(firstArray, secondArray)
secondArray.push(5)
console.log(firstArray, secondArray)