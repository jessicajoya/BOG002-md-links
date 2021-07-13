#!/usr/bin/env node

const initMdLinks = require('./index.js')
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const [, , ...args] = process.argv;
const path = args[0];

console.log(path)//entrega un objeto

if(argv.validate || argv.v){
    
    console.log(initMdLinks.mdlinks(path,true))
}
