const a = 13;
const b = 12;

//resutl
let result = 0;

//addition
result = a + b;

//subtraction
result = a - b;

//exponentiation
result = a ** b;

//modulo
result = a % b;

// we can test whether a value is greater than the other value
console.log(a > b);
// we can also test whether a value is greater than or equal to the other value
console.log(a >= b);
// looks like I have a font installed so for me, it's going to look like one sign,
// but it's two. The greater than sign, and then immidiately the equality sign.

// we can test whether a value is less than the other value
console.log(a < b);
// we can also test whether a value is less than or equal to the other value
console.log(a <= b);

// finally, we have the equality operators,
// we can test whether a value is equal
console.log(a == b);
// we also test whether a value is not equal
console.log(a != b);

// what you're going to see more often are going to be the strict equality
// and strict inequality operators. They look like this.

// strict equal, strict not equal
console.log(a === b);
console.log(a !== b);

//learn more about loose equality and strict equality
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

console.log("This is a string." === "This is a string."); // true
console.log(2 === 2); // true

console.log(5 == "5"); // true
console.log(20 === "20"); // false

"" == "0"; // false
0 == ""; // true
0 == "0"; // true

false == "false"; // false
false == "0"; // true

false == undefined; // false
false == null; // false
null == undefined; // true

//Logical operators
console.log(true && false); // false
console.log(true && true); // true
console.log(false && false); // false

console.log(true || false); // true
console.log(true || true); // true
console.log(false || false); // false

console.log(true || true || false); // true

console.log(!true); // false
console.log(!false); // true

//assignemt operators
let x = 10;
x += 5;
console.log(x); // 15

let string = "Hello"; // here equal is the assignment operator

string += ", I am John."; // here equal is the assignment operator

console.log(string);
