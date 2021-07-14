#!/usr/bin/env node

const initMdLinks = require('./index.js')
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const [, , ...args] = process.argv;
const path = args[0];

  
if(argv.validate ){
    let objMDtrue = initMdLinks.mdlinks(path,true);
    console.log(objMDtrue)
}else if (argv.stats) {
    let objMD = initMdLinks.mdlinks(path,false);
    const busquedalinks = objMD.reduce((acc, eleLink) => {
        acc[eleLink.link] = ++acc[eleLink.link] || 0;
        return acc;
      }, {});
      
      const duplicados = objMD.filter( (eleLink) => {
          return busquedalinks[eleLink.link];
      });

   console.log( ` Total: ${objMD.length}`)
   console.log( ` Unique: ${objMD.length-duplicados.length}`)
}