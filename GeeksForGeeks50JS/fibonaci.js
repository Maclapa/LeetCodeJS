let memorize = {}
function fibonaci(number){
    if(memorize[number]){
        return memorize[number]
    }
    if(number == 1)
        return 1
    else if(number ===2){
        return 1
    }
    else{
        memorize[number] = fibonaci(number-1) + fibonaci(number-2)
        return memorize[number]
    }

}

console.log(fibonaci(8))
console.log(memorize)