// Variables for hidden word and turns
let hiddenWord = "javascript";
let turns = 3;

// This function compares two words:
// The first word is the guessed word by the player and the second word is the game's hidden word
function verifyTurn(guess,hiddenWord) {
    if(guess.toLowerCase()===hiddenWord){
        return true;
    }
    return false;
}

// Main function to play the hangman game
// Alerts the player to promt for the guessed word
// Compares the guessed word with the hidden word
// Notify succesfull comparisson or reduces turns for player
function playHangman(){
    alert("Welcome to HANGMAN");
    alert("You have 3 guesses");
    alert("-HINT- The hidden word is a software development language");
    while (turns>0) {
        let guess = prompt("Enter your guess: ");
        if(verifyTurn(guess,hiddenWord)){
            alert("You got it!");
            break;
        } else { 
            turns--;
            if(turns>0){
                alert(`Wrong, you still have ${turns} left`);
            } else {
                alert(`You run out of guesses, the hidden word is: ${hiddenWord}`);
            }
        }
    }
}

// Call the main game function
playHangman();