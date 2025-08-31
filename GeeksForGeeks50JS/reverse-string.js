let myString = "abcde"

function reverseString(toBeReversed) {
    let newString = ""
    for(let i = toBeReversed.length-1; i>=0; i--){
        newString += toBeReversed[i]
    }
    return newString
}

console.log(reverseString(myString))


function reverseString(str) 
{
  return str.split("").reverse().join("");
}

console.log(reverseString("GeeksForGeeks"));