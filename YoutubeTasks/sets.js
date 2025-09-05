let myarr= [1,2,2,2,2,2]

let myset = new Set(myarr)

myset.add({a:"x"})
myset.add({a:"x"})
myset.add({b:"x"})
myset.delete({a:"x"})



let myMap = new Map([[1,2], [2,3]])

myMap.set(1,1)
