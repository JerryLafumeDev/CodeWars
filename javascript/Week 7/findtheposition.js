// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    var result = "";
    for (var i = 0; i < letter.length; i++) {
      var code = letter.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return "Position of alphabet: " + result.slice(0, result.length - 1);
}