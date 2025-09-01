let array = [1,2,2,2,2,3,5]

let new_array = (array) => [...new Set(array)]

console.log(new_array(array))