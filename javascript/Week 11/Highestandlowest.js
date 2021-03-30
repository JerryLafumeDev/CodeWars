//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let x = numbers.split(" ").map(Number)
    let max = Math.max.apply(Math, x)
    let min = Math.min.apply(Math, x)
    let maxMin = `${max} ${min}`
    return maxMin
}