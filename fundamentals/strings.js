// Strings creation
let firstString = 'Single quotes'
let secondString = "Double quotes"
let thirdString = `Frech Quotes`

console.log(firstString, secondString, thirdString)

// Concatenation - operator +
let addressStreet = "Lindenplatz"
let addressNumber = "16"
let addressCity = "Aachen"
let fullAddress = addressCity + ', ' + addressStreet + ' ' + addressNumber

console.log(fullAddress)

// Template literals
let firstName = 'Edwin'
let lastName = 'Calderón'
let country = 'Costa Rica'
let flag = '🇨🇷'
let introductionLiteral = `Hello, my name is ${firstName} ${lastName}. I am from ${country}${flag}`
console.log(introductionLiteral)

// join - method over array object
let nameArray = [firstName, lastName, country, flag]
let introductionJoin = nameArray.join('* ')
console.log(introductionJoin)

// Concat()
let hobby1 = 'Drums'
let hobby2 = 'Video Games'
let hobby3 = 'Sleep'
let hobbies = "My hobbies are: ".concat(hobby1, ', ', hobby2, ', ', hobby3)
console.log(hobbies)

// Escape characters
let mixQuotes = "I'm ready"
let slash = 'I\'m ready too'
let frenchEscape = `Mon' Cheri`
console.log(frenchEscape)

// String manipulation
let declaredString = 'I am a declared string'
let constructedString = String('I am a constructed string')
let objectString = new String('I am a string object')
console.log(typeof declaredString, typeof constructedString, typeof objectString)

// Basic string functions
let testString = 'This is a *test* string, have fun!'
let splitedString = testString.split(' ')
let spaceString = '      This     is       a string with spacessss      '
console.log(testString[10])
console.log(testString.charAt(10))
console.log(testString.indexOf('*'))
console.log(testString.indexOf('fun'))
console.log(testString.lastIndexOf('*'))
console.log(testString.slice(10,16))
console.log(testString.length)
console.log(testString.toUpperCase())
console.log(splitedString)
console.log(spaceString)
console.log(spaceString.trim())