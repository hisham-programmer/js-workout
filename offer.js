let timestramp =new Date();
let month=timestramp.getMonth();
let year = timestramp.getFullYear();
let currentDate=new Date(year,month,10);
let startdate=new Date(year,month,10);
let expiryDate=new Date(year,month,15);
let price=1000;
if(currentDate>=startdate && currentDate<expiryDate){
    console.log("20% Offer");
}
else{
    console.log("Offer Not Available");
}