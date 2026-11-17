function count_digits(num){
    num=Math.abs(num);
    let count=0;
    while(num>0){
        let temp=num%10;
        count++;
        num=Math.floor(num/10);
}
return count;
}
console.log(count_digits(12343456788999867575))