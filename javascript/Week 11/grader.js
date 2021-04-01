//Create a function that takes a number as an argument and returns a grade based on that number.

function grader(score) {
    if(score > 1 || score < 0.6 ) return "F"
    else if(score >= 0.6 && score < 0.7) return "D"
    else if(score >= 0.7 && score < 0.8) return "C"
    else if(score >= 0.8 && score < 0.9) return "B"
    else return "A"
}