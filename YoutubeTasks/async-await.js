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

dostuff()