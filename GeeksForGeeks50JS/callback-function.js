function callback (fn, name){
    fn(name)
}

function printname(name){
    console.log(name)
}

callback(printname, "abcd")