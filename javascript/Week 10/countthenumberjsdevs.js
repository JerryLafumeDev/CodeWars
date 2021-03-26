// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

function countDevelopers(list) {
    let x = 0
    for(let i = 0; i < list.length -1; i++){
      console.log(Object.getOwnPropertyDescriptor(list[i], 'continent').value)
      if(Object.getOwnPropertyDescriptor(list[i], 'continent').value === 'Europe' && Object.getOwnPropertyDescriptor(list[i], 'language').value === 'JavaScript'){
        x = x + 1
      }
    }
    return x
}