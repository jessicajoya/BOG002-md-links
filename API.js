const path = require('path');
const fs = require('fs');
const fetch = require("node-fetch");
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
      // console.log(element)
      // extFileMD(element)
      arr.push(element)
    }
  });
  return arr;
}


const createAPI = (inputlist,pathName,contentFile) =>{
    let objectlinks = []
  ;
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

// ////////////////Funcion para crear el objeto 

const findLinks = (filesMD) => {
    let contentFile = fs.readFileSync(filesMD, 'utf-8')
    const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

    const listLinks = [...contentFile.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}
    // console.log(listLinks)
    const objetoAPI = createAPI(listLinks,filesMD,contentFile)
   return objetoAPI
}


const arrayFilesMd = listFilesIntoDirectory(dirPath)
console.log(arrayFilesMd)


const URLs= arrayFilesMd.flatMap(md => findLinks(md));
console.log(URLs)


var task_href= [];
 
URLs.forEach(function (URLs) {
 
  task_href.push(URLs.link);
     
});

console.log(task_href)


function getAllData(task_href){
  return Promise.all(task_href.map(fetchData));
}

function fetchData(URL) {
  return axios
    .get(URL)
    .then(function(response) {
      return {
        status: true,
        // data: response.data
      };
    })
    .catch(function(error) {
      return { status: false };
    });
}

getAllData(task_href).then(resp=>{console.log(resp)}).catch(e=>{console.log(e)})