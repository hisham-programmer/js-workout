let promise=new Promise(
    function(resolve,reject){
        let ok=true;
        if(ok){
            resolve("Success");
        }
        else{
            reject("Failed");
        }
    }
);
promise.then(function(value){
    console.log(value);
});
promise.catch(function(error){
    console.log(error);
});
promise.finally(
    function(){
        console.log("Done");
    }
);