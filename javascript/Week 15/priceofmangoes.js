// shitty directions
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(q, p){
    let r = (q % 3)*p
    return (Math.floor(q/3))*2*p+r
    
}