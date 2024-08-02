const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) +1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user Quit");
        break;
    }

    if(guess == random){
        console.log("You are Right! Congrats");
        break;
    }
    
    else if(guess < random){
        guess = prompt("your guess too small, please try again")
    } 
    
    else{
        guess = prompt("your guess too large, please try again");
    }

}

// document.getElementById("demo").innerHTML=random;
// console.log(random); 