/*
Objects are data structures
key / value 

objetct {
  key: value, 
  key: value, 
  key: value 
  method
}
*/

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    address: {
      street: "Av Insurgentes 187",
      city: "CDMX",
    },
    greeting() {
      console.log(`Hi, my name is ${person.name}`);
    },
};

// Logging person object, attributes and methods
console.log(person);
console.log(person.name);
person.greeting();

// Adding an attribute and a method
person.phone = "555-555-5555";
console.log(person.phone);

person.bye = () => {
    console.log("Good Bye!");
 };
person.bye();

person.myAge = function(){
    console.log(`My age is ${person.age}`);
};
person.myAge();

console.log(person);

// Removing atributes
delete person.phone;

// Methods cannot be deleted, alternative is to reasign as undefined
delete person.bye();
delete person.myAge();
console.log(person);

// Construtor functions
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const theOne = new Person('Mr','Anderson',33);
console.log(theOne)
theOne.alias = "Neo"
console.log(theOne)

const agent = new Person('John','Smith',50)
console.log(agent)

// Prototype adds attributes or methods to existing constructors and instances
Person.prototype.greeting = function() {
    console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
}

theOne.greeting();
agent.greeting();
console.log(agent)