// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arr) {
    return arr.reduce((ac,el)=> el === true? ac + 1: ac + 0)
}