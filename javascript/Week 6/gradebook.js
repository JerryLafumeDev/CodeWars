// Complete the function so that it finds the average of the three 
// scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    let x = (s1+s2+s3)/3
    if(x >= 90){
      return 'A'
    }else if(x >= 80 && x < 90){
      return 'B'
    }else if(x >= 70 && x < 80){
      return 'C'
    }else if(x >= 60 && x < 70){
      return 'D'
    }else
      return 'F'
  }