//Write a function filterLongWords that takes a string sentence and an integer n.

// Return a list of all words that are longer than n.

function filterLongWords(sentence, n) {
    return sentence.split(" ").filter(x => x.length > n)
}