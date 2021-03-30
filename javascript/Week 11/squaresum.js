// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    console.log(numbers)
    let x = ((numbers[0]*numbers[0])-numbers[0])
    if(numbers[0] == undefined){
      return 0
    }else{
       return numbers.reduce((accumulator, currentValue) =>  accumulator + Math.pow(currentValue,2)) + x
    }
}