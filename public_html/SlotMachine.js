var symbols = ["cherries", "oranges", "plums", "bells", "melons", "bars"];

function select(number, start){
    return random = Math.floor(Math.random() * number) + start;
}

function win(userBet, match){
    return winnings = userBet * match;
}

var userBet = Number(prompt("Enter your bet:"));

while (isNaN(userBet) || userBet < 0){
    userBet = Number(prompt("Please enter a number greater than zero"));
}

var reels = [];

while(reels.length < 3){
    reels.push(symbols[select(symbols.length, 0)]);
}

alert(reels.join(", "));

if(reels[0] === reels[1] || reels[0] === reels[2]){
    if(reels[1] === reels[2]){
        win(userBet, 3);
        alert("You won " + winnings);
    }
    else{
        win(userBet, 2);
        alert("You won " + winnings);
    }
}
else{
    alert("You lost.");
}
