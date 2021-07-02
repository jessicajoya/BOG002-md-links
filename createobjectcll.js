// const path = require('path');
// const fs = require('fs')

// const dirPath = path.resolve(__dirname); // encuentro el path actual

// const findFilesMd = (inputPath) => {

//   let files = fs.readdirSync(inputPath);
//   const extFileMD = (file) => { return path.extname(file).toLowerCase() === '.md' }
//   const mdFilesList = files.filter(extFileMD);
//   // console.log(mdFilesList)
//   return mdFilesList
// }
// const arrFilesMD = findFilesMd(dirPath)
// // console.log(arrFilesMD)
// //////////////////////////////////////////////////////////////////////////////////////////////leer el archivo indicado
// const leerMD = (ruta) => {
//   //creando una instancia 
//   return new Promise((resolve, reject) => {

//     fs.readFile(ruta, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//         return
//       }
//       // console.log(data);
//       const expRegLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
//       const listLinks = [...data.match(expRegLinks)];//recorrerlo map retund listlinks.map(){retorno el objeto}
//       // console.log(listLinks)
//       let objectlinks = [];
//       for (let i = 0; i < listLinks.length; i++) {

//         let indice = data.indexOf(listLinks[i])
//         let sliceIndice = data.substr(0, indice);
//         let indiceApertura = sliceIndice.lastIndexOf("[") + 1;
//         let indicecierre = sliceIndice.lastIndexOf("]");

//         let objectlink =
//         {
//           link: listLinks[i],
//           href: ruta,
//           text: data.substring(indiceApertura, indicecierre)
//         }
//         objectlinks.push(objectlink)
//       }
//       // console.log(objectlinks) //como lo saco de aqui!
//       resolve(objectlinks)
//     })
//   })

// }

// // consuminla promesa con .then
// // leerMD('README.md')
// // .then((data)=>{console.log(data)})


// const fileOrDir = (path) => {

//   fs.stat('dddddddddd', (err, stats) => {

//     if (err) {
//       console.log('el path ingresado es incorrecto');
//     }

//     else if (stats.isFile() === 'true') {

//       console.log('es un file');
//     }
//     else if (stats.isDirectory() === 'true') {
//       console.log('es un directorio?');
//       //  const arrFilesMD = findFilesMd(dirPath)
//       //  console.log(arrFilesMD)
//       // return fileOrDir();
//     }
//   });
//   // console.log(fileOrDir(dirPath))
// };
// let esNum = numero=>(Array.isArray(arrnums)===false)
const arrnums = [1,[2,3,4,[5,6],7],8,9,[10,11]]
// console.log(arrnums.length)
// console.log(arrnums[2])
// console.log(arrnums[2][2])
// console.log(arrnums[2][2][0])

// const recNums=(arr,i,objeto)=>{
//     // console.log(arr[i]);
   
//     const objetoInterno={...objeto,[i]:Array.isArray(arr[i])}
//     i++;
//     if(i<=arr.length){
//      return recNums(arr,i,objetoInterno)
//     }
//     return objeto;
//   }
  
//   const newobject = recNums(arrnums,0,{});
// console.log(newobject)



// console.log(Array.isArray(arrnums))
// if(arrnums==='true'){
//   const recNumspor = arrtodosnums(arrnums,0,[]);
// }
// else{
//   console.log('es un numero')
// }

// 

// const recNumspor = arrtodosnums(arrnums,0,[]);
// console.log(recNumspor)



//Array.isArray(arrnums) para revisar
// const recNums=(arr,i,objeto)=>{
//   // console.log(arr[i]);
 
//   const objetoInterno={...objeto,[i]:arr[i]}
//   i++;
//   if(i<=arr.length){
//    return recNums(arr,i,objetoInterno)
//   }
//   return objeto;
// }

// const newobject = recNums(arrnums,0,{});
// console.log(newobject)

// const recNumspor2=(arr,i,array)=>{
//   // console.log(arr[i]);
//   // array.push(arr[i]*2)
//   const arrnums = [...array,arr[i]*2];

//   i++;
//   if(i<arr.length){
//    return recNumspor2(arr,i,arrnums)
//   }
//   return arrnums;
// }

// const recNumspor = recNumspor2(arrnums,0,[]);
// console.log(recNumspor)