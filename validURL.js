const fetch = require("node-fetch");

// const path = require('path');
// const fs = require('fs')
// const axios = require('axios');


//   axios
//   .get('https://developer.mozssssrg/es/docs/Glossary/Callback_function')
//   .then((response) => {
//     console.log(response.status);
//   })
//   .catch((error) => {
//     console.error('error');
//   });


// const fetch = require("node-fetch");
// const p1 = fetch("/robots.txt");
// const p2 = fetch("/index.css");
// const p3 = fetch("/index.js");

// Promise.all([p1, p2, p3])
//   .then(responses => {
//     responses.forEach(response => {
//       console.log(response.status, response.url);
//     })
//   });
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'htps://api.github.com/bbbbbbbbbbbbbbbbbbbbsers/jeresig'
];

// "mapear" cada url a la promesa de su fetch
let requests = urls.map(url => fetch(url));
console.log(requests)

// Promise.all espera hasta que todas la tareas estén resueltas
Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));