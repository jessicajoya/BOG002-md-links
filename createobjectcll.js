const path = require('path');
const fs = require('fs')




const dirPath = path.resolve(__dirname); // path to your directory goes here
let files = fs.readdirSync(dirPath);
const extFileMD = (file) => { return path.extname(file).toLowerCase() === '.md' }
mdFilesList = files.filter(extFileMD);

// https://stackoverflow.com/questions/44199883/how-do-i-get-a-list-of-files-with-specific-file-extension-using-node-js
// const dirpath = path.join(__dirname, '/path')

// fs.readdir(dirpath, function(err, files) {
//   const txtFiles = files.filter(el => path.extname(el) === '.txt')
//   // do something with your files, by the way they are just filenames...
// })

// console.log(mdFilesList)



const arrLinks = [];
//////////////////////////////////////////////////////////////////////////////////////////////leer el archivo indicado
const leerMD = (ruta) => {
  //creando una instancia 
  return new Promise ((resolve,reject)=>{
  
    fs.readFile(ruta, 'utf8', (err, data) => {
      if (err) {
        reject(err)
        return 
      }
      // console.log(data);
      const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
      const listLinks = [...data.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}
      // console.log(listLinks)
      let objectlinks = [];
      for (let i = 0; i < listLinks.length; i++) {
  
          let indice = data.indexOf(listLinks[i])
          let sliceIndice = data.substr(0, indice);
          let indiceApertura = sliceIndice.lastIndexOf("[") + 1;
          let indicecierre = sliceIndice.lastIndexOf("]");
          // console.log(sliceIndice)
          // console.log(indice)
  
          let objectlink =
          {
              link: listLinks[i],
              href: ruta,
              text: data.substring(indiceApertura, indicecierre)
          }
          objectlinks.push(objectlink)
      }
      // console.log(objectlinks) //como lo saco de aqui!
      resolve(objectlinks) 
    })
  })
 
}
// console.log(arrLinks)
//consuminla promesa con .then
leerMD('READssssME.md')
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})

// mdFilesList.forEach(element => leerMD(element));



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