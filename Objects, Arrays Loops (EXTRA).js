// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
console.log("\n------------------------EXERCISE 1-------------------------");

const myArray = [1, 2, 3, 4];
myArray.reverse();
console.log(myArray);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log("\n------------------------EXERCISE 2-------------------------");

const myArray2 = [2, 9, 4, 3];
var maxValue = Math.max(...myArray2);
console.log(maxValue);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("\n------------------------EXERCISE 3-------------------------");

var minimumValue = Math.min(...myArray2);
console.log(minimumValue);
/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("\n------------------------EXERCISE 4-------------------------");

const myArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = [];
for (let i = 1; i < myArray3.length; i++) {
  if (i % 2 === 0) {
    even.push(i);
  }
}
console.log(even);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("\n------------------------EXERCISE 5-------------------------");

let onlyOdds = [];
for (let i = 0; i < myArray3.length; i++) {
  if (i % 2 !== 0) {
    onlyOdds.push(i);
  }
}
console.log(onlyOdds);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

console.log("\n------------------------EXERCISE 6-------------------------");

let string = "operator";
let stringArray = string.replace(/[aeiou]/gi, " ");
console.log(stringArray);

/*To remove the vowels from a string, call the replace() method with the following regular 
expression - /[aeiou]/gi, e.g. str.replace(/[aeiou]/gi, ''). 
The replace() method will return a new string where any vowel in the original string is 
replaced with an empty string.*/

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

console.log("\n------------------------EXERCISE 7-------------------------");
myArray3.forEach((num, index) => {
  myArray3[index] = num + 1;
});

console.log(myArray3);

/*Use the forEach() method to increment the values in an array. 
The forEach method takes a function which gets called for each element 
in the array. On each iteration, increment the element at the specific index by 1.*/

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

console.log("\n------------------------EXERCISE 8-------------------------");

let myArray4 = ["strive", "is", "great"];
let arrayLength = [];

for (let i = 0; i < myArray4.length; i++) {
  //Index starts at zero, when the index is smaller than the size of the array, the index increases by 1
  arrayLength.push(myArray4[i].length); //arrayLength.push and the command to insert items into the empty array I created.
} //(myArray4[i].length) will access the size of position 0 of myArray4 and bring the length, and will be push to the arrayLength, than position 1, than position 2

console.log(arrayLength);
