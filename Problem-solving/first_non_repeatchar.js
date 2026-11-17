function non_repeat(str){
let freq={};
for(let char of str){
    freq[char]=(freq[char]||0)+1;
}
for(let i in str){
    if(freq[str[i]]==1){
        return i;

    }
}
return -1;

}
console.log(non_repeat("loveleetcode"));