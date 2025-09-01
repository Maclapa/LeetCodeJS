let counter = () => {
    let count = 0
    return{
        getCount: () => console.log(count),
        increaseCount: () => console.log(++count)
    }
}

let myCounter = counter()

myCounter.getCount()
myCounter.increaseCount()
myCounter.getCount()
