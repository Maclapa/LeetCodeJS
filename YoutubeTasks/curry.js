// let multiply = a => b => a*b

// console.log(multiply(3))


let curry = function(fn){
    let functionLength = fn.length
    return function f1(...args){
        if(args.length< functionLength){
            console.log("Noth enougth args")
            return function f2(...moreArgs){
                let newArgs = args.concat(moreArgs)
                return f1(...newArgs)
            }
        }
        else{
            return fn(...args)

        }
    }
}

let myfunc = curry((a,b,c)=> a+b+c)

console.log(myfunc(1,3)(2))