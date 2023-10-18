// const age = 18;

// if (age > 18) {
//   console.log("You are an adult");
// } else if (age === 18) {
//   console.log("You are a minor");
// } else {
//   console.log("You are a kid");
// }

// truth and falsy values
if (-1) {
  console.log("true");
}
if (0) {
  console.log("true");
}

//Falsy values example (total 6)

//1 - False
//2 - 0
//3 - ""
//4 - null
//5 - undefined
//6 - NaN

//Logical operator part 2

// const age = 19;
// const isCool = true;

// if (isCool && age > 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You can not enter");
// }

// console.log(isCool && age > 18);
// console.log("truthy" || 0 || "test" || 999);

// alert(!!"truthy"); // true
// alert(!!null); // false

const superHero = "Captain America";

switch (superHero) {
  case "Iron Man":
    console.log("I am Iron Man...");
    break;
  case "Thor":
    console.log("That is my hammer!");
    break;
  case "Captain America":
    console.log("Nerver give up. ");
    break;
  case "Black Widow":
    console.log("One shot, one kill.");
    break;
  default:
    console.log("Enter a valid superhero name");
    break;
}
