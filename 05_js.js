// const fetchApi = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// fetchApi();

// import axios from "axios";
// const axiosData = async () => {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// axiosData();

// const postFetch = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "Content-Type": "aplication/json" },
//       body: JSON.stringify({
//         title: "New title",
//         body: "Content here",
//         userId: 1,
//       }),
//     });
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// postFetch();

// import axios from "axios";
// const postAxios = async () => {
//   try {
//     const res = await axios.post("https://jsonplaceholder.typicode.com/posts");
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// postAxios();


