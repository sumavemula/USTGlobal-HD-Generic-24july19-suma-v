function fact(num){
    if(num===0 || num===1){
        return 1;
    }
    else{
        return fact(num-1)*num;
    }
}
let res = fact(6);
console.log(res);