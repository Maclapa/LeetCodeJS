let mylist= [1,2,3,4]

mylist.forEach(square)

function square(element, index, array){
    array[index] = element*element
}

console.log(mylist)

let mystring = "abcdd"

mystring.forEach(capitalize)

function capitalize(element, index, array){
    array.cha = element +1
}

console.log(mystring)