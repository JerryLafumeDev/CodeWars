// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

function paul(x){
    let counter = 0
    console.log(x)
    for(let elements of x){
      if(elements == "kata") counter += 5
      else if (elements == "Petes kata") counter += 10
      else if (elements == "eating")counter += 1
      else counter += 0
     }
      if(counter < 40) return "Super happy!"
      else if(counter < 70 && counter >= 40 ) return "Happy!"
      else if(counter < 100 && counter >=70) return "Sad!"
      else return "Miserable!"
}