// function outerFunction() {
//     let count = 0; // This variable is inside outerFunction
//     function innerFunction() {
//         count++;  // innerFunction can access 'count'
//         console.log(count);
//     }
//     return innerFunction;  // Returning innerFunction
// }
// const myClosure = outerFunction(); // outerFunction runs and returns innerFunction
// myClosure(); // 1
// myClosure(); // 2
// myClosure(); // 3

// function outerFunc() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//     decrement: function () {
//       count--;
//       console.log(count);
//     },
//     reset: function () {
//       count = 0;
//       console.log(count);
//     },
//   };
// }
// const myClosure = outerFunc();

// myClosure.increment();
// myClosure.decrement();
// myClosure.reset();

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner();
// }
// outer();

// function outer() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//   };
// }

// const myClosure = outer();
// myClosure.increment();

// function bankAccount() {
//   let balance = 2000;
//   return {
//     deposite: function (amount) {
//       balance += amount;
//       console.log(balance);
//     },
//   };
// }

// const myClosure = bankAccount();
// myClosure.deposite(234);

// const fetchData = async () => {
//   try {
//     const res = await fetch("https://api.example.com/users");
//     const datas = res.json();
//     const li = document.createElement("li");
//     datas.map((data) => (li.innerHTML = data.name));
//   } catch (err) {
//     console.log(err);
//   }
// };
// fetchData();

// const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(reverseString("Hello"));

// const isPalendrome = (str) => {
//   return str === str.split("").reverse().join("");
// };
// console.log(isPalendrome("cddc"));

// const firstUniqueChar = (str) => {
//   let freq = {};
//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (freq[char] === 1) {
//       return char;
//     }
//   }

//   return null;
// };

// console.log(firstUniqueChar("aabb"));

// function countdown(n) {
//   if (n <= 0) {
//     console.log("Done");
//     return;
//   }
//   console.log(n);
//   countdown(n - 1); //recusive call-- function call itself
// }
// countdown(5);

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// const fabonaciItrative = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   let prev = 0;
//   let curr = 1;
//   for (let i = 2; i <= n; i++) {
//     let next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//   return curr;
// };
// console.log(fabonaciItrative(6));

// const isAnagram = (str1, str2) => {
//   str1 = str1.trim().toLowerCase();
//   str2 = str2.trim().toLowerCase();

//   if (str1.length !== str2.length) {
//     return false;
//   }
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// };

// console.log(isAnagram("hello", "wrold"));

// function factorial(n) {
//   if (n <= 0) {
//     return;
//   }
//   console.log(n);

//   factorial(n - 1);
// }

// factorial(6);

// const arr = [1, 2, 2, 3, 3];

// const seen = new Set();
// const duplicates = new Set();

// arr.forEach((num) => {
//   if (seen.has(num)) {
//     duplicates.add(num);
//   } else {
//     seen.add(num);
//   }
// });
// console.log([...duplicates]);

// const uniqueChar = (str) => {
//   let freq = {};
//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   for (let char of str) {
//     if (freq[char] === 1) {
//       return char;
//     }
//   }
// };

// console.log(uniqueChar("swiss"));

// function fabonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   let prev = 0;
//   let curr = 1;

//   for (let i = 2; i <= n; i++) {
//     let next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//   return curr;
// }

// console.log(fabonacci(6));

// function isAnagram(str1, str2) {
//   str1 = str1.trim().toLowerCase();
//   str2 = str2.trim().toLowerCase();

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   return str1.split("").sort().join("") === str1.split("").sort().join("");
// }

// console.log(isAnagram('listen','silent'));

// const arr = [1, 2, 2, 3, 4, 4];
// const withOutDuplicate = arr.reduce((acc, num) => {
//   if (!acc.includes(num)) acc.push(num);
//   return acc;
// }, []);

// console.log(withOutDuplicate);