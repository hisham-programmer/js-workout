console.log("Right Triangle");
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*";
        }

    console.log(row);
}
console.log("inverted Right Triangle");

for(let i=5;i>=1;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*";
        }

    console.log(row);
}

console.log("solid square");

for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=5;j++){
        row+="*";
        
    }
    console.log(row);
}
console.log("Hollow square");

for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=5;j++){
        if(i==2||i==3||i==4){
            if(j==1||j==5){
                row+="*";
            }
            else{
                row+=" ";
            }
        }
        else{
            row+="*";
        }
        
    }
    console.log(row);
}
