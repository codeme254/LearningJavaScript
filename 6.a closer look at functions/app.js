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