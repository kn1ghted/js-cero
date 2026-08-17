// Numbers primitive data type
let integerNumber = 42
let decimalNumber = 3.14
console.log('Type of integer and decimal numbers: ')
console.log(typeof integerNumber, typeof decimalNumber)

// Scientific notation
// this equals to 5000: 5 times 10 to the power of 3
let scientificNotation = 5e3
console.log(scientificNotation)
// Infinite and Not a Number
let infinityNumber = Infinity
let notANumber = NaN
console.log(infinityNumber, notANumber)
// they are also numbers!
console.log('Type of scientific notation, infinity and NaN: ')
console.log(typeof scientificNotation, typeof infinityNumber, typeof notANumber)

//Arithmetic operations

//1. addition, substraction, multiplication y division
const sum = 3 + 4
const subs = 4 - 4
const multi = 4 * 7
const divi = 16 / 2
console.log('Arithmetic operations: ')
console.log(sum, subs, multi, divi)

//2. remainder and power
const remainder = 15 % 8 
const exponential = 2 ** 3
console.log('Module and exponential: ')
console.log(remainder, exponential)

//precision
const result = 0.1 + 0.2
console.log('Precision: ')
console.log('Result: ' + result)

//Precision places after comma
console.log('Result with 1 decimal place: ')
console.log(result.toFixed(1))

//Comparing numbers is not always accurate, so we can use the toFixed() method to compare numbers with a certain precision
console.log('Comparing numbers with fixed precision: ')
console.log(result.toFixed(1) == 0.3)
console.log(result.toFixed(1) === 0.3)
console.log(result === 0.3)

//3. advanced
//square root
const squareRoot = Math.sqrt(16)
console.log('Square root of number: ' + squareRoot)

//absolute value
const absoluteValue = Math.abs(-7)
console.log('Absolute value of number: ' + absoluteValue)
console.log(absoluteValue)

//random number between 0 and 1
const randomNumber = Math.random()
console.log('Random number between 0 and 1: ' + randomNumber)
console.log('Random number between 0 and 100: ' + (randomNumber*100).toFixed(0))
console.log('Random number between 0 and 1000: ' + (randomNumber*1000).toFixed(0))