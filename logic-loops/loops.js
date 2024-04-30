/*
FOR LOOP
 for (variable; condición; incremento) {
   código a ejecutar
 }
*/

let list = ["eat", "sleep", "code", "repeat"];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

/*
FOR EACH LOOP
array.forEach((item) => {
  código a ejectura
})

*/

list.forEach((item) => {
  console.log(item);
});

/*
FOR OF LOOPS
for of arrays, strings. Iterable objects of the same type

for (varible of object) {
  // do some code
}
*/

let basket = ["apple", "pear", "orange", "grapes"];

// variable name can be defined, as all objects are the same type
for (fruit of basket) {
  console.log(fruit);
}


/*

FOR IN LOOP

attributes : value

array, string

item

for (varible in object) {
  // do some code
}

*/

const shoppingList = {
  apple: 5,
  pear: 3,
  orange: 2,
  grapes: '1 kilo',
};

for (fruit in shoppingList) {
  console.log(fruit);
}

for (fruit in shoppingList) {
  console.log(`${fruit} : ${shoppingList[fruit]}`);
}

/*
WHILE LOOP
while(condition) {
  // do some code
}
*/

// Counter initialization
let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;
}

/* 
DO WHILE 
do {
  // do some code
} while (condition)

*/

let counterDW = 0;

do {
  console.log(counterDW);
  counterDW++;
} while (counterDW < 10);