function getComputerChoice() {
    random = Math.random();
    if (random < 0.3) console.log("rock")
    else if (random < 0.6) console.log("paper")
    else console.log("scissor");  
}

function getHumanChoice() {
    return Window.prompt("What\'s your choice?");
}

getHumanChoice();