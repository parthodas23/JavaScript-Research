// import { multiply, sum, PI } from "./03_js";

// console.log(multiply(2, 3));
// console.log(sum(3, 4));
// console.log(PI);

// try {
//   let y = 10 + x;
//   console.log(y);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("Always Exicuted.");
// }

// function checkAge(age) {
//   if (age < 18) {
//     throw new Error("Age must me 18 or above.");
//   }
//   return "Access granted.";
// }
// try {
//   console.log(checkAge(16));
// } catch (err) {
//   console.log(err);
// }

// const number = [1, 2, 3, 4, 5];
// const squired = number.map((num) => num * num);   // copy and modify each element --> Transforming Data
// console.log(squired);
// const evenNum = number.filter((num) => num % 2 === 0);  // select spacific arr
// console.log(evenNum);

// const collect = number.reduce((acc, num) => acc + num, 0); // collecting data
// console.log(collect);

// const arr = [34, 23, 50, 99];
// const max = arr.reduce((acc, num) => (num > acc ? num : acc), arr[0]);
// console.log(max);
// const min = arr.reduce((acc, num) => (num < acc ? num : acc), arr[0]);
// console.log(min);

// const arr = [1, 2, 3, 4];
// const squired = arr.forEach((num) => console.log(num * 2));

// const hasEven = arr.some((num) => num % 2 === 0);
// console.log(hasEven);

// const number = [2, 4, 6, 8];
// const allEven = number.every((num) => num % 2 === 0);
// console.log(allEven);

// const user = [
//   { id: 1, name: "Partha" },
//   { id: 2, name: "Prithi" },
//   { id: 3, name: "Annie" },
// ];
// const find = user.find((num) => num.id === 3);
// console.log(find);

// const num = [10, 20, 30, 42];
// const index = num.findIndex((num) => num === 42);
// console.log(index);

// const number = [1, 2, 3, 4, 5];
// number.sort((a, b) => a + b);
// console.log(number);

// const nestedArr = [1, 2, [3, 4], [[5, 6]]];
// const arr = nestedArr.flat(2);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// const max = arr.reduce((acc, num) => (num > acc ? num : acc), arr[0]);
// console.log(max);

// const evenFilter = arr.filter((num) => num % 2 === 0);
// console.log(evenFilter);
// const find = arr.find((num) => num % 2 === 0);
// console.log(find);

// const even = arr.map((num) => num % 2 === 0);
// console.log(even);

// arr.map((num) => console.log(num * num));
// const squire = arr.forEach((num) => console.log(num * 2));
// const odd = arr.filter((num) => num % 2 !== 0);
// console.log(odd);

// arr.some((num) => console.log(num % 2 !== 0));
// arr.every((num) => console.log(num % 2 !== 0));

// const arr = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7];
// const notDuplicate = arr.reduce((acc, num) => {
//   if (!acc.includes(num)) acc.push(num);
//   return acc;
// }, []);
// console.log(notDuplicate);

// const number = [1, 2, 3, 4];
// const squire = number.forEach((num) => console.log(num * 2));

