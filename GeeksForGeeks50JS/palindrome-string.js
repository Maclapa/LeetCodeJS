let myString = "abcba"

function validPalindrome(strinToCheck){
    let reversed = strinToCheck.split("").reverse().join("")
    return reversed === strinToCheck
}

console.log(validPalindrome(myString))