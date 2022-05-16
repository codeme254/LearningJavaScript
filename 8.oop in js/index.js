// object oriented programming in JavaScript
// Object oriented programming (oop) is a programming paradigm that is based on the concepts of objects
// paradigm means the style of the code (how we write and organise code.)
// we use objects to describe or model real world features
// objects may contain data (properties) and code (methods). By using objects, we pack data and corresponding behavior into one block
// objects are building blocks of the  application and they interact with each other.
// Interactions happen through a public interface (api)
// There are other paradigms like functional programming.

// CLASSES AND INSTANCES (TRADITIONAL OOP)
// A class is a blueprint which can then be used to create an object.
// JavaScript does not support real classes.
// An object created through  a class is called an instance of that class

// The 4 fundamental oop principles
// Abstraction
// ==> Hiding details that don't matter allowing us to get an overview perspective of the thing we're implementing instead of messing with the  details that don't really matter in our implementation. Eg we don't know what happens behind the scenes of addEventListener()

// Encapsulation
// ==>Keeping properties and methods private inside the class so they are not accessible from outside the class. Some methods can be exposed as public interface (API). Encapsulation prevents external code from accidentally manipulating internal properties/state.

// Inheritance
// ==> example, an admin is just a user. To avoid duplicate, we can create the user class where the admin and other students for example can inherit from the same user class. Inheritance makes all properties and methods of a certain class available to a child class forming a hierachical relationship between classes.

// Polymorphism
// ==> A child class can overwrite a method that it inherited from a parent class.


// OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT
// ==========================================

// In JS: prototypes
// IN js, we have something called prototypes and all objects in javaScript are linked to a certain prototype object
// Each objec has a prototype.
// The prototype object contains methods and properties that all objects that are linked to that prototype can access and use. This behavior is called ===Prototypal inheritance===
// this inheritance is different from the normal traditional inheritance. I.E THAT WAS ONE CLASS INHERTING FROM ANOTHER CLASS BUT IN THIS CASE, IT IS AN INSTANCE INHERITTING FROM A CLASS.
// objects delegate their behavior to the prototype

// 3 ways of implementing prototypal inheritance in JavaScript
// 1. Constructor function technique
// -----------------------------------
// =>creating an object from a function
// => this is how built in objects like arrays, maps or sets have been implemented eg const Person = fucntion(){}

// 2. ES6 classes
// ---------------
// => modern alternative to constructor function syntax
// 'Syntactic sugar', behind the scenes, ES6 classes work exactly like constructor functions.
// ES6 classes do NOT behave like classes in OOP

// 3. Object.create()
// -------------------
// The easiest and the most straightforward way of linking an object to a prototype object.