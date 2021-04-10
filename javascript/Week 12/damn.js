let outcomes = ["is_blue", "is_green"]
let blueCounter = 0
let greenCounter = 0


population(500, 500)

function population(greenW, blueW){
    if(greenW <= blueW && greenW > 0) let pairs = greenW
    else if(blueW < greenW && blueW > 0)let pairs = blueW
    else let pairs = 0
      
    for(let i = 0; i < pairs; i++){

        let firstChild = outcome[Math.floor(Math.random()*2)]

        if(firstChild === "is_green") greenCounter += 1
        else if(firstChild === "is_blue"){
          blueCounter += 1
          nextChild(outcome[Math.floor(Math.random()*2)])
          function nextChild(nextSibling){
                if(nextSibling == "is_green"){
                    greenCounter += 1
                }else if(nextSibling == "is_blue"){
                    blueCounter += 1
                    nextChild(outcome[Math.floor(Math.random()*2)])
                }
            }     
          }
        } 
    return blueCounter, greenCounter
}