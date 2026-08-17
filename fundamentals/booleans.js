// Recommended coding practice for boolean variables is to use a prefix to denote its
// binary state

//1. is
const isActive = true

//2. has
const hasPermission = false

// Implicit conversion (done by JS engine)
const result = 5 > 3
console.log('Result of 5 > 3: ' + result)

const name = 'Platzi'
console.log('Variable has an assigned value: ' + !!name) //to verify if variable has an assigned values


//Explicit conversion
const value = 0
const explicitBoolean = Boolean(value)
console.log('Explicit boolean conversion of 0: ' + explicitBoolean)

const otherValue = 24
const explicitOtherBoolean = Boolean(otherValue)
console.log('Explicit boolean conversion of 24: ' + explicitOtherBoolean)