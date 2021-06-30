const path = require('path');
const fs = require('fs')




const dirPath = path.resolve(__dirname); // path to your directory goes here

const findFilesMd=(inputPath)=>{
    
let files = fs.readdirSync(inputPath);
const extFileMD=(file)=>{return path.extname(file).toLowerCase() === '.md'}
const mdFilesList = files.filter(extFileMD);
return mdFilesList
}
const arrFilesMD=findFilesMd(dirPath)


const findLinks = (filesMD) =>{
    
    let contentFile=fs.readFileSync(filesMD, 'utf-8')
    
    const expRegLinks =/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
    
    
    const listLinks = [...contentFile.match(expRegLinks)];
    let objectlinks = [];
    for (let i=0; i<listLinks.length;i++){
    
    let indice = contentFile.indexOf(listLinks[i])
    let sliceIndice = contentFile.substr(0,indice);
    let indiceApertura = sliceIndice.lastIndexOf("[")+1
    let indicecierre = sliceIndice.lastIndexOf("]")
    // console.log(sliceIndice)
    // console.log(indice)

    let objectlink =
    {
        link : listLinks[i],
        href : filesMD,
        text : contentFile.substring(indiceApertura,indicecierre)
    }
    objectlinks.push(objectlink)
}
   return objectlinks;

}

const arrayLinks =arrFilesMD.flatMap(md=>findLinks(md));
console.log(arrayLinks)

// let mdLinks = [];
// mdLinks.push(arrFilesMD.map(md=>findLinks(md)))
// console.log(mdLinks)


