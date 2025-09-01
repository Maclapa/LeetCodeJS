let array = ["a","a","b","c"]


function mostFrequent(array){
    let mapping = array.reduce((acc, element)=>{
        acc[element] = acc[element] ? acc[element] +1: 1
        return acc
    }, {})

    return Object.entries(mapping).reduce((acc, element)=>{
        return element[1] > acc[1] ? element: acc
    },[null,0])[0]
}

console.log(mostFrequent(array))