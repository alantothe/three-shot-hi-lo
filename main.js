const prompt = require('prompt-sync')({sigint: true});


console.log("I'm thinking of a number between 1 and 100. Try to guess it.")

let guess1 = Number(prompt(">"))

let answer = 75

if (guess1 < 75){
    console.log("Sorry, too low. Guess again")
    let guess2 = Number(prompt(">"))
    
    if (guess2 < 75){
    console.log("Sorry, too low! Guess again")
    let guess3 = Number(prompt(">"))
         if (guess3 < 75) {
            console.log("Sorry too low. I was thinking of 75.")
        }
        else if (guess3 > 75) {
            console.log("Sorry too high. I was thinking of 75.")

        }
        else if (guess3 === answer){
            console.log("correct!")
        }
        else{
            console.log("not a number")
        }
    }
    else if (guess2 > 75){
    console.log("Sorry, too high! Guess again")
    let guess3 = Number(prompt(">"))
      if (guess3 < 75) {
        console.log("Sorry too low. I was thinking of 75.")
    }
    else if (guess3 > 75) {
        console.log("Sorry too high. I was thinking of 75.")

    }
    else{
        console.log("correct")
    }
    }
    else if (guess2 === answer){
        console.log("correct!")
    }
    else {
        console.log("not a number")
    }

}

else if (guess1 > 75){
    console.log("Sorry, too high! Guess again")
    let guess2 = Number(prompt(">"))
    
        if (guess2 < 75){
        console.log("Sorry, too low! Guess again")
        let guess3 = Number(prompt(">"))
             if (guess3 < 75) {
                console.log("Sorry too low. I was thinking of 75.")
            }
            else if (guess3 > 75) {
                console.log("Sorry too high. I was thinking of 75.")
    
            }
            else if (guess3 === answer){
                console.log("correct!")
            }
            else{
                console.log("not a number")
            }
        }
        else if (guess2 > 75){
        console.log("Sorry, too high! Guess again")
        let guess3 = Number(prompt(">"))
          if (guess3 < 75) {
            console.log("Sorry too low. I was thinking of 75.")
        }
        else if (guess3 > 75) {
            console.log("Sorry too high. I was thinking of 75.")
    
        }
        else{
            console.log("correct")
        }
        }
        else if (guess2 === answer){
            console.log("correct!")
        }
        else {
            console.log("not a number")
        }
    
}

else if (guess1 === answer){
    console.log("correct!")
}

else {
    console.log("not a number")
}



