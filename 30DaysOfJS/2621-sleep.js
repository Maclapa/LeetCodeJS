// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. 
// It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

 

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100, true).then(() => {
  console.log(Date.now() - t); // 100
}).catch((err) => console.error("Caught rejection:", err));


async function sleep(millis, reject_me) {
    return new Promise((resolve, reject) =>
        {
            if(reject_me){
                return reject("reject that")
            }
        return setTimeout(resolve, millis)   
        }
    )
}

