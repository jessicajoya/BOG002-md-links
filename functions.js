const path = require('path');
const fs = require('fs');
const axios = require('axios');

const dirPath = path.resolve(__dirname); 

const extFileMD = (file) => { return path.extname(file).toLowerCase() === '.md' }

//en este momento la funcion list files recibe un
const listFilesIntoDirectory = (inputpath, arr) => {
    arr = arr || [];
    if (fs.statSync(inputpath).isFile()){
       return [inputpath]
    }else {fs.readdirSync(inputpath).map(element => {
        if (fs.lstatSync(path.resolve(inputpath, element)).isDirectory()) {
            if (!element.startsWith('.') && !element.includes('modules')) {
              
                listFilesIntoDirectory(path.resolve(element), arr)
            }
        } else if (fs.lstatSync(path.resolve(inputpath, element)).isFile()) {
            arr.push(inputpath + '//' + element)
        }
    });
    return arr.filter(extFileMD);}
}

const findElements = (filesMD) => {
    let contentFile = fs.readFileSync(filesMD, 'utf-8')
    const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
    const listLinks = [...contentFile.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}
    const objetoAPI = createAPI(listLinks, filesMD, contentFile)
    return objetoAPI
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

const getAllData = (list_href) => { return Promise.all(list_href.map(statusLinks)); }


const statusLinks = (URL) => {
    return axios
        .get(URL.link)
        .then(function (response) {
            return {
                link: URL.link,
                href: URL.href,
                text: URL.text,
                status: response.status,
                statustext: response.statusText
            };
        })
        .catch(function (error) {
            if (error.response) {
                return {
                    link: URL.link,
                    href: URL.href,
                    text: URL.text,
                    status: error.response.status,
                    statustext: "fail"
                };
            } else {
                return {
                    link: URL.link,
                    href: URL.href,
                    text: URL.text,
                    status: "fail",
                    statustext: "fail"
                }
            };
        });
}



module.exports={dirPath,listFilesIntoDirectory,findElements,getAllData }
