console.log(
  "\n------------------------CREATING AN OBJECT-------------------------"
);

// KEY-VALUE pairs
const student = {
  firstName: "Gordon", // String
  lastName: "Freeman", // String
  age: 38, // Number
  batchName: "FS0422INT", // String
  hasWebcam: true, // Boolean
};

console.log("STUDENT --->", student);

console.log(
  "\n------------------------READING OBJECTS PROPERTIES-------------------------"
);

// DOT NOTATION to access object's properties
const fullName = student.firstName + " " + student.lastName;

console.log("Full name of the student is: ", fullName);

console.log(
  "\n------------------------ADDING NEW PROPERTIES-------------------------"
);

student.location = "Italy";
student.propertyToBeRemoved = null;
student.hasDrivingLicense = false;

console.log(student);

console.log(
  "\n------------------------CHANGE EXISTING PROPERTIES-------------------------"
);

student.hasWebcam = false;

console.log(
  "\n------------------------REMOVING PROPERTIES-------------------------"
);

delete student.propertyToBeRemoved;
console.log(student);

console.log(
  "\n------------------------ALTERNATIVE WAY TO ACCESS PROPERTIES OF AN OBJECT-------------------------"
);
// THIS IS A SLIGHTLY MORE COMPLEX ALTERNATIVE, BUT MORE POWERFUL
// It's not something you will be using a lot in the beginning, but it will come very much in handy in the future

const propertyName = "batchName";

console.log("BATCH NAME:", student.propertyName); // student.propertyName // console.log("BATCH NAME:", undefined) // not going to work
console.log("BATCH NAME:", student[propertyName]); // student["batchName"] // console.log("BATCH NAME:", "FS0422INT") // dynamically evaluating the property name

console.log(
  "\n------------------ADD PROPERTIES OF AN OBJECT CONDITIONALLY----------------------"
);

// taking a student of 18 years old, we would like to switch the value of the property "hasDrivingLicense" to true, but if he/she is underaged we want to
// add a new property called "hasScooterLicense"

// Based on the student's age, we want to dynamically create a property in the object for the appropriate license he/she might have
student.age = 19;
const newProperty =
  student.age >= 18 ? "hasDrivingLicense" : "hasScooterLicense";
console.log(newProperty);

student[newProperty] = true; // student["hasScooterLicense"] = true
console.log(student);

console.log(
  "\n------------------USING AN OBJECT AS DICTIONARY----------------------"
);
// THIS IS A SLIGHTLY MORE COMPLEX ALTERNATIVE, BUT MORE POWERFUL
// It's not something you will be using a lot in the beginning, but it will come very much in handy in the future

const fruitDictionary = {
  apple: "loved by Snow White, scares doctors away",
  banana: "long yellow fruit, loved by monkeys",
  coconut: "hard round fruit spotted on tropical islands",
};

let fruitThatTheUserWantsToKnowAbout = "coconut";

const definition = fruitDictionary[fruitThatTheUserWantsToKnowAbout];

if (definition !== undefined) {
  console.log(
    `Definition for ${fruitThatTheUserWantsToKnowAbout}: ${definition}`
  );
} else {
  console.log(
    `Definition for ${fruitThatTheUserWantsToKnowAbout} is unavailable, please try another fruit`
  );
}

console.log(
  "\n------------------CLONING OBJECTS (the wrong way) ----------------------"
);

const student2 = student; // This way, we are just copying the LINK/reference/pointer/address of the initial student object
student2.firstName = "Morgan";
// BOTH variables (student and student2) will SHARE the same EXACT object
// by changing ANY property, BOTH variables will be affected because they refer to the same entity (object)

delete student2.location;

console.log("STUDENT1: ", student);
console.log("STUDENT2: ", student2);

console.log(
  "\n------------------CLONING OBJECTS (the correct way) ----------------------"
);

const student3 = Object.assign({}, student);
// With this, we actually CREATED A NEW OBJECT, which is a SHALLOW COPY
// we've COPIED EVERY SINGLE PROPERTY NAME AND VALUE from the old object to the new one, BUT only for the first level
// we now have TWO DIFFERENT main objects, so chaning the first level values on one of them
// will NOT affect the other

student3.firstName = "John";
student3.hasWebcam = true;
console.log("STUDENT3: ", student3);

console.log(student === student2); // true, they are the same entity - pretty bad, avoid that!
console.log(student === student3); // false, they are different references, the ideal condition to have!

console.log(
  "\n------------------NESTING AN OBJECT INSIDE ANOTHER OBJECT----------------------"
);

student3.address = {
  street: "Random boulevard",
  city: "Berlin",
  country: "Germany",
};
// the nested object will need to be CLONED as well

const person = {
  species: "human",
  eyes: 2,
};

const student4 = Object.assign(
  {},
  student3,
  { planet: "Earth", species: "Martian" },
  person
);

student4.address = {};
Object.assign(student4.address, student3.address);

student4.firstName = "Stefano";
student4.address.street = "Another St.";

console.log("STUDENT3: ", student3);
console.log("STUDENT4: ", student4);
