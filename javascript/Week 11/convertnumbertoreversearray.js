//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let arr =[]
    for(let i = 0; i< n.toString().length; i++){
      arr.unshift(parseInt(n.toString().charAt(i)))
    }
    return arr
}