// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    for(x = 0; x < arr.length; x++)
      if(Math.abs(arr[x]) !== arr[x]){
         delete arr[x]
        if(arr[x] == undefined){
          arr[x] = 0
        }
      }
    console.log(arr)
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}