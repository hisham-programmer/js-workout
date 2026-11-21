try{
    throw new Error("Something went Wrong");
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("Always Execute");
}

fetch("https://jsonplaceholder.typicode.com/invalid").then(
    function(res){
        if(!res.ok){
            throw new Error("req failed (status "+res.status+")");
        }
        return res.json();
    }
).then( function(data){
    console.log(data.title);
}).catch(
    function(error){
        console.log(error.message);

    }
);