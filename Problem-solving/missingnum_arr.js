function missing_num(arr){
    let set = new Set(arr);
    for(let i=0;i<=arr.length;i++){
        if(!set.has(i)){
            console.log(i);
        }
    }
}
missing_num([0,1,3,5]);