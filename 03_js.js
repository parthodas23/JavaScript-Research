// let arr = [1, 2, 3, 4];
// let copyArr = [...arr]; // spread operator
// console.log(copyArr);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let mergedArr = [...arr1,...arr2];  // spread operator
// console.log(mergedArr);

// const obj1 = { name: "Partha", age: 20 };
// const obj2 = { ...obj1, country: "Bangladesh" };  //spread operator
// console.log(obj2);

// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [1, 2, 3, 4];
// console.log(sum(...numbers));

// function sum(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);  // Rest Operator
// }
// console.log(sum(1, 2, 3, 4));

// const [first, seconed, ...rest] = [1, 2, 3, 4, 5, 6];  //destucture
// console.log(first);
// console.log(seconed);
// console.log(rest);

// const { name, ...details } = { name: "Partha", age: 20, country: "Bangladesh" };
// console.log(name);
// console.log(details);

// console.log([..."Hello"]);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged);

// function display(a, b, ...rest) {
//   console.log(a, b);
//   console.log(rest.reduce((acc, num) => acc + num, 0));
// }

// display(1, 2, 3, 4, 5); //details default array

// const test = (...args) => {
//   console.log(args);
// };
// test(1, 2, 3, 4);

// const obj = { name: "Partha", age: 20 };
// const newObj = { ...obj, country: "Bangladesh" };
// console.log(newObj);

// function multiply(multipliar, ...numbers) {
//   return numbers.map((num) => num * multipliar);
// }
// console.log(multiply(5, 2, 3, 4));

// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(...rest);

// // Spread (Expands elements)
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// // Rest (Gathers elements)
// function sum(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(sum(1, 2, 3)); // 6

// console.log([..."Hello"]);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged);  // { a: 1, b: 3, c: 4 } (b is overwritten)

// const orginal = { a: 2, b: { c: 3 } };
// const copy = { ...orginal };
// copy.b.c = 42;
// console.log(orginal.b.c);  // 42 (nested object is still linked)

// const test = (...args) => console.log(args);
// test(1, 2, 3);

// const nums = [1, 2, 2, 3, 4, 4, 5];
// const nonDuplicate = [...new Set(nums)];
// console.log(nonDuplicate);

// const obj = { name: "Partha", age: 20 };
// const spread = { ...obj };
// const assing = Object.assign({}, obj);

// console.log(assing);

export const multiply = (a, b) => a * b;
export const sum = (a, b) => a + b;
export const PI = 3.14;
