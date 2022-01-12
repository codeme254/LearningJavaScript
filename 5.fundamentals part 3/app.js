'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // passing an object into a function and providing default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngrdient, ...otherIngredients) {
    console.log(mainIngrdient);
    console.log(otherIngredients);
  },
};

// 3.DESTRUCTURING ARRAYS
// destructuring is an es6 feature and it is a way of unpacking values from an array or an object into seperate variables/ breaking a complex data structure into simpler data structure like a variaable eg
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//with destructuring, we can declare the three variables at the same time
const [x, y, z] = arr;
console.log(x, y, z); //2 3 4
// the original array is not affected

//working with the data from the restaurant
const [first, second] = restaurant.categories; //picks the first two elements of the array
console.log(first, second); //Italian Pizzeria

// what if we want the first and the third?
//we simply leave a hole in the destructuring operator
const [frst, , scnd] = restaurant.categories;
console.log(frst, scnd); //Italian Vegetarian the hole is , ,

// we can use destructuring to switch variables
let [main, , secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary); //Vegetarian Italian

// destructuring can help us return multiple values from a function
console.log(restaurant.order(2, 0)); //['Garlic Bread', 'Pizza']
const [starterOrder, mainOrder] = restaurant.order(2, 0);
console.log(starterOrder, mainOrder); //Garlic Bread Pizza

// what if we had nested array?
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j)//2,[5, 6]
// to get individual values, we will have to do destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k); //2 5 6

// we can also set default values during destructuring, this is important in situations where we don't know the length of the array and we might be destructuring positions that do not exist
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8, 9, 1

// 4.DESTRUCTURING OBJECTS
// we use the curly braces and provide names that exactly match the property names that we want to retrieve from the object
// in an object, the order of the elements does not matter, so no need for skipping
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// what if we want the variable names to be different from property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// we can also set default values
const { menu = [], starterMenu: starters = [] } = restaurant;
//startes exists, so the default value should not apply to it, it will however apply to the menu because it does not exist in our restaurant object
console.log(menu, starters);

// we can also mutate variables while destructuring objects
let gm = 111;
let hm = 999;
const obj = { gm: 23, hm: 7, cm: 14 };
//we cannot use const or let to mutate a and b
// {a, b} = obj; this produces an error because when we start a line like this, javascript expects a codeblock and since we cannot assign anything to a codeblock ,we get the error unexpected token, we solve this issue as shown below
({ gm, hm } = obj);
console.log(gm, hm); //23 7

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); //11 23

// passing in an object of options to a function
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// 5.THE SPREAD OPERATOR
//used to unpack all the array elements at once
const arr2 = [7, 8, 9];
// to create a new array based on this array with some new elements in the beggining, we would have to loop this arr, or even worse, manually fill the new array

//this is how the spread operator helps in this
const newArr = [1, 2, ...arr2];
console.log(newArr); //[1, 2, 7, 8, 9]
// we have just used the spread operator to expand an array
//we can use it to log individual elements of an array
console.log(...arr2); //7 8 9

// creating a new menu with an extra food item
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// copy arrays using the spread operator(shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//joining two or more arrays together
const menuSpread = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuSpread); //['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// the spread operator works on all iterables i.e arrays, strings, maps, sets but not objects
//using the spread operator on a string
const str = 'Dennis';
const letters = [...str, '', 'S.'];
console.log(letters); //['D', 'e', 'n', 'n', 'i', 's', '', 'S.']

// always keep in mind that we can only use the spread operator or when we pass values into functions
console.log(...str); //D e n n i s----indiviual letters

// const ingredients = [
//   prompt("lets's make pasta! Ingredient 1?"),
//   prompt("lets's make pasta! Ingredient 2?"),
//   prompt("lets's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// since es2018, spread operator can also work on objects
const newRestaurant = {
  foundingYear: 1998,
  ...restaurant,
  founder: 'Dennis Zaphenath',
};
console.log(newRestaurant);

//since we were able to do shallow copy of arrays with the spread operator, we can do the same with objecs instead of using object.assign
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Kiri Prime Restaurant';

console.log(restaurantCopy.name, restaurant.name); //Kiri Prime Restaurant Classico Italiano

// 6. REST PATTERN AND PARAMETERS
//looks exactly like the spread operator with the three dots but does the exact opposite of the spread operator
//rest collects multiple elements into an array
//spread is used in the right hand side of the assignment operator / equal sign
const arr3 = [1, 2, ...[3, 4]];
//rest syntax is on the left side of the equal sign
const [el1, el2, ...others] = [1, 2, 3, 4, 5];
console.log(el1, el2, others); //1 2 [3, 4, 5]

// take it as collecting unused elements in the destructuring assignment
//it collects the rest of the unused into an array
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// it is good to put the rest syntax as the last one otherwise js will not know how many limited elements to pick

// rest pattern in objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays); //object only containing friday and thursday

// 2) Functions with the rest
// this add function should take unlimited number of arguements and add them
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
// with the spread syntax we expand from an array into individual values and with the rest syntax we compress into an array like, in the add function, it is called the rest arguments
const w = [23, 5, 7];
add(...w);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); //mushrooms ['onion', 'olives', 'spinach']

// spread and rest look the exact same but work differently depending on where they are used, the spread is used where we would otherwise use values seperated by a comma while rest is used where we could use variable names seperated by commas and not values seperated by commas

// 7.SHORT CIRCUITING(&& and)
// we have been using logical operators only to combine boolean values but they can do more
console.log(3 || 'dennis'); //3 .result of the or operator doesn'thave to be a boolean
//logical operators can use any data type, return data type and perform short circuit evaluation

//for the or operator, if the first value is a truthy value, it returns that value
console.log('' || 'dennis'); //dennis  because "" is  a FALSY VALUE
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello because it is the first truthy value

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10

// instead of doing this, we can take advantage of short circuting and the or operator
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// we can also use the and operator
console.log('=====AND=====');
//and will work the exact opposite way of or
console.log(0 && 'dennis'); //0, this is because the and operator immeadiately short circuits when the first operator is a falsy value
console.log(7 && 'dennis'); //dennis, because if the first value is truthy, then the evaluation continues to the end  and if not falsy value is found then the last thing is returned
console.log('hello' && 23 && null && 'dennis'); //null

// practical sample
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// we can this in a simple way using the and operator
restaurant.orderPizza && restaurant.orderPizza('mushromms 2', 'spinach 2');

// 8.NULLISH COALESCING OPERATOR
//we used the or operator to set value if the first value is a falsy value
//the problem is that if we want to set the value to zero before we evaluate using the or operator, zero will be evaluated as a falsy value.
// the solution is the nullish coalescing operator introduced in es2020

restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //0, because nullish coalescing operators works with nullish values i.e null, undefined, not and empty string among others
//had it been the or operator, 0 is a falsy value and thus it will not be returned

// 9. CODING CHALLENGE 1
// We're building a football betting app (soccer for my American friends 😅)! Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for
// 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// one players array for each team
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// team1 draw team2
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} goals were scored.`);
  for (let i = 0; i < playerNames.length; i++) {
    console.log(playerNames[i]);
  }
};
printGoals('davies', 'muller', 'lewandoski', 'kimich');
printGoals(...game.scored);

// team more likely to win based on the odds variable
//check if team 1 is less than team 2 and if so then it is more likely to win
team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team2 && console.log(`Team 2 is more likely to win`);

// 10.Looping arrays with the for of loop

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
//we have been using the regular for loop, for of loop is much simpler

for (const item of menu2) console.log(item);

// we can also use the continue and break keyword in the for of loop

//what if we wanted the current index?, we use the .entries()
for (const item of menu2.entries()) {
  console.log(item);
}
// what this will do is that with each iteration, it is going to print the element as an array with its index in the parent array and the element itself eg  [0, 'Focaccia'],  [1, 'Bruschetta'] [2, 'Garlic Bread']etc
console.log([...menu2.entries()]);

for (const item of menu2.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`); //the smaller arrays bought about by the entries() method
}

//we can use destructuring actually
for (const [i, el] of menu2.entries()) {
  console.log(`${i[0] + 1}: ${el} from dest`);
}

// 11.ENHANCED OBJECT LITERALS
const dummyObj = {
  objCreator: 'jake',
  objUser: 'krap',
  //we can write methods as shown
  orderDelivery(food1, food2) {
    console.log(`You will be served with ${food1} and ${food2}`);
  },
  // instead of the old
  orderDelivery2: function (food1, food2) {
    console.log(`You will be served with ${food1} and ${food2}`);
  },
  // we can compute property names
  [this.objCreator + this.objUser]:
    'creators of the wonderfull object and the users to',
};

// 12. OPTIONAL CHAINING
console.log(restaurant.openingHours.mon); //mon does not exist and thus the result of this is undefined
// console.log(restaurant.openingHours.mon.open);//throws an error

//we can use an if to check if the property exists and if it does we do what we want and if it doesn't we do something else which is not wrong
//we can however do better using  optional chaining from es2020
//for optional chaining, if a certain property does not exist, then it will return undefined

// with optional chaining
console.log(restaurant.openingHours.mon?.open); //only if mon exists, then the open property will be learnt from there

//we can have multiple optional chainings
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// we want to loop over the arrays and log whether the restaurant is open or closed on these days
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // eg restaurant.openingHours.mon
  console.log(`On ${day}, we open at ${open}`);
}

// METHODS AND OPTIONAL CHAINING
//we can check if a method exists before calling it
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist.');

// OPTIONAL CHAINING ALSO WORKS ON ARRAYS
const users = [{ name: 'dennis', email: 'hello@dennis.io' }];
//to get the first element of this array, we could do
console.log(users[0]?.name ?? 'user array empty'); //prints dennis

// 13. LOOPING OBJECTS OBJECT KEYS, VALUES AND ENTRIES
//we can also loop over object thought they are not iterables but in a different way

//looping over property names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open ${properties.length} days:`;
for (const day of Object.keys(openingHours)) {
  console.log(day);
  openStr += `${day} `;
}
console.log(openStr);

// looping over property values
const values = Object.values(openingHours);
console.log(values);

// looping the entire object
// to loop over the entire object we use the .entries()
//it returns the index number and the element itself

const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  // console.log(x);//gives the key and the value
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

// CODING CHALLENGE 2:
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25  Odd of victory Borrussia Dortmund: 6.5 Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this: {   Gnarby: 1,   Hummels: 1,   Lewandowski: 2 }

// GOOD LUCK 😀

// my soln
// print the goal and who scored it
for (const goal of Object.entries(game.scored)) {
  console.log(`Goal ${goal[0]}: ${goal[1]}.`);
}

// lecs solution
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}.`);
}

// calculate the average odd and log it to the console
let oddSum = 0;
for (const odd of Object.entries(game.odds)) {
  oddSum += odd[1];
}
const elsCount = Object.keys(game.odds).length;
console.log(`The average odd is ${oddSum / elsCount}`);

// printing the odds to the console but in a nice formatted way
for (const obj of Object.entries(game.odds)) {
  const teamName = game[obj[0]] ?? 'draw';
  console.log(`Odds of victory for ${teamName}: ${obj[1]}`);
}

// lecs soln
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}

// 15.SETS
//a set is a collection of unique values i.e a set cannot have duplicates

const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(orderSet); //Set(3) {'pasta', 'pizza', 'risotto'}

// unlike arrays, the order of elements in a set does not matter

// working with sets

console.log(orderSet.size); //3 --returns the unique number of values
console.log(orderSet.has('pizza')); //true ---works like .includes in arrays
console.log(orderSet.has('bread')); //false

orderSet.add('Garlic Bread');
console.log(orderSet); //Set(4) {'pasta', 'pizza', 'risotto', 'Garlic Bread'}

orderSet.delete('risotto');
console.log(orderSet); //Set(3) {'pasta', 'pizza', 'Garlic Bread'}
// orderSet.clear()//deletes all elements of a set

for (const order of orderSet) {
  console.log(order);
}

// in major codebases, the main use case of sets is to remove duplicates in an array
const staff = ['waiter', 'chef', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); //['waiter', 'chef', 'manager']

// 16. MAP FUNDAMENTALS

// it is a data structure used to map values to keys like objects, the only difference is that in maps, the keys can take any data type
const rest = new Map(); //creating a map
rest.set('name', 'Classico Italiano'); //filling a map
rest.set(1, 'Firenze Italy'); //filling a map
rest.set(2, 'Lisbon portugal'); //filling a map
// set method can be chained
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');

//to read data from a map we use the get  method
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// we can check if a map contains a certain key
console.log(rest.has('categories')); //true
rest.delete(2); //deletes key 2
console.log(rest.size); //7. number of elements in the map
// rest.clear(); //removes all the elements of the set

// we can also use arrays as map keys (objects can be used as map keys)
rest.set([1, 2], 'Test');
// we can also set document elements as a member of a set
rest.set(document.querySelector('h1'), 'Heading');

// 17. MAPS  ITERATION
//we can populate a map without using the set method
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);
// convert objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// iterating the map
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('your answer'));
const answer = 3;
if (answer === question.get('correct')) console.log(question.get(true));
else console.log(question.get(false));
// console.log(question.get(answer));

// sometimes we want to convert a map into an arrray
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

// 18.WHICH DATA STRUCTURE TO WORK WITH
// sources of data:
//program itsef: data directly in source code
//from the ui eg forms
//from external sources apis and more

// simple list of values, use an array or set
// key value pairs, use objects or maps

// you should use arrays whenever you need ordered list and or you need to manipulate data
//use sets when you need to work with unique values, when high performance is important and when you want to remove duplicates

//objects have been traditional way of storing key value pairs, maps can be used in cases of better performance, where we want keys of any data types, they are easy to iterate and easy to compute size

// CODING CHALLENGE 3
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: 
// [FIRST HALF] 17:⚽GOAL

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
// an array called events that contains different game events that happened and no duplicates
const events = [...new Set(gameEvents.values())];
console.log(events);
//remove the yellow card from minute 64
gameEvents.delete(64)
console.log(gameEvents);
//compute the average frequency of the events happening,
const averageFrq = 90/gameEvents.size;
console.log(`An event happened on average every ${averageFrq} minutes.`);

for(const [eventTime, event] of gameEvents){
  console.log(eventTime <= 45 ? `[FIRST HALF] ${eventTime}:${event}`: `[SECOND HALF] ${eventTime}:${event}`);
}
