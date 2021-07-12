const path = require('path');
const fs = require('fs');
// const fetch = require("node-fetch");
const axios = require('axios');



const dirPath = path.resolve(__dirname); // encuentro el path actual


const extFileMD = (file) => { return path.extname(file).toLowerCase() === '.md' }

const listFilesIntoDirectory = (inputpath, arr) => {
  arr = arr || [];
  fs.readdirSync(inputpath).map(element => {
    if (fs.lstatSync(path.resolve(inputpath, element)).isDirectory()) {
      if (!element.startsWith('.') && !element.includes('modules')) {
        listFilesIntoDirectory(element, arr)
      }
    } else if (fs.lstatSync(path.resolve(inputpath, element)).isFile()) {
      arr.push(inputpath + '//' + element)
    }
  });
  return arr.filter(extFileMD);
}


const createAPI = (inputlist, pathName, contentFile) => {
  let objectlinks = []
    ;
  for (let i = 0; i < inputlist.length; i++) {

    let indice = contentFile.indexOf(inputlist[i])
    let sliceIndice = contentFile.substr(0, indice);
    let indiceApertura = sliceIndice.lastIndexOf("[") + 1;
    let indicecierre = sliceIndice.lastIndexOf("]");

    let objectlink =
    {
      href: inputlist[i],
      text: contentFile.substring(indiceApertura, indicecierre),
      file: pathName
    }
    objectlinks.push(objectlink)
  }
  return objectlinks;
}


const findLinks = (filesMD) => {
  let contentFile = fs.readFileSync(filesMD, 'utf-8')
  const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

  const listLinks = [...contentFile.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}

  const objetoAPI = createAPI(listLinks, filesMD, contentFile)
  return objetoAPI
}


const arrayFilesMd = listFilesIntoDirectory(dirPath)

const URLs = arrayFilesMd.flatMap(md => findLinks(md));



var task_href = [];

URLs.forEach(function (URLs) {

  task_href.push(URLs.link);

});

console.log(task_href)


function getAllData(task_href) {
  return Promise.all(task_href.map(fetchData));
}

function fetchData(URL) {
  return axios
    .get(URL)
    .then(function (response) {
      return {
        status: response.status,
        statustext: response.statusText
      };
    })
    .catch(function (error) {
      if (error.response) {
        return {
          status: error.response.status,
          statustext: "fail"
        };
      } else {
        return {
          status: "fail",
          statustext: "fail"
        }
      };
    });
}

getAllData(task_href).then(console.log).catch(console.log)