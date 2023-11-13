//ECMAScript 6 OR simply ES6

// let and const
// Arrow functions
// Default parameters
// Rest and Spread operators
// Template Literals

//Imports and exports
import { dogs, woof, number } from "./dogs.js";
import onlyOneThing from "./test.js";

console.log(dogs);
console.log(number);

woof(dogs[0]);

console.log(onlyOneThing);

//Rest and Spread operators

const add = (...args) => {
  return args.reduce((a, b) => a + b);
};

console.log(add(1, 2, 3, 4, 5));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = [...numbers, 6];

console.log(...numbers);

//object and array destructuring

const person = {
  firstName: "Gary",
  lastName: "Vee",
  car: {
    color: "red",
    wheels: 4,
  },
  animals: {
    dog: {
      name: "Fluffy",
      age: 3,
    },
    cat: {
      name: "Kitty",
      age: 3,
    },
  },
};

// Destructuring
const {
  firstName,
  lastName,
  car: { color, wheels },
  animals: { cat, dog },
} = person;

//array destructuring
const introduction = ["Hello", "I", "am", "Sarah"];

const [greeting, , , name] = introduction;
console.log(greeting, name);
