function iterateArray(arraicito,arr)  {
    for (let i = 0; i<arraicito.length; i++){//
        if (Array.isArray(arraicito[i])){
            iterateArray(arraicito[i],arr)
        }else{
            arr.push(arraicito[i]);
        }
    }
    return arr;
}
let nums = [2,[1,3,[4,5],6,7,8]];
let arrFinal = iterateArray(nums,[]);
console.log(arrFinal);
