const path = require('path');
const fs = require('fs')

const dirPath = path.resolve(__dirname); // encuentro el path actual

const findFilesMd = (inputPath) => {

    let files = fs.readdirSync(inputPath);
    const extFileMD = (file) => { return path.extname(file).toLowerCase() === '.md' }
    const mdFilesList = files.filter(extFileMD);
    // console.log(mdFilesList)
    return mdFilesList
}
const arrFilesMD = findFilesMd(dirPath)
console.log(arrFilesMD)


<<<<<<< HEAD
=======

// const fileOrDir = (path) => {

//     fs.stat(path, (err, stats) => {

//         if (err) {
//             console.log('el path ingresado es incorrecto');
//         }

//         else if (stats.isFile() === 'true') {
//             console.log('es un file');
//         }
//         else if (stats.isDirectory() === 'true') {
//             console.log('es un directorio?');
//              const arrFilesMD = findFilesMd(dirPath)
//              console.log(arrFilesMD)
//             return fileOrDir();
//         }
//     });
//     console.log(fileOrDir(dirPath))
// };


>>>>>>> 8ea143b9bac684b588cbb42a892bcec98ef3e801
////////////////Funcion para crear el objeto 

const findLinks = (filesMD) => {
    let contentFile = fs.readFileSync(filesMD, 'utf-8')
    const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

    const listLinks = [...contentFile.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}
    // console.log(listLinks)
    let objectlinks = [];
    for (let i = 0; i < listLinks.length; i++) {

        let indice = contentFile.indexOf(listLinks[i])
        let sliceIndice = contentFile.substr(0, indice);
        let indiceApertura = sliceIndice.lastIndexOf("[") + 1;
        let indicecierre = sliceIndice.lastIndexOf("]");

        let objectlink =
        {
            link: listLinks[i],
            href: filesMD,
            text: contentFile.substring(indiceApertura, indicecierre)
        }
        objectlinks.push(objectlink)
    }
    return objectlinks;

}

const arrayLinks = arrFilesMD.flatMap(md => findLinks(md));
console.log(arrayLinks)

// let mdLinks = [];
// mdLinks.push(arrFilesMD.map(md=>findLinks(md)))
// console.log(mdLinks)

