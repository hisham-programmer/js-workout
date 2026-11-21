console.log("1.start");
setTimeout(function(){ console.log("4.TimeOut");},0);
Promise.resolve().then(function(){ console.log("3.Promise");});
console.log("2.End");