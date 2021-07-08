const path = require('path');
const fs = require('fs')
const axios = require('axios');


  axios
  .get('https://developer.mozssssrg/es/docs/Glossary/Callback_function')
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.error('error');
  });