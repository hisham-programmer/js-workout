fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data.title);
})
.catch(function(error) {
    console.log(error.message);
});