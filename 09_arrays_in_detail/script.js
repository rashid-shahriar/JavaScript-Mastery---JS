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
const inventory = [
  { price: 5, name: "eggs" },
  { price: 5, name: "ham" },
  { price: 5, name: "mayo" },
  { price: 5, name: "bread" },
];

const price = inventory.map((item) => {
  return item.price;
});
const items = inventory.map((item) => {
  return item.name;
});

console.log(price);
console.log(items);
