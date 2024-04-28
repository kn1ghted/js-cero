/* 
Objects and functions have execution contexts
Functions can be binded to an object or not, and this binding can be implicit or explicit
Use the keyword THIS to use the binding of the method to its parent object
*/

// Implicit binding
const house = {
    dogName : 'Fido',
    dogGreeting : function() {
        console.log(`Hi, I'm ${this.dogName}`)
    }
}
// Method call
house.dogGreeting()

// Explicit binding
// Separate declaration of function
function dogGreeting() {
    console.log(`Hi, I'm ${this.dogName}`)
}
// Separate declaration of the object
const newHouse = {
    dogName:'Coconut',
}
// Use CALL to explicitly bind the function with an object.
dogGreeting.call(newHouse)

// Another example for explicit binding using CALL
const owner = 'Lucy'
const address = 'Avenue 123'
function newDogGreeting(owner,address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}
// CALL forwarding additional arguments to the binded methods
newDogGreeting.call(newHouse,owner,address)

// Using APPLY
// Arguments array - to use as argument for APPLY
const args = [owner,address]
newDogGreeting.apply(newHouse,args)

// Using BIND
// Returns a function object
const binded = newDogGreeting.bind(newHouse, owner, address)
console.log(binded) // shows function object
binded() // function call of variable with function object value