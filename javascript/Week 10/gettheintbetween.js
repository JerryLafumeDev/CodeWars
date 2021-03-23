//Build a function that can get all the integers between two given numbers.

function range(startNum, endNum){  
    let arr = []
    for(let i = startNum; i < endNum; i++){
       arr.push(i)
       }
      arr.shift()
      return arr
};  