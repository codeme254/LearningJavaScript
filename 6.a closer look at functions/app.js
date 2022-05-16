// A CLOSER LOOK AT FUNCTIONS
'use strict';

// DEFAULT PARAMETERS
//parameters set by default
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
// the defaults can be overwritten
createBooking('LH123', 2, 880);
createBooking('LH123', 5);

// HOW PASSING ARGUEMENTS WORKS, VALUE VS REFERENCE
// how primitives and objects work in the context of functions
const flight = 'LH234';
const dennis = {
  name: 'dennis otwoma',
  passport: 23245654645,
};

const checkIn = function (flightNum, passenger) {
  //number of flight was changed
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 23245654645) {
    console.log('check in');
  } else {
    console.log('wrong passport');
  }
};
checkIn(flight, dennis);
console.log(flight); //LH234
console.log(dennis); //object
//passing a primitive into a function is really just like copying it outside the function
// when we pass an object into a function it is just like copying it i.e passenger = dennis, whatever we change in the copy will also happen to the original

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(dennis);
checkIn(flight, dennis);

// passing by value and passing by reference: javascript does not have anything like passing by reference

// FIRST CLASS AND HIGH ORDER FUNCTIONS
// FIRST CLASS FUNCTIONS meaning that functions are simply treated as values, in JS functions are just othr types of objects, they are just values meaning we can store them in variables, manipulate them etc., this also means in JS we can pass functions as arguements and return functions, we can also call methods on functions.

// HIGHER ORDER FUNCTION is a function that receives or returns another function
// first class functions and higher order functions are two different things, first class functions meaning a function is a normal citizen and higher order function meaning a function is receiving or returning another function

// 6.FUNCTION ACCEPTING CALLBACK FUNCTIONS
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// the higher order funtion
const transformer = function (str, fn) {
  console.log(`Original string: ${str}.`);
  console.log(`Transformed string: ${fn(str)}.`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); //we are only passing the reference not calling it in this call
//THIS IS THE OUTPUT
// Original string: JavaScript is the best!.
// app.js:79 Transformed string: JAVASCRIPT is the best!.
// app.js:80 Transformed by: upperFirstWord

transformer('JavaScript is the best!', oneWord);
// Original string: JavaScript is the best!.
// app.js:79 Transformed string: javascriptisthebest!.
// app.js:80 Transformed by: oneWord

// 8.THE CALL AND APPLY METHODS
// how the this keyword works in functions
const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `$${this.iatacode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Dennis Otwoma');
lufthansa.book(239, 'Asenath Paneah');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
  //we also want the book method here
};
const book = lufthansa.book;
// book(23, 'Sarah Williams');//cannot read property airline of undefined, book is not just a regular function call, right now, the this keyword is pointing to undefined, this keyword depends on how the function is called

//so how do we explicitlly tell javascript that the function should belong to lufthansa or eurowings?

book.call(eurowings, 23, 'Sarah Williams');

//we did not call the book method ourselves, we called the call method which will call the book method with the this keyword set to eurowings, this allows us to set the this keyword manually of the function that we want to call
//we can do the same for lufthansa
book.call(lufthansa, 256, 'Maasai Doctor');

//we can now create more airlines and they will use the same method
const swiss = {
  airline: 'Swiss Air Lines',
  iatacode: 'LX',
  bookings: [],
};
book.call(swiss, 304, 'Jane Doe');
book.call(swiss, 334, 'Jack Doe');

//apply method:
//it does the same thing as the call method only that it does not receive a list of arguements after the this keyword, instead it takes an array of arguements
const flightData = [567, 'Sheldon Cooper'];
book.apply(swiss, flightData);

//what we have been doing all along is manually setting the this keyword, eg book.apply(swiss, flightData); swiss is the manually set this keyword

//we use the spread operator to spread out elements of an array
book.call(swiss, ...flightData);

// 9. THE BIND METHOD
//it also allow us to manually set the this keyword only that it returns a new function instead of immeadiately calling the function
//the returned function is where the this keyword is defined
//it is set to whatever value we pass in the bind

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); //partial application::: partially passing arguements, for this function, we are supposed to pass in the name and the flight number and the flight number is already defined
bookEW23('dennis otwoma');
bookEW23('maasai doctor');

// objects together with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);//the this keyword is set to the button element and so we need to set it manually so that it points to the lufthansa object
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
//we are not interested in the this keyword but we still use the bind method
//partial application means presetting the values
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// CODING CHALLENGE
// Let's build a simple poll app! A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this: What is your favourite programming language? 0: JavaScript 1: Python 2: Rust 3: C++ (Write option number)
//  1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
//  2. Call this method whenever the user clicks the "Answer poll" button.
//  3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
//  4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
//  5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
//  Test data for bonus:  § Data 1: [5, 2, 3] § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉

// GOOD LUCK 😀
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:      C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let option = Number(
      prompt(
        'What is your favourite programming language\n0: JavaScript\n1: Python\n 2: Rust\n 3: C++'
      )
    );
    if (typeof option === 'number' && option >= 0 && option <= 3) {
      this.answers[option]++;
    } else {
      console.log('Invalid choice');
    }
    console.log(this.answers);
    this.displayResults('string');
    this.displayResults('array');
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${[...this.answers]}`);
      // this.answers.join(', ')//converting the array to string
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};
const answerPollBtn = document.querySelector('.poll');
answerPollBtn.addEventListener('click', function () {
  poll.registerNewAnswer();
});
// the bonus section
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

//immediately invoked function expressions
// these are functions that disappear right after they are called once
const runOnce = function () {
  console.log('this will never run again');
};
runOnce();
// this can still be run at some point in the code again

// to make an immediately invoked function expression: we wrap it around parentheses as shown below and add the paretheses at the end to show we are calling it
(function () {
  console.log('this will never run again I promise this time');
})();

// the same applies to arrow functions
(() => console.log('this will never run again I promise this time 2'))();
// why was this pattern invented: functions creat scope and one scope does not have access to the variables of another scope

// const, let are block scoped meaning that they cannot be accessed outside a block while var is global scoped meaning it can be accessed outside a block
{
  const isPrivate = 23;
  let privatAgain = 32;
  var notPrivate = 33;
}
// console.log(isPrivate);//produces an error
// console.log(privatAgain);//produces an error
console.log(notPrivate); //is ok

// 12.CLOSURES IN JAVASCRIPT
// closures happen automatically in certain situations, we just need to recognize those situations
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking(); //booker is a function as well
booker(); //1 passengers
booker(); //2 passengers
booker(); //3 passengers

// how can the booker function access the passengerCount variable and yet the secureBooking function has finished executing? (it's execution context is no longer in the stack)?
//what makes this possible is a closure
//a closure makes a function remember all the variables that existed at a function's birth
//a function always has access to the variable environment of the execution context in which it was created even after the execution context is gone
//a closure is a variable environment attached to the function, exactly as it was at the time and place the function was created
//A closure gives a function access to all the variables of its parent function even after that parent function has returned.
//A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place

// 13.MORE CLOSURES EXAMPLES
//we don't need to return a function from another function in oreder to create a closure
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f(); //46
// reassigning the f function
h();
f();//1554
// inspecting the variable environment of f
console.dir(f)

// example 2 of a closure
//a timer is another great example
const boardPassengers = function(n, wait){
  const perGroup = n/3;
  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are three groups each with ${perGroup} passengers.`);
  }, wait*1000)
  console.log(`Will start boarding in ${wait} seconds.`);
}
//closures have priority over scope chain
boardPassengers(180, 3)