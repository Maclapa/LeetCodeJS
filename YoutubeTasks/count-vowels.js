let vowels = ["a","e", "i", "o", "u"]

let str = "abasdasfsdfasdf"

function countVowels(str, vowels){
    let splited = str.split("")
    return splited.reduce((acc, elem)=>{
        return vowels.includes(elem) ? ++acc: acc
},0)
}

console.log(countVowels(str, vowels))