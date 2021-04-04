// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

function well(x){
    var counter = 0
  x.forEach(el => el.forEach(el2 =>{
   if(el2.toString().toLowerCase() == "good"){
     counter = counter + 1
   } else{
     counter = counter + 0
   }
  }))
     if(counter >= 1 && counter <= 2){
     return "Publish!"
   }else if(counter > 2){
     return "I smell a series!"
   }else{
     return"Fail!"
   }
}