const path = require('path');
const fs = require('fs')

const dirPath = path.resolve(__dirname); // encuentro el path actual
console.log(dirPath)

const extFileMD = (file) => { return path.extname(file).toLowerCase() === '.md' }

<<<<<<< HEAD
=======
const extFileMD = (file) => { return path.extname(file).toLowerCase() === '.md' }
>>>>>>> 8ea143b9bac684b588cbb42a892bcec98ef3e801

const listFilesIntoDirectory = (inputpath, arr) => {
  arr = arr || [];

<<<<<<< HEAD
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
=======
const listFilesIntoDirectory = (inputpath, arr) => {
  arr = arr || [];
  // console.log(fs.readdirSync(inputpath))
  fs.readdirSync(inputpath).map(element => {
    if (fs.lstatSync(path.resolve(inputpath, element)).isDirectory() && !element.startsWith('.')) {
      // console.log(element)
      listFilesIntoDirectory(element, arr)
      
    } else {
      // arr.push(inputpath+'\\'+element)
      arr.push(element)
    }
  });
  return arr.filter(extFileMD);
>>>>>>> 8ea143b9bac684b588cbb42a892bcec98ef3e801
}
// console.log(listFilesIntoDirectory(dirPath))
////////////////////////////////////////////////////////////////////////////////////////leer el archivo indicado
const leerMD = (ruta) => {
  //creando una instancia 
  return new Promise((resolve, reject) => {

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
<<<<<<< HEAD

        let indice = data.indexOf(listLinks[i])
        let sliceIndice = data.substr(0, indice);
        let indiceApertura = sliceIndice.lastIndexOf("[") + 1;
        let indicecierre = sliceIndice.lastIndexOf("]");

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

let objectfinal =[]
let arrFinal = listFilesIntoDirectory(dirPath)
const arrPromise = arrFinal.map(leerMD)
 Promise.all(arrPromise)
.then(console.log)
// console.log(arrPromise);
=======

        let indice = data.indexOf(listLinks[i])
        let sliceIndice = data.substr(0, indice);
        let indiceApertura = sliceIndice.lastIndexOf("[") + 1;
        let indicecierre = sliceIndice.lastIndexOf("]");

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

let arrFinal = listFilesIntoDirectory(dirPath)
const arrPromise = arrFinal.flatMap(leerMD)
Promise.all(arrPromise)
.then(console.log)

// // console.log(path.resolve('/readme3.md'));
// leerMD('README.md')
// .then(console.log) 

// var myRequest = new Request('https://developer.mozilla.org/es/docs/Glossary/Cack_function');

// fetch(myRequest).then(function(response) {
//   console.log(response.status); // returns 200
//   response.blob().then(function(myBlob) {
//     var objectURL = URL.createObjectURL(myBlob);
//     myImage.src = objectURL;
//   });
// });
// let url = 'http://someURL.com' ;

// fetch(url).then(response => console.log(response));
>>>>>>> 8ea143b9bac684b588cbb42a892bcec98ef3e801
