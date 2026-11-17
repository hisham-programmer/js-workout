function two_sum(arr,num){
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i]+arr[j]==num){
                return {i,j};
            }

        }
    }
    return [];


}
console.log(two_sum([1,2,3,4,5],7));