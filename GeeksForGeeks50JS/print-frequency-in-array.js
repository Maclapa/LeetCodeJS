let freq = {}
let array = [1,1,1,2,2,3,3]

for(i of array){
    if(!freq[i]){
        freq[i] = 1
    }
    else{
        freq[i] += 1
    }
}
console.log(freq)