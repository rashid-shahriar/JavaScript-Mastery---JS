//Global Scope
// const name = "John Doe";

//function scope or local scope

// const someFunction = () => {
//   //Local scope #1
//   const name = "John";

//   console.log(name);

//   const anotherFunction = () => {
//     //Local scope #2
//     console.log(name);
//   };

//   anotherFunction();
// };

// someFunction();

//Block Scope

// if (true) {
//   //Block scope
//   const name = "John";
//   console.log(name);
// }

// Hoisting in JavaScript

// var hoist;

// console.log(hoist); // undefined

// hoist = "The variable has been hoisted.";

// Closures in JavaScript
const outer = () => {
  const outerVar = "Hello!";

  const inner = () => {
    const innerVar = "Hi!";

    console.log(innerVar, outerVar);
  };

  return inner;
};

const innerFn = outer(); // closure, because we have access to the variables of the parent scope

innerFn();
