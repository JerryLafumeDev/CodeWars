// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
let wordArray = Array.from(String(s))
let first = (s.length/2)-1
let second = (s.length/2)
if(s.length%2==0){
    return wordArray[first].toString() + wordArray[second].toString() 
    }else{
    return wordArray[Math.floor(s.length/2)].toString()
    }
}