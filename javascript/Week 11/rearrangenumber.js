//Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer. Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

var maxRedigit = function(num) {
    if (num <= 0 || num.toString().length > 3 || num.toString().length < 3) return null
    return parseInt(Array.from(String(num), Number).sort().reverse().join(""))
};