function intersec_arr(arr1,arr2){
    let set1=new Set(arr1);
    let result=new Set();
    for(let num of arr2){
        if(set1.has(num)){
            result.add(num);
        }
    }
    return [...result]

}
console.log(intersec_arr([1,2,3,1],[1,1,2,2]));