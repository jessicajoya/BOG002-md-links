// module.exports = () => {
//   // ...
// };

const fs = require('fs')

/////////////////////////////////////////////////////////////////////////////////////////////leer los archivos del directorio

// fs.readdir('./', (error,files) =>{
//   if(error){
//     throw error;
//   }
//   const arrFiles = {files}
//   console.log((arrFiles))
//   // console.log((files))
//   console.log(typeof(arrFiles))
//   console.log(files.length);
// });

//////////////////////////////////////////////////////////////////////////////////////////////leer el archivo indicado

fs.readFile('./README.md', 'utf8' , (err, data) => {
  // fs.readFile('./package.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(typeof(data))
  const expRegLinks = /\((http.*?)\)/gm;
//   const expRegLinks = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
//   const expRegLinks =/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
//   const expRegLinks ='/mdLinks/i'
  const str = data;
//   const array = [...str.matchAll(expRegLinks)];
    const array = [...str.match(expRegLinks)];
  console.log(array.length);
console.log(array);
  
////////////////////////////////////////search me regresa la coincidencia
//   const search= str.search(expRegLinks);
//   console.log(search);


})

/////////////////////////////////////////////////////////////////////////////////////////prueba del matchall

// const regexp = /t(e)(st(\d?))/g;
// const str = 'test1test2';

// const array = [...str.matchAll(regexp)];

// console.log(array[0]);


// const impares = ['A','B','CA','D'];
// console.log(impares);
// impares.forEach(function(item){
//   // console.log(item*2)
// })

// impares.forEach((item)=>{
//   // console.log(item*2)
// })

// const multilplicadoPorDos = impares.map(item=>item*2)
// console.log(multilplicadoPorDos);

// const mayoresAtres = impares.filter(item=>item>3)
// console.log(mayoresAtres);

// const igualASiete = impares.find(item=>item='B');
// console.log(igualASiete);



// // console.log("Hola a Todas")


// // readFile('C:/Usersusr/Documents/JESS LABORATORIA/MDLINKS/BOG002-md-links/README:md', (err, data) => {

// //   if (err) throw err;
// //   console.log(data);
// // });
// // import { readFile } from 'BOG002-md-links';

// // const readFile('/etc/passwd', (err, data) => {
// //   if (err) throw err;
// //   console.log(data);
// // }

// let text = "Visit W3Schools!"; 
// let n = text.search(/w3Schools/i);
// console.log(n);