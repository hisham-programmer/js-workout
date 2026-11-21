fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
        method:"DELETE"
    }
)
.then(function(res){console.log("deleted,status:",res.status);})
.catch(function(error){console.log(error.message);});