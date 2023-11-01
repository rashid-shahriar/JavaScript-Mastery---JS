const names = ["Jon", "Bob", "David", "Mark"];

// Array Push - Adds a new value to the end of the array.
// names.push('Dean');

// Array Pop - Deletes the last element of an array
// names.pop();

// Array Shift - Deletes the first element of an array
// names.shift();

// Array Unshift - Adds a new value to the start of an array
// names.unshift('Dean');

// Array Splice - It adds/removes values from any position of an array
// names.splice(2, 2);

// Array Slice - Copies certain parts of an array into a newely created array
// const noOneLikesJon = names.slice(1);

//Array For each index

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i], i);
// }

// names.forEach((name, index) => {
//   console.log(name, index); //names[index]
// });

// names.forEach((name, index) => {
//   console.log(name, index);
// });

// let sum = 0;
// const numbers = [65, 44, 12, 4];

// numbers.forEach((number) => {
//   sum += number;
// });

// console.log(sum); // 125

//Array Map
// A local shop's inventory
// const inventory = [
//   { price: 5, name: "eggs" },
//   { price: 5, name: "ham" },
//   { price: 5, name: "mayo" },
//   { price: 5, name: "bread" },
// ];

// const price = inventory.map((item) => {
//   return item.price;
// });
// const items = inventory.map((item) => {
//   return item.name;
// });

// console.log(price);
// console.log(items);

//Array Filter
// Filter method for Arrays
// const numbers = [-10, 0, -2, 15, -36, 25]; // Array of postitive and negative numbers

// const positiveNumbers = numbers.filter((number) => number >= 0);

// console.log(positiveNumbers);

// Second Example

// A start up wants to reward the employees with 7 or more hours of overtime
// var employeesData = [
//   {
//     name: "Sebastian",
//     overtime: 5,
//   },
//   {
//     name: "Cardi Vee",
//     overtime: 10,
//   },
//   {
//     name: "George Lopez",
//     overtime: 12,
//   },
// ];

// //JSM Solution

// const employeesToReward = employeesData.filter(
//   (employee) => employee.overtime >= 7
// );
// const employeesNames = employeesToReward.map((employee) => employee.name);
// employeesNames.forEach((name) => console.log(`${name} receives a reward!`));

//My solution

// const employeesToRewardName = [];

// const employeesToReward = employeesData.filter((employee) => {
//   if (employee.overtime >= 7) {
//     return employeesToRewardName.push(employee.name);
//   }
// });

// console.log(employeesToRewardName)

//array find

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const value = numbers.find((number) => number > 5); // 6
// console.log(value);

// const states = ["Alaska", "Califonia", "Colorado", "Hawaii"];

// const stateName = states.find((state) => state.slice(0, 1) === "C"); //or we can use startwith method
// const anotherSolution = states.find((state) => state.startsWith("C"));
// console.log(stateName);
// console.log(anotherSolution);

//Array includes
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));

// var bookshelf = [
//   "Moby Dick",
//   "Little Women",
//   "The Great Gatsby",
//   "Pride And Prejudice",
// ];

// if (bookshelf.includes("Moby Dick") === true) {
//   console.log("the book you were looking for was found");
// } else {
//   console.log("couldn't find the book, sorry. :c");
// }

//Array Sort

// var namesSort = ["Anne", "Carl", "Bob", "Dean"];

// namesSort.sort();
// console.log(namesSort);

//Array some  and array every

// const array = [1, 2, 3, 4, 5];

// console.log(array.some((el) => el > 3));
// console.log(array.every((el) => el > 3));

//Array reduce

const groceryList = [29, 12, 45, 35, 87, 110];

//add all number using for each
// let total = 0;

// groceryList.forEach((price) => (total += price));

// console.log(total);

//lets use reduce method to
// const groceryItems = [29, 12, 45, 35, 87, 110];

// const total = groceryItems.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(total);

//simple example

const numbers = [1, 2, 3, 4, 5];

numbers.reduce((accumulator, val) => {
  return accumulator + val;
}, 0);

//how this works acctually
//acc = 0 , val = 1 => 0 +1 ===1;
//acc = 1 , val = 2 => 1 +2 ===3;
//acc = 3 , val = 3 => 3 +3 ===6;
