/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log("\n------------------------EXERCISE 1-------------------------");
const numbers = [1, 2, 3, 5];

console.log(numbers);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

console.log("\n------------------------EXERCISE 2-------------------------");

const personalData = {
  name: "Simone",
  surname: "Backes",
  emailAdress: "simonebackesv@gmail.com",
  age: 31,
};

console.log(personalData);
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("\n------------------------EXERCISE 3-------------------------");

personalData.hasDriverLicense = true;

console.log(personalData);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

console.log("\n------------------------EXERCISE 4-------------------------");

delete personalData.age;
console.log(personalData);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log("\n------------------------EXERCISE 5-------------------------");

const personalData2 = Object.assign({}, personalData);
personalData2.emailAdress = "anyemail@gmail.com";
console.log(personalData2);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n------------------------EXERCISE 6-------------------------");

totalShoppingCart = 60;
if (totalShoppingCart < 50) {
  finalTotal = totalShoppingCart + 10;
  console.log(`Amount to pay plus shipping is £${finalTotal}`);
} else if (totalShoppingCart > 50) {
  console.log(`Amount to pay with free shipping is £${totalShoppingCart}`);
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("\n------------------------EXERCISE 7-------------------------");

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("\n------------------------EXERCISE 8-------------------------");

const cars = {
  brand: "Fiat",
  model: "Uno",
  licensePlate: "XD-3868",
};

const cars2 = Object.assign({}, cars);
const cars3 = Object.assign({}, cars);
const cars4 = Object.assign({}, cars);
const cars5 = Object.assign({}, cars);
const cars6 = Object.assign({}, cars);

cars2.licensePlate = "HD-7854";
cars3.licensePlate = "GJ-1359";
cars4.licensePlate = "MC-4091";
cars5.licensePlate = "LS-2371";
cars6.licensePlate = "SM-0511";

console.log(cars);
console.log(cars2);
console.log(cars3);
console.log(cars4);
console.log(cars5);
console.log(cars6);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

console.log("\n------------------------EXERCISE 9-------------------------");

const carsForRent = [];
carsForRent.push(cars);
carsForRent.push(cars2);
carsForRent.push(cars3);
carsForRent.push(cars4);
carsForRent.push(cars5);
carsForRent.push(cars6);

console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n------------------------EXERCISE 10-------------------------");

carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("\n------------------------EXERCISE 11-------------------------");

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
console.log("\n------------------------EXERCISE 12-------------------------");

const carsForSale = [];

const cars7 = {
  brand: "Honda",
  model: "Civic",
  licensePlate: "XG-3098",
};

const cars8 = {
  brand: "Ford",
  model: "Fiesta",
  licensePlate: "LL-5668",
};

const cars9 = {
  brand: "Vokswagen",
  model: "Polo",
  licensePlate: "PD-3086",
};

carsForSale.push(cars7);
carsForSale.push(cars8);
carsForSale.push(cars9);

console.log(carsForSale);

const totalCars = carsForSale.concat(carsForRent);
console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("\n------------------------EXERCISE 13-------------------------");

for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}
