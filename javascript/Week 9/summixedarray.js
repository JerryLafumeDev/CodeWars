// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    if(x.length == 1){
      return parseInt(x[0])
    }else{
    return x.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue))
    }
}