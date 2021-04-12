// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

function isSameLanguage(list){
    let sameLang = 0
    for(let i = 0; i < list.length; i++) {
      let {language} = list[i]
      console.log(language)
        if (language === list[0].language) sameLang = sameLang + 1
      console.log(sameLang)
      }
    if(sameLang === list.length) return true
    else return false
  
}