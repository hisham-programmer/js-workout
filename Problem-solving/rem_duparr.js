function rem_dup(arr){
let seen =new Set();
for(let num of  arr){
    if(seen.has(num)){
        return num; 
    }
    seen.add(num);

}
}
console.log(rem_dup([1,2,2,3,3,4,5]));