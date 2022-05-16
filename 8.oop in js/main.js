"use strict";
// constructor function and the new operator
// a constructor function is actually a completely regular function.
// The only difference between a regular function and a constructor function is that a constructor function is called with the new operator.
// The convention for naming a constructor function is to start it with a capital letter
// An arrow funciton cannot work like a constructor function because it does not have access to this keyword and we need that

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   methods
  //   Never create a method inside of a constructor function.
  //   This is because each object created will be carrying around the method and thus if you had 100 methods, each object will have a hundred copies of the same.
  this.calcAgeBad = function () {
    console.log(2037 - this.birthYear);
  };
};

const dennis = new Person("Dennis", 1999);
const matilda = new Person("matilds", 2017);
const jack = new Person("Jack", 1989);

console.log(dennis instanceof Person);

// when we call a function with the new operator, behind the scenes, there happens 4 steps
// 1. A new empty objec is created
// 2. function is called with the this keyword set to the newly created object
// 3. The newly created object is linked to a prototype.
// 4. The function automatically returns that empty object fromt the beginning.

// function constructors ARE NOT  features of JS language, they are just patterns developed by other developers.

// PROTOTYPES
// -----------
// Each and every function in javascript automatically has a property called a prototype. This includes constructor functions
// Every object created by a certain constructor function will get access to all the methods and properties that we defined on the constructors prototype prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(`Something important: ${Person.prototype}`);
console.log(Person.prototype);
dennis.calcAge();

// we are using the calacage method even though it is not on the object itself.
console.log(dennis); //only contains the firstName and the birthyear but does not contain the calcage method but still we have access to it due to prototypal inheritance.
console.log(dennis.__proto__); //{ calcAge: [Function (anonymous)] }
console.log(dennis.__proto__ == Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(dennis));

// We can also set properties on the prototype and not only methods
Person.prototype.species = "Home Sapiens";

// checking for own properties
console.log(dennis.hasOwnProperty("firstName")); //true
console.log(dennis.hasOwnProperty("species")); //false

// this is because, species is not an own property to the dennis object, it is not really inside the dennis object, the dennis object simply has access to it due to prototype.
// Prototype chain: the connection to a prototype and ability to look up methods and prototypes.

// PROTOTYPAL INHERITANCE.
console.log(dennis.__proto__.__proto__); //Object.prototype (top of the prototype chain)
console.dir(Person.prototype.constructor);

const myArr = [10, 20, 5]
console.dir(myArr.prototype)
console.log(myArr.__proto__)

// The method console.dir () displays an interactive list of the properties of the specified JavaScript object

// coding challenge
// Use a constructor to implement a car. A car ha s a make and a speed.
// implement an 'accelerate' method that will increase the car's speed by 10 and log the new speed to the console.
//Implement a 'brake' method that will reduce the car's speed by 5 and log the new speed to the console.

const Car = function(speed, make){
  this.speed = speed
  this.make = make
}

Car.prototype.accelerate = function(){
  this.speed += 10
  console.log(this.speed)
}

Car.prototype.brake = function(){
  this.speed -= 5
  console.log(this.speed)
}

const bmw = new Car(90, 'bmw')
bmw.accelerate()
bmw.brake()

const mercedes = new Car(130, 'mercedes')
mercedes.accelerate()
mercedes.brake()