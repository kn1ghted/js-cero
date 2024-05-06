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

// MAP - applies a function to all elements of an array
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

// FOREACH - applies a function to each element of an array
const colorsFor=['red','pink','blue']
const iteratedColorsFor = colorsFor.forEach(color => console.log(color))
console.log(colorsFor)
console.log(iteratedColorsFor)

const newNumbers=[1,2,3,4,5]
let sumNewNumbers = 0
newNumbers.forEach(number => {sumNewNumbers += number} )
console.log('Array of Numbers: ',newNumbers)
console.log('Sum of Numbers: ',sumNewNumbers)

// REDUCE - reduce the elements of an array using an accumulator and looping over the current values - CASE 1
const reducedNumers = newNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log('Sum using reduce(): ', reducedNumers)

// FILTER - also applies a function to each element, but the function is a condition to filter 
// the elements that pass the condition defined by the function
const numbersToFilter = [1,2,3,4,5,6,7,8,9,10]
const filteredNumbers = numbersToFilter.filter(num => num % 2 === 0)
console.log(numbersToFilter)
console.log(filteredNumbers)

// REDUCE - CASE 2
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

// FIND - search an element inside an array
// Return the first element that fulfills the condition given as a function
const multiple5 = [0,5,10,15,20,25]
const findFirstOver10 = multiple5.find(number => number > 10)
console.log(multiple5)
console.log('The first element greater than 10 is: ' + findFirstOver10)

// FINDINDEX - return the index of an elements that fulfills the condition given by a function
const index25 = multiple5.findIndex(num => num >= 25)
console.log('The index of the first element greater than 25 is at index: ' + index25)


// Loop iteration over array items
const numbersArray = [1,2,3,4,5]
let sum = 0
for (let i=0;i<numbersArray.length;i++) {
    sum+= numbersArray[i]
}
console.log(sum)