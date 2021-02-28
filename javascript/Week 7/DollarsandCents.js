// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period

// first answer

function formatMoney(amount){
    let decimal = Math.round((amount - parseInt(amount))*100)/100
    let arr = Array.from(String(decimal.toString()), Number)
    let newArr = arr.slice(-2)
    let empty = []
    if(parseFloat(amount) == parseInt(amount)){
      empty.push("0")
      empty.push("0")
      return ("$" + parseInt(amount)) + "." + empty.join("")
    }else if(newArr.join(" ").includes('NaN')){
      newArr = newArr.slice(-1)
      newArr.push("0")
      let result = ("$" + parseInt(amount)) + "." + newArr.join("")
      return result
    }else if(newArr.length = 2){
      let result = "$" + (parseInt(amount) + parseFloat("." + newArr.join("")))
      return result
    }
  }

// second answer after getting it right but seeing theres a goddamn method for this 

function formatMoney(amount){
    return "$" + amount.toFixed(2)
}

// PAIN. 