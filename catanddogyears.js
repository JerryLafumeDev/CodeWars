// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

var humanYearsCatYearsDogYears = function(Years) {
    if(Years == 1){
      return [1, 15, 15]
    }else if(Years == 2){
      return [2, 24, 24]
    }
      return [Years, (Years-2) * 4 + 24, (Years-2) * 5 + 24]
   
}