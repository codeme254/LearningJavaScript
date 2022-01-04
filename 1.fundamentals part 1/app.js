
// values and variables
// a value is basically a piece of data, eg 'dennis', 32
// it is the smallest unit of information in javascript
//values are stored in containers called variables
let firstName = 'Dennis'; //firstName is a variable and Dennis is  a value
console.log(firstName); //logs dennis

// convensions and rules for naming variables in javascript
//--> use camelCase
//--> cannot start with digits eg 3years
//--> can only contain numbers, lettes, underscore and the dollar sign
//--> you cannot use reserved words eg function,new etc.
//--> never start a variable name with uppercase letter(convension, not illegal).
//--> variables that are all in uppercase should be reserved for constants that will never change eg let PI = 3.1428
//--> variable names should be descriptive, i.e, one should know what the variable is holding by just reading it


// DATA TYPES
// =============
//values can have different types depending on the type of data we want them to hold
//In javascript, every value is either an object or a primitive value
// a value is only a primitive when it is not an object
//object looks like let me = { name: 'dennis'} and a primitive will look like let firstName = 'dennis'

// THERE ARE SEVEN PRIMITIVE DATA TYPES IN JAVASCRIPT
//numbers, strings, undefined, boolean, null, symbol, bigInt
//numbers--floating meaning they always have decimals even if we can't see them 23 is 23.0 under the hood in js
//strings--sequence of characters put in quotes
//boolean--logical i.e true or false and nothing else
//undefined--value taken by a variable that is not yet defined i.e empty
//null--also means empty but used in different circumstances
//symbol--introduced in es2015 value is unique and cannot be changed
//bigint--larger integers than number type can hold

//JavaScript has dynamic typing i.e data type is automatically defined by js
//in JavaScript as compare to C or C++, it is the value that has a type and not the varialble
//value 23 for example can be initially be a number then letter in the code be a string

let javascriptIsFun = true;
console.log(javascriptIsFun) //prints out true
//always remember that in JavaScript it is the value that holds the data type and not the variable
//we can see the type of a value using the typeof operator
console.log(typeof true) //prints boolean
console.log(typeof javascriptIsFun) //prints boolean
console.log(typeof 23);//prints number
console.log(typeof 'dennis'); //prints string

//dynamic typing in action
//dynamic typing is changing the type of a value that is held by a variable

javascriptIsFun = 'YES!'; //don't write the let again, that will be redeclaring a variable which is wrong
console.log(typeof javascriptIsFun) // this will now print string
//undefined in example
let year;
console.log(year) //this is undefined because the variable year is empty
console.log(typeof year) //undefined
//we can reassign it later


// LET, CONST AND VAR
//let and const were introduced in es6 while the var keyword is the old way of declaring variables

//we use the let keyword to declare variables that can change later
let age = 22;
age = 23; // this is called mutation i.e changing the values of variables, comes in handy in cases when we want empty variables

//const keyword is used to declare variables that cannot be changed in the future
const birthYear = 2001;
// birthYear = 2000; //this is wrong, because birthYear is a constant
//we cannot declare empty const variables eg const birthYear;
//const will always need an initial value

//for clean code, it is recommended to use const and use let only when forced to by your data

//var keyword (should be avoided) is the old way of declaring variables prior to es6
var job = 'frontend developer';
job = 'data scientist'; //kind of similar to let
//NEVER USE VAR

//we can also decalare variables without using the let, var and const as shown
lastNames = 'the great';
console.log(lastNames);
//it is however a bad idea to do that


// 9.BASIC OPERATORS
//operator allows us to combine multiple values or transform values etc

//MATHEMATICAL/ARITHMETIC OPERATORS
const now = 2037;
const ageDennis = now - 1991;
const ageSarah = now - 2018;
console.log(ageDennis, ageSarah) //logging multiple values in the same console.log() function

console.log(ageDennis*2, ageDennis/10, 2**3);
//2**3 means 2 to the power of three which means 2*2*2

//we can use the plus operator to join / concatenate strings
const firstNameDennis = 'dennis';
const lastNamesDennis = 'otwoma';
console.log(firstNameDennis+" "+lastNamesDennis); //string with a space (+" "+)
//there is also the typeof operator which gives us the type of the value

//assignment operator s(=)
let x = 10+5;
x += 10; // this means x = x + 1
x *= 4; // x = x * 4
x++; // x = x + 1
console.log(x)

// comparison operatos---used to produce boolean valuesd
console.log(ageDennis > ageSarah) //prints true because ageDennis is greater than ageSarah
//we also have <, <=, >=
console.log(ageSarah >= 18);//prints true, (her age should be greater than or equal to 18 for this to return true)
const isFullAge = ageSarah >= 18;
console.log( isFullAge); //true

// 10. OPERATOR PRECEDENCE
console.log(now - 1991 > now - 2018);//prints true
//javascript has a well defined order precedence...eg why
//did it first subtract the values before comparing, why would it not first compare then subtract
let x1, y;
x1 = y = 25 - 10 - 5;
console.log(x1, y);


// ===========================================
// 11. CODING CHALLENGE                      
//============================================
// MARK AND JOHN ARE TRYING TO CALCULATE THEIR BMI, ( BODY MASS INDEX), WHICH IS CALCLATED USING THE FORMULA 
//BMI = MASS / HEIGHT ** 2 (MASS IN KG AND HEIGHT IN METER)
//1.STORE MARK'S AND JOHNS MASS AND HEIGHT IN VARIABLES
//2. CALCULATE BOTH THEIR BMIS
//3. CREATE A BOOLEAN markHigherBMI CONTAINING INFORMATION ABOUT WHETHER MARK HAS A HIGHEER BMIE THAN JOHN
//TEST DATA1: MARK WEIGHT 78KG AND 1.69 M TALL AND JOHN WEIGHTS 92KG AND 1.95 M TALL

//MY SOLN
const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / (markHeight ** 2);
console.log(markBMI);
const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / (johnHeight ** 2);
console.log(johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)


// 12. STRINGS AND TEMPLATE LITERALS
const firstNm = 'Dennis';
const currentJob = 'frontend web developer';
const birthYEar = 1991;
const yearz =2037;
const bio = "I'm " + firstNm + ", a " + (yearz - birthYEar) + " years old " + currentJob +".";
console.log(bio)

// working with template literals is simpler
const bioNew = `I'm ${firstNm}, a ${yearz - birthYEar} years old ${currentJob}.`;
console.log(bioNew)
//backticks for string literals can also be used for all strings
console.log(`Programming with JavaScript is the most fun thing in the world...`);
// template literals can also be used to create multiline strings
console.log(`String with
multiple lines in template literals`)


// 13. taking decisions with if else statements
const ageSara = 15;

if(ageSara >= 18){
    console.log('Sarah can start driving 🚗🚗');
}else{
    const yearsLeft = 18 - ageSara;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

// the above if else structure is called control structure
const bornYear = 1991;
let century;
if(bornYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century)

// ====================
// coding challenge 2
// ===================
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 
// Your tasks: 
// 1. Print a nice output to the console, saying who has the higher BMI. 
// The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
// 2. Use a template literal to include the BMI values in the outputs.
//  Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 

// my soln
if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}).`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}


// 15. TYPE CONVERSION AND TYPE COERCION
// TYPE CONVERSION IS WHEN WE MANUALLY CONVERT FROM ONE TYPE TO ANOTHER
// TYPE COERCION IS WHEN JAVASCRIPT MANUALLY CONVERTS FOR US BEHIND THE SCENES
const inputYear = '1991';
// the above inputYear cannot be used for calculations
// we need a way of converting the above string to a number
console.log(Number(inputYear));
// if we try to convert a string to a number, we get NaN, which means invalid number
// NaN comes about when an operation fails to produce a number

// we can also convert numbers to strings
console.log(String(23));
// we can convert to a number, string or boolean only i.e we cannot convert to null or undefined

// in many situations, we don't have to do the conversions ourselves, JS deals with that behind the scenes
// this is the so called type coercion
console.log("I am " + 23 + " years old.");
// 23 is a number but it is converted to string for us that is why the above operation is possible
console.log('23'-'10'-'3')//returns 10
// however
console.log('23'+'10'+'3')//prints 23103

// *, - and /, >, < all perform type coercion
// the only operator that cannot perform type coercion to a number is +


// 16. TRUTHY AND FALSY VALUES
// falsy values are values that are not exactly false but will become when we try to convert them to a boolean
// there are only 5 falsy values in JS:
//0, "", undefined, null, NaN. And false itself
// everything else in JS is a truthy values (values that will be converted to true)

//we use the Boolean() function to convert to boolean
console.log(Boolean(0));//false because 0 is a falsy value
console.log(Boolean(undefined));//false because undefined is a falsy value
console.log(Boolean('dennis'));//true because a string is a truthy value
console.log(Boolean(''));//false because empty string is a falsy value
console.log(Boolean({}));//true

const money = 0;
if(money){
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job.")
}

// checkin if a variable is defined or not
let height;
if(height){
    console.log("YAY! Height is defined.");
}else{
    console.log("Height is UNDEFINED.");
}


// 17. EQUALITY OPERATORS == VS ===
const someAge = 18;
if(someAge === 18) console.log("You just became an adult.");
// === is called strict equality operator because it does not perform type coercion
// == is called the loose equality operator because it does type coercion
console.log('18' == 18); //true
console.log('18' === 18); //false

// for clean code rules, always avoid using the loose equality operator and embrace the strict equality operator

// const favourite = Number(prompt("what is your favourite number?"))
// if(favourite === 23){//'23' == 23
//     console.log("Cool! 23 is an amazing number.")
// } else if(favourite === 7){
//     console.log("7 is also a cool number.");
// } else if(favourite === 9){
//     console.log("9 is also a cool number")
// }
// else {
//     console.log("Number is not 23 or 7 or 9");
// }

// // to check difference
// if(favourite !== 23) console.log("why not 23")

// 18. BOOLEAN LOGIC
// AND, OR, NOT
// eg, for sarah to drive, she should have a driver's license and good vision
// TRUE AND TRUE = TRUE
//FALSE AND TRUE = FALSE
//TRUE AND FALSE = FALSE
//FALSE AND FALSE = FALSE
// ------TRUE ONLY IF ALL OF THE VARAIBLES ARE TRUE

// TRUE OR FALSE = TRUE
//FALSE OR TRUE = TRUE
//----TRUE IF EITHER OF THE VARIABLES IS TRUE

// NOT OPERATOR DOES NOT COMBINE MULTIPLE VALUES, IT ONLY INVERTS, SO IF SOMETHING IS TRUE IT BECOMES FALSE AND VICE VERSA
// NOT A  IS DENOTED BY !A
//A AND B IS DENOTED BY A && B
//A OR B IS DENTOED BY A || B

// 19. LOGICAL OPERATORS
const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision);//false
console.log(hasDriversLicense || hasGoodVision);//true
console.log(!hasDriversLicense);//false

// const shouldDrive = hasDriversLicense && hasGoodVision;
if(hasDriversLicense && hasGoodVision){
    console.log("Sarah is able to drive.");
}else{
    console.log("Someone else should drive.");
}

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);//true

// ==================================
// coding challenge 3
// ===============================
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
// The winner with the highest average score wins a trophy! 
// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins 
// if it has a higher score than the other team, and the same time a score of at least 100 points. 
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score 
// and both have a score greater or equal 100 points. Otherwise, no team wins the trophy 
// Test data: 
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//  § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 

// my solution
let dolphinsAverage = (97 + 112 + 101)/3;
let koalasAverage = (109 + 95 + 123)/3;
console.log(dolphinsAverage, koalasAverage)
if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
    console.log("The Dolphins are the winners");
}else if (koalasAverage > dolphinsAverage && koalasAverage >= 100){
    console.log("The Koalas are the winners.");
}else if(dolphinsAverage === koalasAverage && dolphinsAverage>= 100 && koalasAverage >= 100){
    console.log("IT'S A DRAW.");
}else{
    console.log("NO team reached the minimum score of 100.")
}

// if(dolphinsAverage === koalasAverage && dolphinsAverage>= 100 && koalasAverage >= 100){
//     console.log("IT'S A DRAW.");
// }else if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
//     console.log("The Dolphins are the winners");
// }else if (koalasAverage > dolphinsAverage && koalasAverage >= 100){
//     console.log("The Koalas are the winners.");
// }else {
//     console.log("NO team reached the minimum score of 100.")
// }


// instructors solution
const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110)/3;
console.log(scoreDolphins, scoreKoalas);
if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy");
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win the trophy");
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy.")
}else{
    console.log("No team wins the trophy.")
}

// 21.THE SWITCH STATEMENT
//  comparing one value to multiple different options
const day = 'wednesday';
switch(day){
    case 'monday'://same as day === 'monday' uses the strict equality
        console.log("Plan the bootcamp structure.");
        console.log("Go to coding meetups.");
        break;
    case 'tuesday':
        console.log("Go through the course.");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Set up the development environment.");
        break;
    case 'friday':
        console.log("Start learning.");
        break;
    case 'saturday':
    case 'sunday':
        console.log("enjoy the weekend.");
        break;
    default:
        console.log("Not a valid day.")
}
// always remember that the switch statement performs strict equality

// coding challenge
if(day === 'monday'){
    console.log('Plan the course structure.');
    console.log('Go to coding meetup.');
}else if(day === 'tuesday'){
    console.log('Prepare theory videos')
}else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
}else if(day === 'friday'){
    console.log('Record videos.');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend.');
}else{
    console.log('Not a valid day.');
}

// 22. STATEMENTS AND EXPRESSIONS
//an expression is a piece of code that produces a value eg 3+4 is an expression
//1991 is an expression because itself will produce a value in JS
//true && false && !false is also a statemet

//a statement is a big piece of code which does not produce a value
//if..else is a statement
//anything that ends with a semicolon is a statement
//const str = '23 is bigger'; is a statement
//'23 is bigger' however is an expression
//str is an expression


// 23. CONDITIONAL/TERNARY OPERATOR
// condition ? true block : false block
const myAge = 23;
myAge >= 18 ? console.log("I like to drink wine."): console.log("I like to drink water");
// ternary operator, unlike other operators has three parts, the condition, the true block and the false block
//we can also conditionally declare varibles
const drink = myAge >= 18 ? "wine" : "water";
console.log(drink);

// ternary operators can be injected into template literals
console.log(`I like to drink ${myAge >= 18 ? "wine" : "water"}`);

// bigger blocks of code will however need if else statements

// ========================
// coding challenge 4
// ========================
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. 
// In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. 
// Your tasks: 
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. 
// It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, 
// and then try to convert it to a ternary operator!) 
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
// Example: “The bill was 275, the tip was 41.25, and the total value 316.25” 
// Test data: § Data 1: Test for bill values 275, 40 and 430 
// Hints: § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300 😉 

// my solution
const billValue = 430;
const tip = billValue >= 50 && billValue <= 300 ? billValue*0.15 : billValue*0.2;
console.log(`The bill was ${billValue}, the tip was ${tip} and the total value ${billValue + tip}.`);

// 25.JAVASCRIPT VERSIONS
// Developers wanted a programming language for the browser
// 1995: NETSCAPE NAVIGATOR, the dominant browser at that time
// hired Brendan Eich to create the very first version of JS in just 10 days
// it was called Mocha at that time
// 1996:MOCHA renamed to LiveScript and then to JavaScript in order to attract Java developers
// in the same 1996, microsoft launched IE copying JavaScript from Netscape and called it JScript
// people realised they needed to starndadise JavaScript
// it was submitted to ECMA which in 1997 released ecmascript1
// 2009: es5 was released
//JUNE 2015: biggest update of JavaScript (es6) was released

// backwards compatibility:::don't break the web meaning a very old version of js can still run in modern web browsers
// forwards compatibility:::codes from the future cannot run in current browsers

// how to  use modern js today
//development and production
//during development: simply use the latest chrome browser
//during production: use babel to transpile and polyfill your code(converting back to es5) to ensure browser compatibility to all users


