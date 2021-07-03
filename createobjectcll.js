const path = require('path');
const fs = require('fs')

const dirPath = path.resolve(__dirname); // encuentro el path actual
// console.log(dirPath)

const findFilesMd = (inputPath) => {
  let files = fs.readdirSync(inputPath);
  const extFileMD = (file) => { return path.extname(file).toLowerCase() === '.md' }
  const mdFilesList = files.filter(extFileMD);
  return mdFilesList
}
// const arrFilesMD = findFilesMd(arrFinal)
// console.log(arrFilesMD)


////////////////////////////////////////////////////////////////https://www.geeksforgeeks.org/node-js-fs-readdir-method/
const listFilesDir = (inputpath,arr) => {
  
  fs.readdirSync(inputpath).map(element => {
    if (fs.lstatSync(path.resolve(inputpath, element)).isDirectory()) {
    // // let listFiles = " "
    // let listFiles=
     console.log(element);
      arr.push('Directory: ' + element)
      // listFilesDir("\'"+element+"\'",arr)
      // listFilesDir(`${element}`,arr)
      // listFilesDir('prueba',arr)
     
    
    } else {
      arr.push(element)
      }
    });
  return arr
// 
}

let arrFinal = listFilesDir(dirPath,[])
console.log(arrFinal)



//   .then((data) => { console.log(data) })
//////////////////////////////////////////////////////////////////////////////////////////////leer el archivo indicado
// const leerMD = (ruta) => {
//   //creando una instancia 
//   return new Promise((resolve, reject) => {

//     fs.readFile(ruta, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//         return
//       }
//       // console.log(data);
//       const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
//       const listLinks = [...data.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}
//       // console.log(listLinks)
//       let objectlinks = [];
//       for (let i = 0; i < listLinks.length; i++) {

//         let indice = data.indexOf(listLinks[i])
//         let sliceIndice = data.substr(0, indice);
//         let indiceApertura = sliceIndice.lastIndexOf("[") + 1;
//         let indicecierre = sliceIndice.lastIndexOf("]");

//         let objectlink =
//         {
//           link: listLinks[i],
//           href: ruta,
//           text: data.substring(indiceApertura, indicecierre)
//         }
//         objectlinks.push(objectlink)
//       }
//       // console.log(objectlinks) //como lo saco de aqui!
//       resolve(objectlinks)
//     })
//   })

// }

// consuminla promesa con .then
// leerMD('README.md')
//   .then((data) => { console.log(data) })


