// Write a function which calculates the average of the numbers in a given list.

function find_average(arr) {
    // your code here
    let sum =  arr.reduce((ac, el) => ac+el, 0)
    let numOfnums = arr.length
    return sum/numOfnums;
}