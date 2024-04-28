/* 
 Arrow functions are an alternative and compact manner for defining functions
 Arrow functions lack binding context
 */

// Regular function expression
const greeting = function (name){
    return `Hi, ${name}`
}

// Same function using arrow notation
const newGreeting = (name) => {return `Hi, ${name}`}

// Parameters inside parenthesis are neccesary only when more than 1 parameter is defined 
const newGreetingImplicit = name => `Hi, ${name}`

//Parameters inside parenthesis are neccesary only when more than 1 parameter is defined 
const newGreetingImplicitWithTwoParameters = (name,lastName) => `Hi, I'm ${name} ${lastName}`

// Example with object, binded function (uses an attribute), and arrow function (without binding)
const finctionalCharacter = {
    name:'Uncle Ben',
    messageFunction : function (message){
        console.log(`${this.name} says: ${message}`)},
    messageArrowFunction : (message) => {console.log(`${this.name} says: ${message}`)}
}

// On call, arrow functions cannot access THIS context
finctionalCharacter.messageFunction('With great power comes great responsability.')
finctionalCharacter.messageArrowFunction('Beware of Doctor Octopus.')