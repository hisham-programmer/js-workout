function vow_cons(str){
let vowels="aeiou";
let v=0,c=0;
for(let ch of str.toLowerCase()){
    if(vowels.includes(ch)){
        v++;
    }
    else{
        c++
    }
    
}
return {Vowels: v, Consonant: c };
}
console.log(vow_cons("Hisham"));