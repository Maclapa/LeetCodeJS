function one(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("ABC"), 100)
        setTimeout(()=> reject("ERror"), 10)
    })
}

function two(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("DEF"), 100)
    })
}


promise_one = one()

promise_one.then(two).then((message)=>console.log(message)).catch((error)=>console.log(error))