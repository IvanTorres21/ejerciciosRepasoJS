const prompt = require('prompt-sync')();
var coins = 5;
var opt;
do {
    console.log("You have " + coins + " coins.");
    opt = prompt('Continue playing? (y/n)');
    if (opt === 'y' || opt === 'Y'){
        coins--;
        play();
    }

} while(opt != 'N' && opt != 'n' && coins > 0);

if (coins == 0) {
    console.log("No more coins left!")
}

/**
 * This function chooses at random 3 numbers
 * and sees how many are the same.
 */
function play(){

    var repeated = 0;
    var a = Math.floor(Math.random()*5);
    var b = Math.floor(Math.random()*5);
    var c = Math.floor(Math.random()*5);
    if (a == b && a == c) repeated = 3;
    else if ( a === b || a === c || b === c) repeated = 2;
    printPlay(a, b, c, repeated);

}
/**
 * This function interprets the numbers from
 * play and prints them with symbols
 */
function printPlay(a, b, c, res){

    var line  = "";
    line += setEmote(a) + setEmote(b) + setEmote(c);
    console.log(line.padStart(8));
    if (res === 3) {
        coins += 10;
        console.log("You won 10 coins! Amazing!");
    } else if (res === 2) {
        coins += 1;
        console.log("You've recovered your coin!");
    } else {

        console.log("Oh no! You lost...");
    }
    
}

/**
 * Function that makes the numbers become the symbols that
 * represent each emote (Couldn't find emotes that I could copy)
 */
function setEmote(num){

    var emote;
    switch(num){
        case 0:
            emote = 'H'; //Heart
            break;
        case 1:
            emote = 'D'; //Diamond
            break;
        case 2:
            emote = 'A'; //Anchor
            break;
        case 3: 
            emote = 'B'; //Bell
            break;
        case 4:
            emote = 'L'; //Lemon
            break;
    }
    return emote;
}