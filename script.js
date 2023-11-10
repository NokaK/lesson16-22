console.log("text");

let a = "5";
var b = 10;
const c = 15;

a = 6;

let name = "Jane";
let age = 25;
let isMarried = false;
let phone = 6098789877;

let person = {
  name: "Jane",
  age: 25,
  isMarried: false,
  phone: 6098789877,
};

// console.log("My name is " + person.name);
// console.log(`My name is  ${person.name}`);

let user = {
  name: "John",
  age: 25,
  isMarried: false,
  phone: 6098789877,
  university: "Princeton",
  course: "Computer Science",
  year: 2021,
  isGraduated: false,
  address: {
    city: {
      name: "New York",
      zipCode: 10005,
    },
    street: "Wall Street",
    zipCode: 10005,
  },
};

const types = "address"; //  location , family
// console.log(student.address.city.name);
// console.log(student[types].city);

let info = [1, 2, "Giorgi", 4, true, 6, false, 8, "9"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let color1 = "red";
let colors = [color1, "green", "blue", "yellow", "black", "white"];
console.log(colors[3], colors[1]);

let students = [
  {
    name: "John",
    age: 25,
    isMarried: false,
    phone: 6098789877,
    university: "Princeton",
    course: "Computer Science",
    year: 2021,
    isGraduated: false,
    address: {
      city: {
        name: "New York",
        zipCode: 10005,
      },
      street: "Wall Street",
      zipCode: 10005,
    },
    skills: ["HTML", "JS"],
  },
  {
    name: "Jane",
    age: 40,
    isMarried: false,
    phone: 6098789877,
    university: "Princeton",
    course: "Computer Science",
    year: 2021,
    isGraduated: false,
    address: {
      city: {
        name: "New York",
        zipCode: 10005,
      },
      street: "Wall Street",
      zipCode: 10005,
    },
    skills: ["HTML", "CSS", "JS"],
  },
  {
    name: "Ana",
    age: 35,
    isMarried: false,
    phone: 6098789877,
    university: "Princeton",
    course: "Computer Science",
    year: 2021,
    isGraduated: false,
    address: {
      city: {
        name: "New York",
        zipCode: 10005,
      },
      street: "Wall Street",
      zipCode: 10005,
    },
    skills: ["HTML", "CSS", "JS"],
  },
];

console.log(students[2].name);
console.log(students[1].address.city.zipCode);
console.log(students[0].skills[2]);

let number = "5";
if (number !== 5) {
  console.log("number is 5");
} else if (number === 6) {
  console.log("number is 6");
} else {
  console.log("number is not 5");
}

if (
  students[0].skills.length > 2 ||
  (students[0].skills.length === 5 && students[0].name === "John")
) {
  console.log("yes");
} else if (students[0].skills.length === 2) {
  console.log("no");
} else {
  console.log("maybe");
}

//  ||  - or
// true || true = true
// true || false = true
// false || true = true
// false || false = false

//  &&  - and
// true && true = true
// true && false = false
// false && true = false
// false && false = false

//  !   - not

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < 10; i++) {
  console.log(i);
}
