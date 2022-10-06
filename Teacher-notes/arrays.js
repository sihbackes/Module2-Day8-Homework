console.log("\n------------------------ARRAYS-------------------------");

// Arrays are COLLECTIONS of elements (numbers, booleans, strings, objects, arrays)

const arrayOfAnimals = [
  "Dog",
  "Cat",
  "Fish",
  "Bunny",
  "Duck",
  "Bird",
  "Capybara",
  "Horse",
];
console.log(arrayOfAnimals);

const arrayOfMultiplesOf5 = [5, 10, 15, 20, 25, 30];
console.log(arrayOfMultiplesOf5);
const arrayOfBooleans = [true, false, false, false, true];
console.log(arrayOfBooleans);

// Even if this is allowed, PLEASE AVOID MIXING DIFFERENT DATA TYPES inside of a single array
const mixedArray = [54, "Gorilla", -123, false, {}]; // pretty bad, don't mix the types of the elements !!!
console.log(mixedArray);

console.log(
  "\n------------------------LENGTH OF AN ARRAY-------------------------"
);
console.log("Our array of animals has " + arrayOfAnimals.length + " animals");

console.log(
  "\n------------------------ACCESSING THE CONTENT OF AN ARRAY-------------------------"
);

const smallNumbers = [5, 7, 8, 10, 2, 0, 32]; // Zero-based indexing
//           index =  0  1  2   3  4  5  6

const lastIndexOfSmallNumbers = smallNumbers.length - 1;
console.log(smallNumbers[lastIndexOfSmallNumbers]); // always get the last element dynamically
// console.log(arrayOfAnimals[5]);

console.log(
  "\n------------------------CONCATENATING ARRAYS-------------------------"
);
const union = arrayOfMultiplesOf5.concat(smallNumbers);

console.log(union);

console.log(
  "\n------------------------PUSH A NEW ITEM INTO AN ARRAY-------------------------"
);
union.push(111); // this adds at the end of the array
union.unshift(50); // this adds at the beginning of the array
console.log(union);

console.log(
  "\n------------------------REMOVING AN ITEM FROM AN ARRAY-------------------------"
);

const removedAnimal = arrayOfAnimals.pop(); // removing one element from the last position
console.log(arrayOfAnimals);
console.log(removedAnimal);
arrayOfAnimals.pop(); // removing a second element from the last position
console.log(arrayOfAnimals);
arrayOfAnimals.shift();
console.log(arrayOfAnimals);

console.log(
  "\n------------------------REMOVING AN ITEM FROM A SPECIFIC POSITION OF AN ARRAY-------------------------"
);

console.log(union);
// We wanted to remove 1 element from the position 5 which is the index: 4
const deletedElems = union.splice(4, 1); // the variable deletedElems will store the deleted elements in a new array for you
console.log(union);
console.log(deletedElems);

console.log(
  "\n------------------------GETTING A SUBSET OF AN ARRAY-------------------------"
);

const copiedUnion = union.slice();
copiedUnion.pop();
console.log(copiedUnion);
console.log(union);

console.log(
  "\n------------------------GETTING THE INDEX VALUE OF AN ELEMENT OF AN ARRAY-------------------------"
);

console.log(arrayOfAnimals);
const indexOfBunny = arrayOfAnimals.indexOf("Bunny");
console.log(indexOfBunny);

// substituting Bunny for rabbit with the splice method again
arrayOfAnimals.splice(indexOfBunny, 1, "Rabbit");
console.log(arrayOfAnimals);
