// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    let x = ((numbers[0]*numbers[0])-numbers[0])
    return numbers.reduce((accumulator, currentValue) =>  accumulator + Math.pow(currentValue,2)) + x
}