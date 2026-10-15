function prime_check(num){
    let check=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            check++;
        }
    }
    if(check==2){
        console.log("It Is An Prime Number");
    }
    else{
        console.log("It Is Not An Prime Number");
    }

}
prime_check(2)