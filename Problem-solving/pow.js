function pow(base,exp){
    let result=1;
    for(let i=1;i<=Math.abs(exp);i++){
        result*=base;
    }
    return exp< 0 ? 1/result:result;

}
console.log(pow(2,-4));
console.log(pow(2,4));