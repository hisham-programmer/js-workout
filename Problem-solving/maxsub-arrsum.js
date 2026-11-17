function max_subarrsum(arr){
    let max=arr[0];
    let current=arr[0];
    for(let i=1;i<arr.length;i++){
        current=Math.max(arr[i],current+arr[i]);
        max=Math.max(max,current);
    }
    return max;

}
console.log(max_subarrsum([-3,-1,-2]));