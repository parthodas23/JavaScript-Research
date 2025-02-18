// What is hoisting in JavaScript, and how does it affect variables?
// Hoisting is a behavior where variable and function declarations are moved to the top of their scope before execution.

// var is hoisted with undefined.
// let and const are hoisted but not initialized.

// console.log(a); // undefined (due to hoisting)
// var a = 5;

// console.log(b); // ReferenceError (not initialized)
// let b = 10;

// let x = null;
// let y; // un

// console.log(typeof null);
// console.log(typeof "Partha");
// console.log(typeof 120n);
// console.log(typeof Symbol("id"));

// console.log(5 =='5');
// console.log(5==='5');

// console.log(5 + "3");
// console.log(5 - "3");

// let ab = { name: "Partha", age: 23 };
// for (let a in ab) {
//   console.log(a, ab[a]);
// }

// let b = [12, 22, 33];

// for (let c of b) {
//   console.log(c);
// }

// let age = 19;
// console.log(age >= 18 ? "Adult" : "not adult");

let fruit = "apple";

// switch (fruit) {
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "apple":
//     console.log("Apple selected");
//     break;
//   default:
//     console.log("No match");
// }

let numbers = [1, 2, 3, 4];
const [a, b, c] = numbers;
console.log(a, b, c);
