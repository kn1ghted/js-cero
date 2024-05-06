// Exercise to apply MAP and REDUCE on arrays

/*
Create a program that calculates the average of passing grades only
Passing grades must be greater or equal to 70
Input is an array of grades
 */

const grades = [65,70,54,80,98,100,45,78,71,92,87]

// Filter the grades to only passing grades
const passingGrades = grades.filter(grade => grade >= 70)

// Counter for failing grades
const failed = grades.reduce((failedCount, grade) => {
    if(grade < 70) {
        failedCount++
    }
    return failedCount
},0)

console.log(grades)
console.log(passingGrades)

const averagePassingGrade = passingGrades.reduce((sum, grade) =>
    sum + grade, 0) / passingGrades.length
console.log('The average passing grade is: ', averagePassingGrade)
console.log(`This course has a total of ${failed} failed students`)