function rev_num(num){
    let rev=0;
    while(num>0){
        let d=num%10;
        rev=rev*10+d;
        num=Math.floor(num/10);
    }
    return rev;

}
console.log(rev_num(1234));