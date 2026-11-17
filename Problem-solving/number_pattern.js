for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+= i+"";
        }

    console.log(row);
}
console.log("=============")
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+= j+"";
        }

    console.log(row);
}
console.log("=============")
for(let i=5;i>=1;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row+= j+"";
        }

    console.log(row);
}
console.log(" floyds triangle =============")
let num=1;
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row += num+"";
        num++;

        }

    console.log(row);
}