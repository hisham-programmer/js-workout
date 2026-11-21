Promise.resolve(5).then(function(n){return n*2;}).then(function(n){return n+1;}).then(function(n){console.log(n);});
// callback hell fixed using chaining
function wait(ms){
return new Promise(function(resolve){setTimeout(resolve,ms);});
}
wait(1000).then(function(){console.log("task1");return wait(1000);}).then(function(){console.log("task2");return wait(1000);}).then(function(){console.log("task3");});