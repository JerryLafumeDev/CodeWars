// Given a non-empty array of integers,
//  return the result of multiplying the values together in order

function grow(x){
    let result = 1
    for(let y = 0; y < x.length; y++){
       result = result * x[y]
      }
      return result
}
    