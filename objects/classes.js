/*
Classes are blueprints for objects
Keyword CLASS and inside a constructor function, plus attributes and methods
*/
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
  
const persona1 = new Persona("Mariana", 25);

persona1.saludar();

// Classes and hierarchy
class Animal {
    constructor (specie){
        this.specie = specie;
    }
    toString(){
        console.log(`This animal is a ${this.specie}`)
    }
    noise(){
        console.log('Animal noise!')
    }
}
class Pet extends Animal{
    constructor (specie, nickname, owner) {
        super(specie);
        this.nickname = nickname;
        this.owner = owner;
    }
    toString(){
        console.log(`This pet is a ${this.specie} and its name is ${this.nickname}. Its owner is ${this.owner}`);
    }
    noise(){
        console.log('Barf!')
    }
}

const myDog = new Pet('dog','Milo','The Mask');
console.log(myDog.specie)
myDog.toString();
myDog.noise();

// Prototypes can only be accessed by classes or constructor NOT instances
Animal.prototype.legs = function(legs){
    this.legs = legs;
}

console.log(Animal)