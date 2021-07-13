
const { dirPath, listFilesIntoDirectory, findElements, getAllData } = require('./functions.js')

function mdlinks(path, validate) {
    val = validate || false;
    
    const arrayFilesMd = listFilesIntoDirectory(path);
    const createarrElements = arrayFilesMd.flatMap(md => findElements(md))
    if (!validate){ return (createarrElements) 
    }else{
    
    return getAllData(createarrElements).then(console.log).catch(console.log)
    }
  
}

const MDlinks = mdlinks(dirPath,false)
console.log(MDlinks)
