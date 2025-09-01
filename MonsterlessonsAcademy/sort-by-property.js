let array = [
    {
        name: "I am John"
    },
    {
        name: "I am Cindy"
    },
    {
        name: "I am Adam"
    }
]

array.sort((a, b)=>{
    let name_a = a.name.split(" ")[2];
    let name_b = b.name.split(" ")[2];
    return name_a < name_b ? -1:1
})

console.log(array)