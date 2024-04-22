/* Primitive data types
strings, numbers, booleans
null, undefined, symbol
bigInt */
let number = 28
number = number + 2
console.log(number)

let isTrue = true
isTrue = false
console.log(isTrue)

/* Complex data types
Objects, arrays, functions */
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