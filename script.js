function d6() {
    var roll = math.ceil(Math.random() * 6);
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);



function getAnswer(lifesAnswers) {
    //declare the array
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    //roll = generate randomized math.floor from 1-19
    var roll = Math.floor(Math.random() * lifesAnswers.length);
        //take randomized index and define it by new name
        // var roll = (lifesAnswers[roll]);
        console.log(lifesAnswers[roll]);

}
getAnswer();
