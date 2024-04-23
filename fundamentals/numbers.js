// Numbers primitive data type
let integerNumber = 42
let decimalNumber = 3.14
console.log(typeof integerNumber, typeof decimalNumber)

// Scientific notation
let scientificNotation = 5e3
// Infinite and Not a Number
let infinityNumber = Infinity
let notANumber = NaN
// they are also numbers!
console.log(typeof infinityNumber, typeof notANumber)

//Arithmetic operations

//1. addition, substraction, multiplication y division
const sum = 3 + 4
const subs = 4 - 4
const multi = 4 * 7
const divi = 16 / 2

//2. remainder and power
const remainder = 15 % 8 
const exponetial = 2 ** 3 

//presicion
const result = 0.1 + 0.2
console.log(result)

//Presicion places after comma
console.log(result.toFixed(1))

//Por su problema de precisión no es recomendable para comparar, porque aunque se compare con el valor que debería dar, genera un resultado equivocado.
console.log(result=== 0.3)

//3. advanced

//square root
const squareRoot = Math.sqrt(16)
console.log(squareRoot)

//absolute value
const absoluteValue = Math.abs(-7)
console.log(absoluteValue)

//random number between 0 and 1
const randomNumber = Math.random()
console.log(randomNumber)
console.log((randomNumber*100).toFixed(0))
console.log((randomNumber*1000).toFixed(0))