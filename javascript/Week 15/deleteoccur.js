// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr,n){
    // ...
    let counts = {}
    return arr.reduce((newArr, el)=>{ 
      if(counts[el]){
        counts[el] += 1
      }else{
        counts[el] = 1
      }
      
      if(counts[el] <= n){
        newArr.push(el)
      }
      return newArr
      console.log(newArr)
    }, [])
  }