function rem_dup(str){
    let result="";
    for(let ch of str){
        if(!result.includes(ch)){
            result+=ch;

        }
        
    }
    return result;

}
console.log(rem_dup("hisham"));