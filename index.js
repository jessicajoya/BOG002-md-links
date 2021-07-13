
const {dirPath,absolutePath,listFilesIntoDirectory,findElements,getAllData } = require('./functions.js')


function mdlinks(inputpath, validate) {
    val = validate || false;
   
    const absolutepath = absolutePath(inputpath)
    const arrayFilesMd = listFilesIntoDirectory(absolutepath);
    const createarrElements = arrayFilesMd.flatMap(md => findElements(md))
    if (!validate) {
        return (createarrElements)
    } else {
        return getAllData(createarrElements).then(console.log).catch(console.log)
    }

}

// module.exports={mdlinks}
const MDlinks = mdlinks(dirPath)
console.log(MDlinks)
