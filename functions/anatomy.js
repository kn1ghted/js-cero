/* 
Functions are code snippets that receive an input (parameters) and return
an output, performing an specific set of operations, which can be reused at any time
by calling it by its name.
Parts:
function - reserved keyword to define a function
name - recommended to be descriptive of what the functions does
parameters - input, inside the parenthesis, no data type specification requiered and are optional
body - inside {}, operations done by the function, parameters delivered by value on function call by return (optional) as output
function call - name followed by parameters given (argument)
*/

function sum (a,b){
    return a + b
}
console.log(sum(4,67))

function calculateDiscountPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount
}

let originalPrice = 625
let offerPercentage = 15
let finalPrice = calculateDiscountPrice(625, 14)
console.log(`Original price of item: $${originalPrice}`)
console.log(`Applying %${offerPercentage} discount....`)
console.log(`Final price is $${finalPrice}`)