let array = [1,2,3,4]

let addElement = (element, array) => {
    return [...array, element]
}

console.log(addElement(2, array))


let concatArrays = (array1, array2) => array1.concat(array2)

console.log(concatArrays([1,2,3], [2,3,4]))