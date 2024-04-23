// Recommended coding practice for boolean variables is to use a prefix to denote its
// binary state

//1. is
const isActive = true

//2. has
const hasPermisson = false

// Implicit conversion (done by JS engine)
const result = 5 > 3
console.log(result)

const name = 'Platzi'
console.log(!!name) //to verify if variable has an asigned values


//Explicit conversion
const value = 0
const explicitBoolean = Boolean(value)
console.log(explicitBoolean)

const otherValue = 24
const explicitOtherBoolean = Boolean(otherValue)
console.log(explicitOtherBoolean)