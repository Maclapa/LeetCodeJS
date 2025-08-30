
var cancellable = function(fn, args, t) {
    let timeout = setTimeout(() => fn(...args), t);

    // Return a function to allow cancellation
    return () => clearTimeout(timeout);
};


let x = function abc(...args){
    console.log(...args)
}
cancellable(x, [1,2], 10)