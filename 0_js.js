// In JavaScript, scope determines the accessibility or visibility of variables, functions, and objects in some particular part of your code. There are mainly three types of scope in JavaScript:

// Global Scope
// Variables declared outside of any function or block are in the global scope, meaning they can be accessed from anywhere in the code.
// Global variables remain in memory throughout the program, which can lead to issues if overused.

// let name = "partho";

// function func() {
//   console.log(name);
// }
// func();

// Local Scope (Function Scope)
// Variables declared inside a function are only accessible within that function.

// function sayHello() {
//     let message = "Hello, world!"; // Function scope
//     console.log(message);
//   }
//   sayHello(); // Output: Hello, world!
//   console.log(message); // Error: message is not defined

// Block Scope (introduced with let and const in ES6)
// Variables declared using let or const are block-scoped, meaning they only exist within the block ({ }) they are defined in.
// var does not have block scope (it is function-scoped instead).

// if (true) {
//     let x = 10; // Block scope
//     const y = 20; // Block scope
//     var z = 30; // Function scope
//   }
//   console.log(typeof z); // Output: number
//   console.log(typeof x); // Error: x is not defined
//   console.log(typeof y); // Error: y is not defined

// Lexical Scope (Nested Scope)
// JavaScript has lexical scoping, meaning functions can access variables from their outer (parent) scope.

// function outerFunction() {
//     let outerVariable = "I'm from outer";
  
//     function innerFunction() {
//       console.log(outerVariable); // Accessible due to lexical scope
//     }
//     innerFunction();
//   }
//   outerFunction(); // Output: I'm from outer