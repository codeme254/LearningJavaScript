'use strict';
// 2.A HIGH-LEVEL OVERVIEW OF JAVASCRIPT
// javascript is a high-level oop multiparadigm programming language
//=>High Level: we don't have to manage resources manually as in C
//=> Garbage-collected: removes unused objects from the computer memory in order to avoid clogging  it with useless staffs.
//interpreted/just-in-time: it is not written in machine code.
//=>multi-paradigm: in programming, a paradigm is an approach and an overall mindset of structuring our code, directs coding style and technique
// THE THREE PROGRAMMING PARADIGMS ARE
// 1. PROCEDURAL: what we have been using, just orgainizing the code in a linear way with some functions between
// 2.OBJECT ORIENTED:
//3. FUNCTIONAL PROGRAMMING
// many languages are either procedural or functional or oop, js is all round

//Prototype-based object-oriented:
// =>first class functions: functions are treated just like regular variables, so we can treat functions as variables, so we can pass functions into other functions and even return functions from other functions
// =>dynamic: dynamically typed, so data type becomes known in compile time, types of variables change as we reassign variables

// ===>CONCURRENCY MODEL: HOW THE JAVASCRIPT ENGINE HANDLES MULTIPLE TASKS HAPPENING AT THE SAME TIME
// => single threaded: it can only do one thing at a time and thus we need a way of handling multiple things that are supposed to happen at the time. Thread is where the code is executed in the machine
//=> Non-blocking event loop: takes long running tasks, executes them in the background and takes them back to the main loop once it is done, great to handle the single thread issue.

// 4.THE JAVASCRIPT ENGINE AND RUNTIME
//js engine is just a program that executes js code.
// browsers have their own js engine and the most common one is v8 from chrome
// any javascript engine contains a CALL STACK and a HEAP
// =====>>>CALL STACK--where our code is actually executed using something called the execution context
// =====>>>HEAP: unstructured memory pool that stores all the objects that our memory needs.

// how the code is compiled to machine code
// compilation::entire source code is converted into machine code at once, and then written to a binary file that can be executed by any computer.
// interpretation:: interpretor runs through the source code and executes line by line.
// modern javascript engine uses both compilation and interpretation, this is called JUST IN TIME COMPILATION (JIT).
// compiles the entire code into machine code at once and then executes it right away.

// THE FOLLOWING STEPS TAKE PLACE ON A JAVASCRIPT CODE WHEN IT ENTERS THE JS ENGINE

// 1.PARSING :- read the code, code is parsed into a data structure called the ABSTRACT SYNTAX TREE (A.S.T), splitting each line of code into pieces that are meaningfull to the language eg the const, functions etc and then saves it to a tree, also checks if there are any syntax errors and the resulting code will be converted to machine code.

// 2.COMPILATION :- generated AST to machine code

// 3.EXECUTION :- generated compiled code is executed, happens in the call stack

// JavaScript Runtime (browser)
// js runtime is just a big container that contains all we need to run js
// the heart of the runtime is the engine
// the engine itself is not enough, so we also use the web apis
//these web apis are fuctionalities provided to the engine but are not part of the js engine itself. web apis however are also part of the runtime, eg dom, timers, fetch api etc
// Callback queue::data structure that contains all callback functions that are ready to execute, eg click, timer, data.

// javascript can also live outside the browser, eg nodejs, happens through c++ bindings and the thread pool

// 5.EXECUTION CONTEXTS AND THE CALL STACK
//HOW IS JS CODE EXECUTED
//It happens in the call stack in the engine
//code just finished compiling and is ready to be executed
//what happens is:
//GLOBAL EXECUTION CONTEXT is created for the top level code(code that is not inside any callback function).
//EXECUTION CONTEXT is an environment where the js code is executed. js code always run in an execution context.
//EXECUTION CONTEXT IS ONLY ONE IN ANY JS PROJECT.
//The functions then start executing, and callbaks waiting also happens
//What's inside the execution context
// 1.Variable environment::all variables and functions declarations are stored, arguements also fall here.
// 2. the Scope Chain: consists references to variables that are located outside of the current function.
// 3.this keyword:
// execution contexts belonging to the arrow function do not get access to the arguments object or the this keyword

//the call stack: it is a place where execution contexts get stacked on top of each other in order to keep track of where we are in the execution.

//top level code execution
//global execution context created for the top level code.
//the context is then put in the stack.
//immediately a function is called, it gets its own context so that it can run the code in the body.
//function execution context is popped off the stack and removed from the computer memory when a function finishes.
//Global Execution context is only finished when we eg close the browser.

// 6. SCOPE AND THE SCOPE CHAIN
// we have so far learned that each execution context has a variable environment, the scope chain and the this keyword.
//What is the scope and the scope chain

//SCOPING controls how our program's variables are organized and accessed by the js engine.
//IT ASKS THE QUESTION: WHERE DO VARIABLES LIVE AND WHERE CAN WE ACCESS CERTAIN VARIABLES AND WHERE CAN WE NOT

//LEXICAL SCOPING: scoping is controlled by placement of functions and blocks in the code. eg, a function inside a function has access to the parent functions.

// SCOPE: is the space or environment in which a certain variable is declared.

// THERE IS GLOBAL SCOPE, FUNCTION SCOPE AND BLOCK SCOPE.

//THE SCOPE OF A VARIABLE is the entire region of a code where a certain variable can be accessed.

// the three types of scope in js
//GLOBAL SCOPE: variables declared outside any functions or blocks, accessible to anywhere in the code.
//FUNCTION SCOPE: variables are accessible to function they live in. ALSO LOCAL SCOPE
//BLOCK SCOPE: everything that is between curly braces eg {}, such as the blocks of an if statement or a for loop or a while loop etc, it was introduced in es6, however this only applies to variables created with the let and const variables.
//functions are also block scoped but in strict mode.

// summary:
//scoping asks the question where do variables live, where can we access these variables and where can't we.
//javascript uses lexical scoping, so the rules of here we can access variables are based on exactly where in the cide functions and blocks are written.
//Every scope always has access to all the variables from all its outer scopes. This is the scope chain.
//When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it is looking for, this is called variable lookup.
//The scope  chain is a one way street, a scope will never have access to the variables of an inner scope. Only of outer scope.
//The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes.
//the scope chain has nothing to do with the order in which the functions were called. It does not affect the scope chain at all.

// 7.SCOPING IN PRACTICE
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); //

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
    // creating a block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      // proving that functions are block scoped, only true for strict mode, if we turn the strict mode off, it works!
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // throws an error that str is not defined since it is block scoped
    console.log(millenial); //returns true because variables declared with the var keyword are block scoped.
    // add(2, 4) throws an error, only true for strict mode
  }
  printAge();
  return age;
}
// global variable
const firstName = 'Dennis';
calcAge(1991);
// we cannot call the printAge function outside here

// 8.VARIABLE ENVIRONMENT HOISTING AND THE TDZ

// we know that an execution context contains the following, variable environment, scope chain and the this keyword.

//VARIABLE ENVIRONMENT
//HOISTING: makes some types of variables accessible/usable in the code before they are actually declared in the code.
//"variables lifted to the top of their scope."

// how hoisting works for various situations in js

//FUNCTION DECLARATIONS: hoisted, initial value is actual function and the scope is block, i.e we can use function declarations before they are declared in the code.

//VAR VARIABLES: hoisted, initial value is undefined and it is function scoped, when we try to access a var variable before it is declared in the code, we get undefined.

//LET AND CONST VARIABLES: not hoisted, initial value is uninitialized TDZ, and the scope is block. TDZ means Temperal Dead Zone which makes it so that we cannot access the variables between the beginning of the scope and the place they are declared.

//FUNCTION EXPRESSIONS AND ARROW FUNCTIONS: depends if using var or let or const.

// TEMPERAL DEAD ZONE, LET AND CONST
//TEMPERAL DEAD ZONE is the region of the scope that a variable is defined but cannot be used

// 9.HOISTING AND TDZ IN PRACTICE

// HOISTING WITH VARIABLES
//console.log(ne);//prints undefined because variables declared with var are hoisted but are hoisted with the value undefined
//console.log(job);//error, because let cannot be hoisted, it is in the Temperal Dead Zone.
//console.log(year);//same case for the job variable.

var ne = 'dennis';
let job = 'frontend web developer';
const year = 1991;

//HOISTING WITH FUNCTIONS

//accesing the functions before initialization
//console.log(addDecl(2, 3)); //returns 5, works because this is function declaration and function declarations are hoisted.
//console.log(addExpr(2, 3));//returns an error because it cannot be hoisted
//console.log(addArrow(2, 3));//returns error because it cannot be hoisted

// the only function that can be hoiste (used before declaration) is the function declaration

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// pitfall/mistake we can do in hoisting
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  //dangerous function we should not call with no care
  console.log('all products deleted');
}

// shows all products deleted even though the numProducts variable is 10; why, this is because of hoisting, since we tried to use numProducts before creating and initialising the value, the initial value is set to undefined, which is a falsy value, and thus the numProducts at the top level code is literally zero
//to avoid this, don't use var to declare variables.
//for clean code declare your variables at the top of the scope
//declare all your functions before using them.

var x = 1;
let y = 2;
const z = 3;

// 10. THE THIS KEYWORD.
// how it works
// it is a special variable that is created for every execution context(every function).
// takes the value of (point to) the owner of the function in which the this keyword is used.
// this is NOT static, it depends on how the function is called, and its value is only assigned when the function is actually called.

// how functions are called
//1. as a method= this keyword point to the object that is calling the method.
//2. simple function call= this is set to undefined. Only under strict mode.
//3. arrow functions = this of sorrounding functions (lexical this). i.e the lexical this keyword
//4. event listener = this keyword will point to the dom element that the handler function is attached to.

// this will never point to the function in which we are using it, it will also never point to the variable environment of the function

// 11. THE THIS KEYWORD IN PRACTICE
console.log(this); //window object

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge2(1991); //this keyword will be undefined because we are in the 'strict mode' and this is a regular function call

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991); //this keyword points to the window because this is an arrow function, the arrow function does not get the this keyword, it will get the lexical keyword, i.e the this keyword of the parent

const dennis = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
dennis.calcAge(); //the dennis object. when we have the method call, the this keyword will point to the object calling the method

// NOTE: THE THIS KEYWORD WILL POINT TO THE OBJECT CALLING THE METHOD AND NOT THE OBJECT THAT CREATED THE METHOD.

const matilda = {
  year: 2017,
};
matilda.calcAge = dennis.calcAge; //copying the calcAge method from dennis to matilda (method borrowing)

matilda.calcAge(); //prints the matilda object

const f = dennis.calcAge;
// f();//undefined error, because the this keyword is undefined, this proves that regular function calls do not have access to the this keyword.

//12.REGULAR FUNCTIONS VS ARROW FUNCTIONS
const elvis = {
  firstName: 'elvis',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(`Hey ${this.firstName}.`);
    console.log(this); //window
  },
};
elvis.greet(); //prints hey undefined, this is because an arrow function does not get it's own this keyword
// if we had used var outside this object to create a firstName variable, say matilda, then the result would have been Hey matilda, this is because creating variables with the var keyword saves the variable to the global object which is the window in this case

// We should never use arrow functions to create methods

// another pitfall of the this keyword is when we have a function inside a method

const steven = {
  firstName: 'elvis',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // const self = this;

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
      //   console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}.`);
  },
};
steven.greet();
//steven.calcAge();//prints cannot read property year of undefined. This is because isMillenial() is just a regular functions as much as it is inside a method

// to solve this, outside the millenial function we create a  variable called self and set it to this and then inside the function isMillenial we use the self variable

// Another solution is to use the arrow function because it uses the this keyword of the parent scope.

// THE ARGUEMENTS KEYWORD
//functions also get access to the arguement keyword just like the this keyword
//however, just like the this keyword, it's only the regular functions that get access to the arguements keyword.

const addExpr2 = function (a, b) {
  console.log(arguments); //an array of a and b
  return a + b;
};
console.log(addExpr2(2, 5));
console.log(addExpr2(2, 5, 5));

// the arrow function does not get access to the arguements keyword to.

// 13. PRIMITIVE VS OBJECTS (PRIMITIVE VS REFERENCE TYPES)

let age = 30;
let oldAge = age;
age = 31;

console.log(age); //31
console.log(oldAge); //30

const me = {
  name: 'dennis',
  age: 30,
};
const friend = me; //name and age are the same
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
//prints that me and my friend have the age of 27.

// primitive are primitve types and objects are reference types
//remember the engine has two components call stack and heap
//reference types (objects) are store in the heap and primitives are stored in the call stack

// for primitives , the variable does not point to the value, it points to the memory address, eg age, oldAge will also point to the same address, reassigning the age makes it that another address is created in the memory with the new value, so age will be pointing to the new address and the oldAge will be pointing to the same address. And this is why we got the results we got above

// 14. PRIMITIVES VS OBJECTS IN PRACTICE.
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); //Davis Williams

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; //behind the scenes we are just creating a reference which will point to the same object
marriedJessica.lastName = 'Davis'; //will not give expected output
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const jessicaCopy = Object.assign({}, jessica2);
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);