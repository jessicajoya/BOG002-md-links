// module.exports = () => {
//   // ...
// };
const path = require('path');
const fs = require('fs')



//paso 1 obtener el path en el que estoy ubicado

const currentPath = process.cwd();
console.log(currentPath)

////// paso dos obtener el directoria del 
const directories = path.dirname(currentPath);
console.log(directories)

var dirPath = path.resolve(__dirname); // path to your directory goes here
console.log(dirPath)
var filesList;
fs.readdir(dirPath, function(err, files){
  filesList = files.filter(function(e){
    return path.extname(e).toLowerCase() === '.md'
  });
  console.log(filesList);
});
/*
// var dirname =__dirname;
// Prints: /Users/mjr
var filename = (path.dirname(__filename));
// var directories = path.dirname(currentPath);
// console.log(current);
// console.log(dirname)
console.log(filename)
// console.log(directories);
var scriptName = path.basename(__filename)
console.log(scriptName);*/

/////////////////////////////////////////////////////////////////////////////////////////////leer los archivos del directorio

// fs.readdir(currentPath, (error,files) =>{
//   if(error){
//     throw error;
//   }
//   const arrFiles = {files}
//   console.log((arrFiles))
//   // console.log((files))
//   console.log(typeof(arrFiles))
//   console.log(files.length);
// });


// fs.readdir(directories, (error,files) =>{
//     if(error){
//       throw error;
//     }
//     const arrFiles = {files}
//     console.log((arrFiles))
//     // console.log((files))
//     console.log(typeof(arrFiles))
//     console.log(files.length);
//   });

//////////////////////////////////////////////////////////////////////////////////////////////leer el archivo indicado

// fs.readFile('./README.md', 'utf8' , (err, data) => {
//   // fs.readFile('./package.json', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(typeof(data))

//  const expRegLinks =/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

//   const str = data;

// const array = [...str.match(expRegLinks)];
// console.log(array.length);
// console.log(array);
  
////////////////////////////////////////search me regresa la posicion de coincidencia
//   const search= str.search(expRegLinks);
//   console.log(search);


// })

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

//ANTHE

                     