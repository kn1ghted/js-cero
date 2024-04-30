// Javascript comparisson operators
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

var number1 = 10
var number2 = '10'

console.log (equalValue(number1,number2))
console.log (equality(number1,number2))