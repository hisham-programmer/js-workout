const obj={
    name:"Hisham",
    age:"21",
}

function info(place){
    console.log(this.name)
    console.log(this.age)
    console.log(place)
}
info.apply(obj,["muthupet"]);