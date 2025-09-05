function mypromise () {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject("abc"), 100)
    })
}
async function dostuff() {
    try{    
        let my_value = await mypromise()
        console.log(my_value)
    }
    catch{
        console.log("Error")
    }
    
}

// dostuff()


function myfunction(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{console.log(100), reject()}, 200)
    })
}

async function doStuffTwo(){
    await myfunction()
    console.log("200")
}

doStuffTwo()