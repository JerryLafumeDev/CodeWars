// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
    if(a == "" && b !==""){
      a = 0
      return "" + (parseInt(a) + parseInt(b))
    }else if(b == "" && a !== "" ){
      b = 0
      return "" + (parseInt(a) + parseInt(b))
    }else if((b == "") && (a=="")){
      a = 0
      b = 0
      return "" + (parseInt(a) + parseInt(b))
    }
    else{
      return "" + (parseInt(a) + parseInt(b))
    }
}