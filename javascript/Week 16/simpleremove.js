// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

function solve(arr){
    //..
//   let set = [...new Set(arr)] 
//   return set
     return arr.filter((val,i) => arr.lastIndexOf(val) == i);


}