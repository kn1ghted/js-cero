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

// MUTABILITY Adding new items to existing array or update existing items
// PUSH add new item at the end of the array
const countries = ['USA', 'Canada', 'UK']
const traveledCountries = ccountries.push('Germany','Italy')
console.log(countries)
console.log(traveledCountries)

// INMUTABILITY create a new array using another as reference, without modifiying the reference object
const newFruits = fruits.concat(['grape','kiwi'])
console.log(fruits)
console.log(newFruits)
const isArray = Array.isArray(fruits)
console.log(isArray)

// Loop iteration over array items
const numbersArray = [1,2,3,4,5]
let sum = 0
for (let i=0;i<numbersArray.length;i++) {
    sum+= numbersArray[i]
}
console.log(sum)