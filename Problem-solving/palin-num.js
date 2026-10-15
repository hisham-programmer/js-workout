function palin_num(num){
    let org=num
    let rev=0;
    while(num>0){
        rev=rev*10+(num%10);
        num=Math.floor(num/10);
    }
    if(rev==org){
        console.log("It Is Palindrome")
    }
    else{
        console.log("It Is Not A Palindrome");
    }    
}
palin_num(1321)