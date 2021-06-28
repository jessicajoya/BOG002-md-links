// module.exports = () => {
//   // ...
// };
const path = require('path');
const fs = require('fs')



//paso 1 obtener el path en el que estoy ubicado

// const currentPath = process.cwd();
// console.log(currentPath)

////// paso dos obtener el directoria del 
// const directories = path.dirname(currentPath);
// console.log(directories)
const dirPath = path.resolve(__dirname); // path to your directory goes here

const arrFilesMd = (dirPath)=>{

let filesList;
fs.readdir(dirPath, function(err, files){
  filesList = files.filter(function(e){
    return path.extname(e).toLowerCase() === '.md'
  });
  console.log(filesList);
});

}

arrFilesMd(dirPath);

// function is_dir(path) {
//   try {
//       var stat = fs.lstatSync(path);
//       console.log("es un directorio")
//       // console.log(stat);

//       return stat.isDirectory();
//   } 
//   catch (e) {
//       // lstatSync throws an error if path doesn't exist
//       console.log("error")
//       return false;
//   }
// }
// is_dir('fdaawfwe');

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



                     