// const name = "John";

// name.length; // 4
// name[0]; // j;
// name[name.length - 1]; // n
// console.log(name[name.length - 1]); // n

// const mixedCaseString = "Hello! How are you, James?";

// mixedCaseString.toLowerCase();
// mixedCaseString.toUpperCase();

// searching for a substring

const exampleString = "I love ducks, he said, ducks are great!";

//index of
const index = exampleString.indexOf("ducks"); // 7
console.log(index);

exampleString.includes("ducks"); // true

exampleString.startsWith("I"); // true
exampleString.endsWith("ducks"); // false

//Getting a sub string

const subString = exampleString.slice(7, 12); // ducks
console.log(subString);

//split a string
const splitString = "dog";
console.log(splitString.split("")); // ["d", "o", "g"]

//reversing a string
const reverseString = "Hello";
console.log(reverseString.split("").reverse().join("")); // olleH

//trim a string
const trimString = "   Hello   ";
console.log(trimString.trim()); // Hello

//exercise
const guestList = "Our guests are: emma, jacob, isabella, ethan";
const length = guestList.length;
const uppercasedGuestList = guestList.toUpperCase();
const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");
const substringGuests = uppercasedGuestList.slice(16);
const guests = substringGuests.split(",");

console.log(length);
console.log(uppercasedGuestList);
console.log(isEthanOnTheList);
console.log(substringGuests);
console.log(guests);
