// const person = { firstname: "John", lastname: "Snow" }; //suppose this store in a memory location 0x001
// const anotherPerson = person; //copy the memory location 0x001

// //person and other person point to the same memory location
// person.firstname = "Arya"; //change the value of firstname in memory location 0x001
// console.log(person); //console
// console.log(anotherPerson); //console

// const person = { name: "Jon" }; //copy the memory location 0x001
// const anotherPerson = { name: "Jon" }; //copy the memory location 0x002

// console.log(person === anotherPerson); //false

//Cloning arrays
//1st way: Spread Operator

// const numbers = [1, 2, 3, 4, 5];
// console.log(...numbers); // 1, 2, 3, 4, 5
// const newNumbers = [...numbers];
// console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]

// const copiedNumbers = numbers;

// console.log(numbers === copiedNumbers); // true
// console.log(numbers === newNumbers); // false

// //2nd way: Array.slice()
// const sliceNumbers = numbers.slice();
// console.log(sliceNumbers); // [ 1, 2, 3, 4, 5 ]

// //clonning objects

// const person = {
//   name: "Jon",
//   age: 20,
// };

// const otherPerson = { ...person };
// otherPerson.age = 21;

// console.log(person); // unchanged
// console.log(otherPerson); // changed

// //2nd way: Object.assign()
// var A1 = { a: "2" };
// var A2 = Object.assign({}, A1);

//Deep clone

const person = {
  firstName: "Emma",
  car: {
    brand: "BMW",
    color: "blue",
    wheels: 4,
  },
};

// //for second level: Object but we can not keep going like this thats why we need to use deep clone
// const newPerson = { ...person, car: { ...person.car } };
// newPerson.car.color = "red";

// newPerson.firstName = "Mia";
// console.log(person); // unchanged
// console.log(newPerson); // changed

// const stringifiedPerson = JSON.stringify(person);
// const newPerson = JSON.parse(stringifiedPerson);

// console.log(stringifiedPerson);

//on line
const newPerson = JSON.parse(JSON.stringify(person));
console.log(newPerson);
