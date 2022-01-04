// 2.ACTIVATING THE STRICT MODE
// is a special mode in js which makes it easier to write secure js code
'use strict'; //has to be the very first in the script
//it can also be activated only for specific function or specific block but no need
//it helps us avoid accidental errors, creates visible errors in certain situation

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');

// use strict also introduces a list of names of features that might be added to the language in the future

// const interface = 'Audio';//prints Unexpected strict mode reserved word because interface is a keyword that will be used by js in the future

// 3.FUNCTIONS
// a function is a piece of code that we can reuse over and over again
// variables can hold values but functions can hold one or more lines of code
function logger() {
  console.log('MY name is Dennis');
}
// we simply call a function to use it
logger(); //invoking/running/calling a function
// we can also pass data into a function, these are called parameters
//parameters are like variables that are specific to one function
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; //this returned value can be used later anywhere in the code
}
const appleJuice = fruitProcessor(5, 0); //5 and 0 are arguements
console.log(appleJuice); //or
// console.log(fruitProcessor(5, 0));

// reusing the functions as many times as we want
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// 4.FUNCTION DECLARATION VS EXPRESSIONS
// the functions above are function declarations because we used the function keyword as if declaring a variable
const age1 = calcAge1(2001);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// function expression (anonymous function)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(2001);
console.log(age1, age2);

// functions declarations can be called before they are defined in the code as in line 43
// function expressions however don't work that way
//all this is due to a process called HOISTING

// 5.ARROW FUNCTIONS (ES6)
const calcAge3 = birthYear => 2037 - birthYear; //arrow function and that is it
// return in arrow functions happen implicitly, we don't have to write the return keyword in one liner functions
const age3 = calcAge3(2001);
console.log(age3);
// more parameters and more code to an arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(2001, 'dennis'));
console.log(yearsUntilRetirement(2004, 'Maasai Doctor'));

// 6.FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4; //2 apples means 8 pieces
}
function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice; //this returned value can be used later anywhere in the code
}
console.log(fruitProcessor2(2, 3));

// 7.REVIEWING FUNCTIONS
// three types of functions
// function declaration=== function can be used before it is declared
// function expression===function value stored in a variable
// arrow functions === suitable for quick one line functions
// functions must have names
// functions need parameters, placeholders that receive input values
// return statement is used to ouput value from a function
// functions are called with parentheses

// ======================
// CODING CHALLENGE
// ======================

/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). 
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! 
Your tasks: 
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
2. Use the function to calculate the average for both teams 
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), 
and then logs the winner to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)" 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2 
5. Ignore draws this time 
Test data: 
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27  */

// my soln
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolphinsAverage = calcAverage(88, 54, 41);
const koalasAverage = calcAverage(23, 32, 27);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log('draw/no winner');
  }
};
checkWinner(dolphinsAverage, koalasAverage);

// 9. INTRODUCTION TO ARRAYS
const friend1 = 'michael';
const friend2 = 'steven';
const friend3 = 'peter';
//10 friends will mean 10 variables
//we can bundle them together into a data structure called array
// the two most important data structures in js are arrays and objects

// arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); //['Michael', 'Steven', 'Peter']
// there is still another way of creating arrays...the literal syntax
const years = new Array(1991, 1984, 2008, 2020);
console.log(years); //[1991, 1984, 2008, 2020]

// arrays are accessed using the square brackets syntax
console.log(friends[0]); //Michael

// we can also get the number of elements in an array
console.log(friends.length); //3, because the friends array has 3 elements
//we can use this to get the last element in the array
console.log(friends[friends.length - 1]); //Peter
// we can also use the square braces to change an element in array
friends[2] = 'Samantha';
console.log(friends); //['Michael', 'Steven', 'Samantha']
// we declared the friends array with const and still mutated it, WHY????
// ANSWER::::ONLY PRIMITIVE VALUES ARE IMMUTABLE, AN ARRAY IS NOT A PRIMITIVE VALUE THUS IT CAN BE MUTATED
// what we cannot do is replacing the entire array eg
// friends = ['bob', 'alice'];

const dennis = ['dennis', 'otwoma', 2037 - 1999, 'programmer', friends]; //adding operations as elements of an array since javascript expects an expression(something that produces a a value);
console.log(dennis); //['dennis', 'otwoma', 38, 'programmer', Array(3)]
console.log(dennis.length); //5

// exercie
const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};
const years2 = [1990, 1967, 2002, 2010, 2018];
const age4 = calcAge4(years2[0]);
const age5 = calcAge4(years2[1]);
const age6 = calcAge4(years2[years2.length - 1]);
console.log(age4, age5, age6);

const ages = [
  calcAge4(years2[0]),
  calcAge4(years2[1]),
  calcAge4(years2[years2.length - 1]),
];
// always remember that values of an array can be anything as long as they are expressions(things that will eventually produce values)
console.log(ages);

// 10. BASIC ARRAY OPERATIONS (METHODS)
// push---adds elements to the end of an array
const newLength = friends.push('Caren');
console.log(friends); //['Michael', 'Steven', 'Samantha', 'Caren']
// push also returns a value and in this case the length of the array
console.log(newLength); //4
//unshift() --- adds elements to the beginning of an array
friends.unshift('cassandra');
console.log(friends); //['cassandra', 'Michael', 'Steven', 'Samantha', 'Caren']

// removing elements from an array
//pop() opposite of push, removes at the end of an array
const removed = friends.pop();
console.log(friends); //['cassandra', 'Michael', 'Steven', 'Samantha']
//pop() returns the removed element
console.log(removed); //Caren
//shift() will remove the first element of an array
friends.shift();
console.log(friends); //['Michael', 'Steven', 'Samantha'] shift also returns the element that was removed and if we want we can capture it
//we can also get the position of elements in an array
console.log(friends.indexOf('Steven')); //1
//  includes instead of returning the index of an element will return true if an element is present and false if not
console.log(friends.includes('Michael')); //true
console.log(friends.includes('bob')); //false
//it uses the strict equality operator for this checking

// ======================
// coding challenge 2
// ======================
/* Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. 
Your tasks: 
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above
 (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. 
 Test the function using a bill value of 100 
 2. And now let's use arrays! So create an array 'bills' containing the test data below 
 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before 
 4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
Test data: 125, 555 and 44 
Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! 
So you can just call a function as array values 
(so don't store the tip values in separate variables first, but right in the new array) 😉 */

// my soln
const calcTip = bill => {
  let tip;
  if (bill >= 50 && bill <= 300) tip = 0.15 * bill;
  else tip = 0.2 * bill;
  return tip;
};
console.log(calcTip(100));
const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// 12.INTRODUCTION TO OBJECTS
// storing multiple related values in the same variable
// key value pairs
const dennisInfo = {
  firstName: 'Dennis',
  lastName: 'Otwoma',
  age: 2037 - 1999,
  job: 'programmer',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(dennisInfo);
// firstName, lastName, age, job and friends are properties
// the syntax above is called the object literal syntax
// in objects, the order of values does not matter during retrieval while in arrays this matters

// 13. DOT VS BRACKET NOTATION
// retrieving and changing data in an object

//  the dot notation
// getting the last name
console.log(dennisInfo.lastName); //Otwoma
// using the brackets notation
console.log(dennisInfo['lastName']); //Otwoma
// the difference is that in the bracket notation, we can put an expression
const nameKey = 'Name';
console.log(dennisInfo['first' + nameKey]); //Dennis
// we cannot do that with dot notation
// when we need to first compute the property name, then we have to use the bracket notation, else, we use the dot notation

/* const interestedIn = prompt('What do you want to know about dennis, choose between firstName, lastName, age, job and friends');

if(dennisInfo[interestedIn]){
    console.log(dennisInfo[interestedIn]);
}else{
    console.log('wrong request')
} */

// adding more properties
dennisInfo.location = 'Kenya';
dennisInfo['twitter'] = '@zaphthegreat';
console.log(dennisInfo);

// A small challenge
//write: dennis has three friends and his  best friends is called michael
console.log(
  `${dennisInfo.firstName} has ${dennisInfo.friends.length} and his best friend is ${dennisInfo.friends[0]}.`
);

// 14. OBJECT METHODS
// we can also add functions to objects, functions inside objects are called methods
const lenashInfo = {
  firstName: 'Esther',
  lastName: 'Lenana',
  birthYear: 2004,
  job: 'doctor',
  friends: ['Ann', 'Sylvia', 'Rubadiri'],
  hasDriversLicense: true,
  // calcAge: function(birthYear){
  //     return 2037 - birthYear;
  // }
  // calcAge: function(){
  //     // console.log(this);//will log the whole object
  //     return 2037 - this.birthYear;
  //     //same as lenashInfo.birthyear
  // }
  calcAge: function () {
    // creating new properties with the this keyword
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  // small challenge//summary method
  // lenana is a 33 year old doctor and he has a driver license/has no driver license
  getSummary: function () {
    // const hasLicenseString = this.hasDriversLicense ? 'has a driver\'s license':'has no driver\'s license';
    return `${this.firstName} is a ${this.age} years old ${this.job} and she ${
      this.hasDriversLicense
        ? "has a driver's license"
        : "has no driver's license"
    }.`;
  },
};

// we can also access the calcAge
console.log(lenashInfo.calcAge());
// using the brackets notation
console.log(lenashInfo['calcAge']());
console.log(lenashInfo.age);
console.log(lenashInfo.getSummary());

// the this keyword is equal to the object on which the method is being called

// ====================
// CODING CHALLENGE 3
// ====================
/* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter) 
Your tasks:
 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith) 
 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method 
 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 
Test data: Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall. 
 */

// my soln
const markObj = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const johnObj = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markObj.calcBmi();
johnObj.calcBmi();
console.log(markObj.bmi, johnObj.bmi);
if (markObj.bmi > johnObj.bmi) {
  console.log(
    `${markObj.fullName}'s BMI (${markObj.bmi}) is greater than ${johnObj.fullName}'s BMI (${johnObj.bmi}).`
  );
} else if (johnObj.bmi > markObj.bmi) {
  console.log(
    `${johnObj.fullName}'s BMI (${markObj.bmi}) is greater than ${markObj.fullName}'s BMI (${johnObj.bmi}).`
  );
} else {
  console.log(`Their BMI's are equal`);
}

// 16.ITERATION: LOOPs
// loops are also control structures
// for loop keeps running while the condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep} 🏋️‍♂️`);
}

// 17.looping arrays, BREAKING AND CONTINUE
const dennisArray = [
  'dennis',
  'otwoma',
  2037 - 1999,
  'programmer',
  ['Michael', 'Peter', 'Steven'],
];
//creating  a new array based on another array
const types = [];
for (let i = 0; i < dennisArray.length; i++) {
  // console.log(`showind data ${dennisArray[i]}`);
  // reading from the dennisArray
  console.log(dennisArray[i], typeof dennisArray[i]);
  // filling the types array
  // types[i] = typeof dennisArray[i];
  types.push(typeof dennisArray[i]);
}
console.log(types); //['string', 'string', 'number', 'string', 'object']

const yearsOfBirth = [1991, 2007, 1969, 2020];
const agesArray = [];
for (let i = 0; i < yearsOfBirth.length; i++) {
  agesArray.push(2037 - yearsOfBirth[i]);
}
console.log(agesArray);

// the continue and the break statement
// continue is to exit the current iteration of the loop and to go to the next one
//break is to kill the whole loop

// printing only elements that are strings
console.log('---ONLY STRINGS---');
for (let i = 0; i < dennisArray.length; i++) {
  if (typeof dennisArray[i] !== 'string') continue;
  console.log(dennisArray[i], typeof dennisArray[i]);
}
// break will completely terminate the whole loop
console.log('---BREAK WITH A NUMBER---');
for (let i = 0; i < dennisArray.length; i++) {
  if (typeof dennisArray[i] === 'number') break;
  console.log(dennisArray[i], typeof dennisArray[i]);
}

// 18.LOOPING BACKWARDS, AND LOOP IN LOOP
// looping the dennisArray backwards
for (let i = dennisArray.length - 1; i >= 0; i--) {
  console.log(i, dennisArray[i]);
}

// loop inside of a loop
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------Starting exercise ${exercise}-------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♂️`);
  }
}

// 19.WHILE LOOP
//for a while loop we can only specify the condition
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️.`);
  rep++;
}

// a while loop that does not depend on a counter
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}.`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`loop is about to end...`);
  }
}

// ====================
// CODING CHALLENGE 4
// ====================
/* Let's improve Steven's tip calculator even more, this time using loops! 
Your 
tasks: 1. Create an array 'bills' containing all 10 test bill values 
2. Create empty arrays for the tips and the totals ('tips' and 'totals') 
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values 
(bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations! 
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52 
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉 
Bonus:
 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
 This function calculates the average of all numbers in the given array. This is a difficult challenge 
 (we haven't done this before)! Here is how to solve it: 
 4.1. First, you will need to add up all values in the array. 
 To do the addition, start by creating a variable 'sum' that starts at 0. 
 Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. 
 This way, by the end of the loop, you have all values added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array 
(because that's the number of elements) 
4.3. Call the function with the 'totals' array  */

// my soln
const billsCh = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsCh = [];
const totalsCh = [];

const calcTipCh = bill => {
  let tip;
  if (bill >= 50 && bill <= 300) tip = 0.15 * bill;
  else tip = 0.2 * bill;
  return tip;
};
for (let i = 0; i < billsCh.length; i++) {
  tipsCh.push(calcTipCh(billsCh[i]));
  totalsCh.push(calcTipCh(billsCh[i]) + billsCh[i]);
}
console.log(billsCh);
console.log(tipsCh);
console.log(totalsCh);

const calcAverageCh = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverageCh(billsCh));

// coding challenge to practice problem solving
//given an array of forecasted temperatures, the thermometer displays a string with these temperatures
//example [17, 21, 23] will print "...17 in 1 days...21 in 2 days...23 in 3 days"
//create a  function printForecast that takes in an array arr and logs a string like the above to the console

const printForecastCh = arr => {
  let baseString = '';
  for (let i = 0; i < arr.length; i++) {
    baseString += `...${arr[i]} degrees celsius in ${Number([i]) + 1} days`;
  }
  return `${baseString}...`;
};
console.log(printForecastCh([17, 21, 23]));
console.log(printForecastCh([12, 5, -5, 0, 4]));
console.log(printForecastCh([17, 21, 23, 22, -1, 12, 15, 22, 19, 12, 14]));

//instructors solution
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} degrees celcius in ${i + 1} days ... `;
  }
  console.log(`... ${str}`);
};
printForecast(data1);
