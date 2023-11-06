const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  car: {
    year: 2015,
    color: "Red",
  },
};

//DOT NOTAITON

person.dog = { name: "Fluffy", age: 2 };
person.age = 25;
console.log(person.dog.name);

//SQUARE BRACKET NOTATION
const property = "age";
console.log(person[property]);

//obejects methods
const myObj = {
  name: "Flurffy",
  myMethod: () => {
    console.log("Hello from myMethod");
  },
  myMethod: function () {
    console.log("Hello from myMethod");
  },
  myMethod() {
    console.log("Hello from myMethod");
  },
};

console.log(myObj.myMethod());

//Object.assign() copies the values of all enumerable own properties from one or more source objects to a target object
const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

// Object.keys() creates an array containing the keys of an object
console.log(Object.keys(employees));

// Object.values() creates an array containing the values of an object
console.log(Object.values(employees));

// Object.entries() creates a nested array of  the key/value pairs of an object
console.log(Object.entries(employees));
// Object.freeze() prevents modification of existing properties and prevents properties from being added or removed
console.log(Object.freeze(employees));

// Object.seal() prevents new properties from being added
console.log(Object.seal(employees));
