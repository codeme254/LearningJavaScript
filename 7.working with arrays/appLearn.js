// Arrays are also objects, and these array methods are simply functions we can attach to all objects
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice methods is used to extract  a part of the array without modifying the original array, returns a new array
let sliceArr = arr.slice(2);
console.log(sliceArr); //c d e
// we can also define the end parameter but it will not be included in the output
console.log(arr.slice(2, 4)); //[ 'c', 'd' 
// 2, 4 is basically 2 and 3
// we can also specify a negative parameter and then it will begin copying from the end
console.log(arr.slice(-2)); //[ 'd', 'e' ]
// -n will get the last n elements.
console.log(arr.slice(1, -2)); //starts extracting from position 1 and extracts all the elements from index 1 except the last two elements
// we can also use the slice method to create a shallow copy of any array
console.log(arr.slice()); //produces the exact same array, same as using the spread operator to create a new copy of the array
console.log([...arr]);

// SPLICE METHOD. works similar to slice method but the fundamental difference is that it changes the original array
console.log(arr.splice(2)); //[ 'c', 'd', 'e' ]
console.log(arr) //[ 'a', 'b' ] ==mutated original array
// we majorly use splice method to remove the last element of an array

// if we specify a second parameter in splice, then it is the delete count (number of items to delete)
let arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.splice(1, 2)); //[ 'b', 'c' ], this meant, from index number 1, extract 2 elements

// REVERSE
arr2 = ['a', 'b', 'c', 'd', 'e'];
const arr3 = ['j', 'i', 'h', 'g', 'f']
console.log(arr3.reverse()); //returns the reversed array [ 'f', 'g', 'h', 'i', 'j' ]

// the reverse method mutates the original array

// CONCAT
const letters = arr2.concat(arr3)
console.log(letters);//concatenates the letters
console.log(...arr2, ...arr3);

// JOIN
console.log(letters.join('-')); //returns a string with a seperator that we specified  a-b-c-d-e-f-g-h-i-j

// LOOPING ARRYS USING THE forEach method
// positive values are the deposits and the negative values are the withdrawals
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

for(const movement of movements){
    movement > 0 ? console.log(`You deposited ${movement}`) : console.log(`You withdrew ${Math.abs(movement)}`);
}
console.log('\n\n\n')
console.log('-----FOR EACH-----');
// we can use the forEach method to loop, it takes a callback function which takes the current element as the callback, it is  high order function
movements.forEach(function(movement){
    movement > 0 ? console.log(`You deposited ${movement}`) : console.log(`You withdrew ${Math.abs(movement)}`);
})
// what if we wanted the current index?
for (const [i, movement] of movements.entries()){
    movement > 0 ? console.log(`Movement ${i+1}: You deposited ${movement}`) : console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
}

// forEach also passes in the current element, the index and the current array that we are loopin
console.log('\n\n\n---using forEach with index---');
movements.forEach(function(movement, i, arr){
    movement > 0 ? console.log(`Movement ${i+1}: You deposited ${movement}`) : console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
})

// the continue and break statements cannot work in the forEach and therefore, if you want to use the two keywords, opt for the for of loop.

// forEach with maps and sets

// with a map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
// Each array element is an element of the set wher the first element is the key and the second element is the value
// the callback function also takes three paramters, the current value, the key and the entire map that is being looped over
currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
})

// with a set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
currenciesUnique.forEach(function(value, key, set){
    console.log(`${key} : ${value}`);
})

