const users = [
    {
        id: 1,
        username: "Jack",
        isActive: true,
    },
    {
        id: 2,
        username: "John",
        isActive: true
    },
    {
        id: 3,
        username: "Adele",
        isActive: false
    }
]
// let names = []

// let x = (array) => array.forEach(element => {names.push(element.username)});
// x(users)
// console.log(names)

// let new_names = users.map(user => user.username)
// console.log(new_names)

// let new_users = users.filter((user) =>user.username === "Adele").map((user) => user.username)
// console.log(new_users)

let new_users = users.sort((a,b)=> (a.id>b.id ? -1:1)).filter((user)=> !user.isActive).map((user)=> [user.username, user.id])
console.log(...new_users)