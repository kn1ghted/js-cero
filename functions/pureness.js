/* 
Pure functions are those which have no side effects
Side effects:
    1 - Modify global variables
    2 - Modify parameters / arguments
    3 - Make HTTPS requests
    4 - Print screen or console logs
    5 - Manipulate the DOM
    6 - Get current date / time
*/

// Pure functions
function sum (a,b) {
    return a + b
}

function addTen(x) {
    return x+10
}

// Not pure functions
function sum(a,b){
    console.log('A: ',a)
    return a+b
}

// Impure function modifying a global variable
let total = 0
function sumWithSideEffect(a) {
    total += a
    return total
}

// Combination of pure functions
function square(x) {
    return x*x
}

function addTen(y) {
    return y+10
}

const number = 5
const finalResut = addTen(square(number))
console.log(finalResut)