const path = require('path');
const fs = require('fs')

const dirPath = path.resolve(__dirname); // encuentro el path actual
console.log(dirPath)

const extFileMD = (file) => { return path.extname(file).toLowerCase() === '.md' }
const listFilesIntoDirectory = (inputpath, arr) => {
  arr = arr || [];
  fs.readdirSync(inputpath).map(element => {
    if (fs.lstatSync(path.resolve(inputpath, element)).isDirectory()) {
      if (!element.startsWith('.git') && !element.includes('modules')) {
        // console.log(element + "dir")
        listFilesIntoDirectory(element, arr)
      }
    } else if (element.includes('.md')) {
      console.log(element)
      // extFileMD(element)
      arr.push(element)
    }
  });
  return arr;
}


const findLinks = (filesMD) => {
  let contentFile = fs.readFileSync(filesMD, 'utf-8')
  const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

  const listLinks = {...contentFile.match(expRegLinks)};//recorrerlo map retund listlinks.map(){retorno el objeto}
  const objetoAPI = createAPI(listLinks,filesMD,contentFile)
 return objetoAPI 
}




// const leerMD = (ruta) => {
//   //creando una instancia 
//   return new Promise((resolve, reject) => {
//     fs.readFile(ruta, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//         return
//       }
      
//       const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
//       const listLinks = [...data.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}
//       resolve(listLinks)
//     })
//   })
// }

let arrFinal = findLinks(dirPath)
console.log(arrFinal)
// const urls = arrFinal.flatMap(leerMD)
// Promise.all(urls)
// .then(console.log)



// let requests = urls.map(url => fetch(url));
// console.log(requests)

// // Promise.all espera hasta que todas la tareas estén resueltas
// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => console.log(`${response.url}: ${response.status}`)
//   ));