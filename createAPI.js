const path = require('path');
const fs = require('fs')



//paso 1 obtener el path en el que estoy ubicado
const currentPath = process.cwd();
// console.log("current" + currentPath)
// //// paso dos obtener el directoria del 
// const directories = 

// const directories = path.filename(currentPath);
// console.log(directories)
const dirPath = path.resolve(__dirname); // path to your directory goes here
let files = fs.readdirSync(dirPath);
const extFileMD=(e)=>{return path.extname(e).toLowerCase() === '.md'}
mdFilesList = files.filter(extFileMD);





//////////////////////////////////////////////////////////////////////////////////////////////leer el archivo indicado
const leerMD =(ruta)=>{
fs.readFile(ruta, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
//   console.log(typeof(data))

 const expRegLinks =/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

  const str = data;

const arrayLinks = [...str.match(expRegLinks)];
for (let i = 0; i < arrayLinks.length; i++) {
let arrObje = 
  {
    link: arrayLinks[i],
    href: ruta
  }
console.log(arrObje)
}
})
}

const API =mdFilesList.forEach(element => leerMD(element));



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