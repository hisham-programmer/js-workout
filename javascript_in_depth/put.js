fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 1, title: "Hii", body: "changed", userId: 1 })
})
  .then(function (res) { return res.json(); })
  .then(function (data) { console.log(data); })
  .catch(function (error) { console.log(error.message); });