function sumnum(num){
    if(num<10){
        return num;
    }
    return num%10+sumnum(Math.floor(num/10));

}
console.log(sumnum(1234));