// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Resolved");
//   } else {
//     reject("Rejected");
//   }
// });

// // console.log(myPromise);
// myPromise
//   .then((result) => {
//     console.log(result); // if resolved
//   })
//   .catch((error) => {
//     console.log(error); // if rejected
//   })
//   .finally(() => {
//     console.log("Promise has been sateled.");
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// async function fetchData() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   fetchData();

// const obj = {
//   value: 10,
//   method: function () {
//     setTimeout(() => {
//       console.log(this.vaue);  // 10 (inherits from obj)
//     });
//   },
// };

// obj.method();

// const obj = {
//   name: "Partha",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// obj.sayName();

// function regulerFunc(arg1, arg2, arg3) {
//   const arrow = () => console.log(arg1, arg2, arg3);
//   arrow();
// }
// regulerFunc(1, 2, 3);

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Success !"), 2000);
// });
// myPromise.then((data) => {
//   console.log(data);
// });

// async function getData() {
//   try {
//     const res = await fetch("invalid-url");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getData();

// const obj = { name: "Partha", age: 23 };
// const { name, age } = obj;
// console.log(`${name} is age ${age}.`);

// const { name = "Guest", age = 23 } = {};
// console.log(name, age);

// const user = { firestName: "Partha" };
// const { firestName: name } = user;
// console.log(name);

// const user = { details: { firstName: "Partha" } };
// const {
//   details: { firstName: name },
// } = user;
// console.log(name);

