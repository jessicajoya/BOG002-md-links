const path = require('path');
const fs = require('fs')




const dirPath = path.resolve(__dirname); // path to your directory goes here
let files = fs.readdirSync(dirPath);
const extFileMD=(file)=>{return path.extname(file).toLowerCase() === '.md'}
mdFilesList = files.filter(extFileMD);
console.log(mdFilesList)



const arrLinks =[];
//////////////////////////////////////////////////////////////////////////////////////////////leer el archivo indicado
const leerMD =(ruta)=>{
  
fs.readFile(ruta, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
 const expRegLinks =/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
 const str = data;

const arrayLinks = [...str.match(expRegLinks)];
console.log(arrayLinks.length)
console.log(typeof arrayLinks)
let objectlinks = [];
for (let i = 0; i < arrayLinks.length; i++) {
let arrObje = 
  {
    link: arrayLinks[i],
    href: ruta
  }
  objectlinks.push(arrObje);
}
// console.log(objectlinks) //como lo saco de aqui!
return objectlinks
})
// console.log(objectlinks) //como lo saco de aqui!
}
// console.log(arrLinks)

mdFilesList.forEach(element => leerMD(element));



// const fs = require('fs')

// fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })




// ejemplo de una funcion recursiva
// let cuentaAtras = (numero) => {
  
//   if (numero === 0) {
//       return;
//   }
//   console.log(numero);
//   return cuentaAtras(numero - 1);
// };
// console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1