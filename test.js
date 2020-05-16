// import Axios from "axios";


// const status = axios.get('http://localhost:4044/newsfeed');

// console.log (status);


// axios.get('http://localhost:4044/newsfeed')
//   .then(response => console.log(response))
//   .then(data => console.log(data));

// async function asyncFunc() {
// // fetch data from a url endpoint
//     try{
//         const data = await axios.get('http://localhost:4044/recommend');
//         console.log(data);
//         return data;
//     }
//     catch {
//         console.log("Error");
//     }
// }
// asyncFunc();


const axios = require('axios');
// Make a request for a user with a given ID
axios.get('http://localhost:4044/newsfeed')
  .then(function (response) {
    // handle success
    console.log(response.status);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });