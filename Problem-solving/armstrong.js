function arm(num){
    let digits=String(num).length;
    let sum=0;
    let temp=num;
    while(temp>0){
        let digit=temp%10;
        sum+=Math.pow(digit,digits);
        temp=Math.floor(temp/10);
    }
    if(sum==num){
        console.log("It is an armstrong Number");

    }
    else{
        console.log("It Is Not An Armstrong Number");
    }
}
arm(9474);