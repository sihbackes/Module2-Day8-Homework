// console.log("Number 1");
// console.log("Number 2");
// console.log("Number 3");
// console.log("Number 4");
// console.log("Number 5");
// You see that if we want to count to 1000 it becomes pretty cumbersome

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

// we want to automate the process of accessing each individual element of an array, and for loops are perfect for that!

// console.log(arrayOfAnimals[0]);
// console.log(arrayOfAnimals[1]);
// console.log(arrayOfAnimals[2]);
// console.log(arrayOfAnimals[3]);
// console.log(arrayOfAnimals[4]);
// console.log(arrayOfAnimals[5]);
// console.log(arrayOfAnimals[6]);
// console.log(arrayOfAnimals[7]);
// console.log(arrayOfAnimals[8]);
// console.log(arrayOfAnimals[9]);
// console.log(arrayOfAnimals[10]);

for (let i = 0; i < arrayOfAnimals.length; i++) {
  console.log(i);
  console.log(arrayOfAnimals[i]);
}

// for (let i = 1; i <= 100; i++) {
//   console.log("Number " + i);
// }

const newArr = [];

for (let i = 1; i <= 30; i++) {
  newArr.push(i);
}

console.log(newArr);

const arrOfOrders = [
  {
    id: "91822138",
    product: "Wireless Keyboard",
    brand: "logitech",
    quantity: 10,
  },
  {
    id: "918221123123",
    product: "Wireless Mouse",
    brand: "logitech",
    quantity: 2,
  },
  { id: "9182asd2123138", product: "HD Webcam", brand: "trust", quantity: 5 },
  { id: "918221zxczx38", product: "HD Display", brand: "trust", quantity: 50 },
];

console.log(arrOfOrders);

let total = 0;

for (let i = 0; i < arrOfOrders.length; i++) {
  const order = arrOfOrders[i];
  console.log("ORDER: " + (i + 1), order.product, order.quantity);

  //   total = total + order.quantity;
  total += order.quantity;
}

console.log("YOUR INVENTORY CONTAINS: " + total + " ITEMS");

// There are also other kinds of loops that we might look at in the future like:
// while loops
// There is also a do -- while
// There is also for applied to lists (for of)
// and others that we'll see eventually :)
