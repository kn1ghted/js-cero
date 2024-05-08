/* 
Arrays are a data structure that can be empty or have several items
Items can be of different types and the array object let us access and retrieve the items
by index, append new items, remove items, etc
*/

// Define an array using the array object constructor
const fruits = Array('apple','banana','orange')
console.log(fruits)

// This constructor defines an empty array with a given dimension (length)
const justOneNumber = Array(12)
console.log(justOneNumber)

const numbers = Array(1,2,3,4,5)
console.log(numbers)

// Literal initialization of a single item array
const oneNumber = [4]
console.log(oneNumber)

// Empty array
const emptyArray=[]
console.log(emptyArray)

// Literal initialization of array with several items
const sports=['soccer','tennis','rugby']
console.log(sports)

// Array of items with different data types
const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient:'Milk',
        quantity:'1 cup'
    },
        
    false
]

console.log(recipeIngredients)

// Accessing array items by index
const firstFruit = fruits[0]
console.log(firstFruit)

// Get array length
const numberOfFruits=fruits.length
console.log(numberOfFruits)

// MUTABILITY Adding new items to existing array
// PUSH add new item at the end of the array
const countries = ['USA', 'Canada', 'UK']
// push() adds items at the end of the array and modify its content
const traveledCountries = countries.push('Germany','Italy')
console.log(countries)
// Variable only contains the new length of the modified array
console.log(traveledCountries)

// POP removes the last item of the array and returns the value of the removed item
const bannedCountries = countries.pop()
console.log(countries)
// Variable only contains the new length of the modified array
console.log(bannedCountries)

// SHIFT remove item at the start of the array
// Array mutability applies for shift()
const colors = ['Blue', 'Black', 'Red', 'White']
console.log(colors)
const removedColor = colors.shift()
console.log(colors)
console.log(removedColor) // returns removed item

// UNSHIFT adds items at the start of the array
// Array mutability applies for unshift()
const newColors = colors.unshift('Gray','Green')
console.log(colors)
console.log(newColors) // returns new array length

// SPLICE can remove and add items starting from a given index
// Array mutability applies for splice()
// Parameters - initial position, items to remove, items to add from that position
const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato']
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion')
const splicedNumbers = [1,2,3,4,5,6,7,8,9]
splicedNumbers.splice(1,5,100)

console.log(vegetables)
console.log(removedVegetables)
console.log(splicedNumbers)

// reverse()
const OrderedNumbers = [1, 2, 3, 4, 5]
const reversedOrderedNumbers = OrderedNumbers.reverse()

console.log(OrderedNumbers)
console.log(reversedOrderedNumbers)

// sort() with number
const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers)

const unsortedNumbers2 = [4, 18, 1, 62, 34]
// sort called with an arrow function as parameter
// JS determines if the first number is bigger than the second and switches
// position accordingly
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)
console.log(unsortedNumbers2)
console.log(sortedNumbers)

// sort() with strings - UTF-16
const cities = ['New York', 'Paris', 'Tokyo', 'London']
const sortedCities = cities.sort()
console.log(cities)
console.log(sortedCities)

// fill()
const ages = [21, 35, 45, 50]
console.log(ages.fill(0, 2, 4))
console.log(ages.fill(15, 1))
console.log(ages.fill(7))

// INMUTABILITY create a new array using another as reference, without modifiying the reference object
const newFruits = fruits.concat(['grape','kiwi'])
console.log(fruits)
console.log(newFruits)
const isArray = Array.isArray(fruits)
console.log(isArray)

// map(f) - applies a function to all elements of an array
// INMUTABILITY Creates a new array so it does not modified the original array
const numbersMap = [1,2,3,4,5]
const squaredNumbersMaps = numbersMap.map(num => num*num) // square functions
console.log(numbersMap)
console.log(squaredNumbersMaps)

// Temperatures convertion excersise
const temperaturesInFahrenheit=[32,68,95,104,212]
const temperaturesInCelsius=temperaturesInFahrenheit.map(fahrenheit=>(5/9)*(fahrenheit-32))
console.log('Temperatures In Fahrenheit: ',temperaturesInFahrenheit)
console.log('Temperatures In Celsius: ',temperaturesInCelsius)

// forEach(f) - applies a function to each element of an array
const colorsFor=['red','pink','blue']
const iteratedColorsFor = colorsFor.forEach(color => console.log(color))
console.log(colorsFor)
console.log(iteratedColorsFor)

const newNumbers=[1,2,3,4,5]
let sumNewNumbers = 0
newNumbers.forEach(number => {sumNewNumbers += number} )
console.log('Array of Numbers: ',newNumbers)
console.log('Sum of Numbers: ',sumNewNumbers)

// reduce(f) - reduce the elements of an array using an accumulator and looping over the current values - CASE 1
const reducedNumers = newNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log('Sum using reduce(): ', reducedNumers)

// filter(f) - also applies a function to each element, but the function is a condition to filter 
// the elements that pass the condition defined by the function
const numbersToFilter = [1,2,3,4,5,6,7,8,9,10]
const filteredNumbers = numbersToFilter.filter(num => num % 2 === 0)
console.log(numbersToFilter)
console.log(filteredNumbers)

// reduce(f) - CASE 2
const wordsToReduce = ['hello', 'word', 'drums', 'music', 'cymbals', 'home', 'hello', 'drums']
const wordsFrecuency = wordsToReduce.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    // must return the accumulator to avoid syntax errors
    return accumulator
}, {})
console.log(wordsToReduce)
console.log(wordsFrecuency)

// find(f) - search an element inside an array
// Return the first element that fulfills the condition given as a function
const multiple5 = [0,5,10,15,20,25]
const findFirstOver10 = multiple5.find(number => number > 10)
console.log(multiple5)
console.log('The first element greater than 10 is: ' + findFirstOver10)

// findIndex(f) - return the index of an elements that fulfills the condition given by a function
const index25 = multiple5.findIndex(num => num >= 25)
console.log('The index of the first element greater than 25 is at index: ' + index25)

// concat() - concatenates strings together
const morseCode1 = ['....', '---'] // H O
const morseCode2 = ['.-..', '.-'] // L A
const morseCodeMessage = morseCode1.concat(morseCode2)
const morseCodeMessage2 = [].concat(morseCode1, morseCode2)

console.log('Morse first part: ',morseCode1)
console.log('Morse second part: ',morseCode2)
console.log('Morse message - option 1 ', morseCodeMessage)
console.log('Morse message - option 2 ', morseCodeMessage2)

// Combining strings using spread operator
function combineMorseMessages (morseCode1, morseCode2) {
    // Spread operator ...
    console.log([...morseCode1, ...morseCode2])
}
  
//combineMorseMessages(morseCode1, morseCode2)
  
const numbersSpread = [1, 2, 3]
const stringSpread = 'string'   //this string will be spreaded as an array
combineMorseMessages(numbersSpread, stringSpread)

// join() - Agrega los elementos de un array a un string, usando el separador indicado en el parámetro. Regresa un string
const morseCodeMessageString = morseCodeMessage.join('')

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)
console.log(typeof(morseCodeMessageString))

// every(f) - returns true if all elements of the array fulfill the condition given by a function as argument
const agesFamily = [13, 36, 37, 42, 46, 69, 70]
const allAreAdults = agesFamily.every(age => age > 20)

console.log(agesFamily)
console.log('Are all members of the family adults over 20 years old: ',allAreAdults)

// some(f) - returns true if at least one of elements of the array fulfill the condition given by a function as argument
const atLeastOneIsChild = agesFamily.some(age => age < 12)
const atLeastOneIsAdult = agesFamily.some(age => age > 18)

console.log(agesFamily)
console.log('Is at least one member of the family a child under 12 years old:', atLeastOneIsChild)
console.log('Is at least one member of the family an adult:',atLeastOneIsAdult)

// includes() - returns true if an element is included in the array
const numbersEven = [2, 4, 6, 8, 5]

const result1 = numbersEven.includes(3)
console.log(result1)

const result2 = numbersEven.includes(8)
console.log(result2)

// indexOf() - returns the index of an element if exists, -1 if not included
const fruitsIndex = ['apple', 'cherry', 'grape', 'mango']

const index1 = fruitsIndex.indexOf('grape')
console.log(index1)

const index2 = fruitsIndex.indexOf('blueberry')
console.log(index2)

// lastIndexOf() - returns the last index of an element if included several times, -1 if not included
const numbersAgain = [2, 4, 6, 8, 10, 6]

const lastIndex1 = numbersAgain.lastIndexOf(6)
console.log(lastIndex1)

const lastIndex2 = numbersAgain.lastIndexOf(3)
console.log(lastIndex2)

// Exercise 1 Findind Substring Indices
const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi']
const target = 'banana'

function findStringIndicesInArray (array, target) {
  const result = {
    includesTargetString: false,
    firstOccurrenceIndex: -1,
    lastOccurrenceIndex: -1
  }

  array.forEach((element, index) => {
    if (element.includes(target)) {
      result.includesTargetString = true
      result.firstOccurrenceIndex = array.indexOf(target)
      result.lastOccurrenceIndex = array.lastIndexOf(target)
    }
  })

  return result
}

const result = findStringIndicesInArray(stringArray, target)
console.log(result)

// slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'tiger']

console.log('Original array ', animals)
console.log('start param',animals.slice(2))
console.log('start and end param',animals.slice(2, 3))
console.log('start and end param',animals.slice(1, 6))
console.log('negative param', animals.slice(-3))
console.log('second negative param',animals.slice(2, -1))
console.log('no param',animals.slice())

// Loop iteration over array items
const numbersArray = [1,2,3,4,5]
let sum = 0
for (let i=0; i<numbersArray.length; i++) {
    sum+= numbersArray[i]
}
console.log(sum)