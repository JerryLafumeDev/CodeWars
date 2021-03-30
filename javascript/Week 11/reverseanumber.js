// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

function reverseNumber(n) {
    if(n < 0){
      return parseInt(Array.from(String(Math.abs(n)), Number).reverse().join("")) * -1
    }else{
      return parseInt(Array.from(String(n), Number).reverse().join(""))
    }
}