async  function getpost(){
    let res=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data= await res.json();
    console.log(data.title);

}
getpost();