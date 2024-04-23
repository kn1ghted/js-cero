
// As an interpreted language, JS engine does a dynamic type check
// meaning that types are not predefined and available only on program run
/* Primitive data types: strings, numbers, booleans
null, undefined, symbol, bigInt */
let number = 28
number = number + 2
console.log(number)

let isTrue = true
isTrue = false
console.log(isTrue)

/* Complex data types: Objects, arrays, functions */
let user = {
    nombre: 'userName',
    age : 18
}

user.age = 30
console.log(user)

let fruits = ['Apple', 'Orange']
fruits[0] = 'Watermelon'
console.log(fruits)

function changeName(object){
    object.name = 'New Name'
}

let person = {
    name : 'First Name',
    age : 20
}

console.log(person)
changeName(person)
console.log(person)

// Null
let nullVariable = null
console.log(nullVariable)
console.log(typeof nullVariable)

// Undefined - unasigned variables
let undefinedVariable
console.log(undefinedVariable)
console.log(typeof undefinedVariable)

// Symbol - unique variable values and references
let symbol1 = Symbol(1)
let symbol2 = Symbol(1)
console.log(symbol1 == symbol2)
console.log(symbol1 === symbol2)

// BigInt - big big numbers
let bigNumber = 3215871348570897134095871098345n // use the n at the end to use a big int
console.log(bigNumber, typeof bigNumber)