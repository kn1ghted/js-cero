
// As an interpreted language, JS engine does a dynamic type check
// meaning that types are not predefined and available only on program run
/* Primitive data types: strings, numbers, booleans
null, undefined, symbol, bigInt */
let number = 28
number = number + 2
console.log('Number: ' + number)

let isTrue = true
isTrue = false
console.log('Boolean: ' + isTrue)

/* Complex data types: Objects, arrays, functions */
let user = {
    userName: 'user',
    age : 18
}

user.age = 30
console.log(user)

// Arrays are also objects, but they have a special syntax and methods to work with them
let fruits = ['Apple', 'Orange']
fruits[0] = 'Watermelon'
console.log('Fruit array: ' + fruits)


// Objects are passed by reference, meaning that if you pass an object to a function and change it inside the function, it will change the original object as well
let person = {
    personName : 'First Name',
    age : 20
}

// Object function example
function changeName(object){
    object.personName = 'New Name'
}

console.log(person)
changeName(person)
console.log(person)

// Null
let nullVariable = null
console.log('NULL Variable: ' + nullVariable)
console.log('typeof NULL Variable: ' + typeof nullVariable)

// Undefined - unassigned variables
let undefinedVariable
console.log('Undefined Variable: ' + undefinedVariable)
console.log('typeof Undefined Variable: ' + typeof undefinedVariable)

// Symbol - unique variable values and references
let symbol1 = Symbol(1)
let symbol2 = Symbol(1)
console.log(symbol1)
console.log('typeof Symbol 1: ' + typeof symbol1)
console.log('symbol1 == symbol2: ' + (symbol1 == symbol2))
console.log('symbol1 === symbol2: ' + (symbol1 === symbol2))

// BigInt - big big numbers
let bigNumber = 3215871348570897134095871098345n // use the n at the end to use a big int
console.log('BigInt: ' + bigNumber)
console.log('typeof BigInt: ' + typeof bigNumber)