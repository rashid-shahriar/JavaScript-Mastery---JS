// function square(number) {
//   return number * number;
// }

// const result = square(5);
// console.log(result);

//A function declaration

// function name(params) {
//   //statements
// }

// //A function expression

// const name = function (params) {
//   //statements
// };

// //An arrow function

// const name = (params) => {
//   staments;
// };

// function sayHi(name) {
//   console.log(`Hi, ${name}`);
// }
// sayHi("Joe"); // Joe

// function add(a, b) {
//   return a + b;
// }

// const sum = add(2, 2);
// console.log(sum); // 3

// same functionalty with arrow function

// const add = (a, b) => {
//   return a + b;
// };

// const sum = add(12, 2);
// console.log(sum);

const sayHi = (firstName) => {
  console.log(`Hi, ${firstName}`);
};

sayHi("Joe"); // Hi Joe

const logAge = (name, age) => {
  console.log(`${firstName} is ${age} years old.`);
};

logAge("Joe", 25); // Joe is 25 years old.
