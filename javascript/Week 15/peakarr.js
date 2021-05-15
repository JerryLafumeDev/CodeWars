// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

function peak(arr){
    let sum = arr.reduce((ac, el)=> ac + el, 0)
    let find = 0
    
    for(let i =0; i<arr.length; i++){
      if(find === (sum - arr[i])/2){
        return i; 
      }
      find += arr[i]
    }
     return -1
   }