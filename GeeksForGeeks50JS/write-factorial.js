
function solve(){
    let result = 1
    return function factorial(number){
        if(number==1){
            return result
        }
        else{
            result = result*number
            return factorial(number-1)
        }
    }
}
console.log(solve()(5))