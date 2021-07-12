const path = require('path');
const fs = require('fs');
// const fetch = require("node-fetch");
const axios = require('axios');



const dirPath = path.resolve(__dirname); // encuentro el path actual
// console.log(dirPath)

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
            link: inputlist[i],
            href: pathName,
            text: contentFile.substring(indiceApertura, indicecierre)
        }
        objectlinks.push(objectlink)
    }
    return objectlinks;
}

// ////////////////Funcion para crear el objeto 

const findElemts = (filesMD) => {
    let contentFile = fs.readFileSync(filesMD, 'utf-8')
    const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
    const listLinks = [...contentFile.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}
    const objetoAPI = createAPI(listLinks, filesMD, contentFile)
    return objetoAPI
}


const arrayFilesMd = listFilesIntoDirectory(dirPath)
const createarr_Elements = arrayFilesMd.flatMap(md => findElemts(md));
console.log(createarr_Elements)


const URLs = (arr_Elements) => {
    var list_href = [];
    arr_Elements.forEach(function (e) {
        list_href.push(e.link);
    });
    return (list_href)
}
const arr_URLs=URLs(createarr_Elements)

const getAllData = (list_href) => { return Promise.all(list_href.map(statusLinks)); }


const statusLinks = (URL) => {
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

// getAllData(arr_URLs).then((createarr_Elements) => {
//     return [].concat.apply([], createarr_Elements);
// }).then(console.log);
getAllData(arr_URLs).then(console.log).catch(console.log)