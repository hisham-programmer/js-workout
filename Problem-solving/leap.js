function leap(num){
if(num%4==0&&num%100!=0||num%400==0){
    console.log("It is An Leap Year");
}
else{
    console.log("It is Not An Leap Year");
}
}
leap(1900);