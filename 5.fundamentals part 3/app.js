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
