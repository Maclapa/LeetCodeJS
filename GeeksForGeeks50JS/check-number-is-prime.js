function checkPrime(number){
    for(i=number-1; i>1; i--){
        if(number%i==0){
            return false
        }
    }
    return true
}

console.log(checkPrime(8))