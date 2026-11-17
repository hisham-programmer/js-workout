function revstr(str){
    if(str==="") return "";
    return revstr(str.slice(1))+str[0];
}
console.log(revstr("Hello"));