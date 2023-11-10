//THe "new" keyword

//It creates a new empty object {}
const myDate = new Date();
console.log(myDate);

//The this keyword
//It points to the current object
function Sentence(words) {
  this.words = words;
  console.log(this.words);
}

const sentence = new Sentence("This is a sentence");

const person = {
  name: "John",
  getName() {
    console.log(this);
  },
};

person.getName();

function Car(color, brand, wheels) {
  this.color = color;
  this.brand = brand;
  this.wheels = wheels;

  console.log(this);
}

const blueCar = new Car("blue", "Ford", 4);
const redCar = new Car("red", "BMW", 4);

// class is a schema for an object that can save many values

class Person {
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
  }
}

const user = new Person("Melissa", 25, true);
console.log(user);

//without class
const createPerson = (name, age, isWorking) => {
  return {
    name,
    age,
    isWorking,
  };
};

const user2 = createPerson("Melissa", 25, true);
console.log(user2);
