// Javascript comparisons operators
function absolute (a) {
    if (a < 0) {
        return -a
    } else { return a } 
}

function equalValue(a,b) {
    return a == b
}

// Compares value and type of
function equality(a,b) {
    return a === b
}

function notEqualValue (a,b){
    return a != b
}

function notEquality (a,b){
    return a !== b
}

let number1 = 10
let number2 = '10'
let number3 = -10
let number4 = 5

console.log ('The absolute value of ' + number3 + ' is ' + absolute(number3))
console.log ('The absolute value of ' + number4 + ' is ' + absolute(number4))
console.log ('The value of ' + number1 + ' is equal to the value of ' + number2 + ' is ' + equalValue(number1,number2))
console.log ('The equality between ' + number1 + ' and ' + number2 + ' is ' + equality(number1,number2))
console.log ('The value of ' + number1 + ' is not equal to the value of ' + number2 + ' is ' + notEqualValue(number1,number2))
console.log ('The inequality between ' + number1 + ' and ' + number2 + ' is ' + notEquality(number1,number2))