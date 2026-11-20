let count=0;
let vowels=['a','e','i','o','u'];
let str='credo';
for(let i=0;i<vowels.length;i++){
    if(str.includes(vowels[i])){
        count++;
    }
}
console.log(count);