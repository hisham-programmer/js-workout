const obj={
    name:"Hisham",
    age:"21",
}

function info(){
    console.log(this.name)
    console.log(this.age)
}
info.call(obj);