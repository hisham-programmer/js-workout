function is_palin(str){
    let rev="";
    for(let i=str.length-1; i>=0;i--){
        rev+=str[i];
    }
    if(rev==str){
        console.log("It is an Palindrome")

    }
    else{
        console.log("It is not an Palindrome")
    }
}
is_palin("Hello");