const path = require('path');
const fs = require('fs')
const axios = require('axios');

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


const createAPI = (inputlist,pathName,contentFile) =>{
    let objectlinks = [];
    for (let i = 0; i < inputlist.length; i++) {

        let indice = contentFile.indexOf(inputlist[i])
        let sliceIndice = contentFile.substr(0, indice);
        let indiceApertura = sliceIndice.lastIndexOf("[") + 1;
        let indicecierre = sliceIndice.lastIndexOf("]");

        let objectlink =
        {
            link: inputlist[i],
            href: pathName,
            text: contentFile.substring(indiceApertura, indicecierre)
        }
        objectlinks.push(objectlink)
    }
    return objectlinks;
}

////////////////Funcion para crear el objeto 

const findLinks = (filesMD) => {
    let contentFile = fs.readFileSync(filesMD, 'utf-8')
    const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

    const listLinks = [...contentFile.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}
    // console.log(listLinks)
    const objetoAPI = createAPI(listLinks,filesMD,contentFile)
   return objetoAPI 
}

const arrayLinks = listFilesIntoDirectory(dirPath).flatMap(md => findLinks(md));
console.log(arrayLinks)
console.log(findLinks())



// const verificarStatus = (link)=>{
//   axios
//   .get(link)
//   .then((response) => {
//     console.log(response.status);
//   })
//   .catch((error) => {
//     console.error('error');
//   });
// }