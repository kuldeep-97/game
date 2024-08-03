let randomNumber = null;
let player1Name = '';
let player2Name = '';
let player1Guesses = 0;
let player2Guesses = 0;
let playerTurn = 'player1';

function startGame() {
    player1Name = document.getElementById('player1Name').value.trim();
    player2Name = document.getElementById('player2Name').value.trim();

    if (!player1Name || !player2Name) {
        alert('Please enter names for both players.');
        return;
    }

    randomNumber = Math.floor(Math.random() * 100) + 1;
    player1Guesses = 0;
    player2Guesses = 0;

    document.getElementById('player1DisplayName').textContent = player1Name;
    document.getElementById('player2DisplayName').textContent = player2Name;

    document.querySelector('.setup').style.display = 'none';
    document.querySelector('.game').style.display = 'block';
    document.getElementById('player1Guess').focus();
}

function makeGuess(player) {
    const guessInput = document.getElementById(`${player}Guess`);
    const feedbackElement = document.getElementById(`${player}Feedback`);
    const guessCountElement = document.getElementById(`${player}GuessCount`);

    const guessedNumber = parseInt(guessInput.value);
    let feedback = '';

    if (player === 'player1') {
        player1Guesses++;
    } else {
        player2Guesses++;
    }

    if (guessedNumber > randomNumber) {
        feedback = 'Lower number please!';
    } else if (guessedNumber < randomNumber) {
        feedback = 'Higher number please!';
    } else {
        feedback = `Congrats ${player === 'player1' ? player1Name : player2Name}!!`;
        document.getElementById('player1Guess').disabled = true;
        document.getElementById('player2Guess').disabled = true;
        document.querySelectorAll('button').forEach(button => button.disabled = true); // Disable all buttons

        // Highlight winner
        document.querySelector('.player').classList.remove('highlight');
        document.querySelector(`.${player}`).classList.add('highlight');

        // Show winner image and message
        document.getElementById('winnerImage').style.display = 'block';
        document.getElementById('winnerMessage').textContent = `Congratulations ${player === 'player1' ? player1Name : player2Name}! You won!`;
    }

    feedbackElement.textContent = feedback;
    guessCountElement.textContent = `You guessed the number in ${player === 'player1' ? player1Guesses : player2Guesses} guesses`;

    // Switch turn
    if (feedback !== `Congrats ${player === 'player1' ? player1Name : player2Name}!!`) {
        playerTurn = (player === 'player1') ? 'player2' : 'player1';
        document.getElementById(`${playerTurn}Guess`).focus();
    }
}





// // Global variables to store player names and guess counts
// let player1Name, player2Name;
// let player1Guesses = 0, player2Guesses = 0;
// let currentPlayer = 'player1'; // Initially, player1 starts

// function startGame() {
//     player1Name = document.getElementById('player1Name').value;
//     player2Name = document.getElementById('player2Name').value;

//     // Display player names in the game interface
//     document.getElementById('player1DisplayName').textContent = player1Name;
//     document.getElementById('player2DisplayName').textContent = player2Name;

//     // Show game interface and hide setup interface
//     document.querySelector('.setup').style.display = 'none';
//     document.querySelector('.game').style.display = 'block';

//     // Initialize game state for player 1
//     document.getElementById('player1Guess').disabled = false;
//     document.getElementById('player2Guess').disabled = true;
// }

// function makeGuess() {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     let guessedNumber = parseInt(document.getElementById(`${currentPlayer}Guess`).value);

//     if (currentPlayer === 'player1') {
//         player1Guesses++;
//         document.getElementById('player1GuessCount').textContent = `${player1Name}'s Guesses: ${player1Guesses}`;
//     } else if (currentPlayer === 'player2') {
//         player2Guesses++;
//         document.getElementById('player2GuessCount').textContent = `${player2Name}'s Guesses: ${player2Guesses}`;
//     }

//     if (guessedNumber > randomNumber) {
//         document.getElementById(`${currentPlayer}Feedback`).textContent = 'Lower number please!';
//     } else if (guessedNumber < randomNumber) {
//         document.getElementById(`${currentPlayer}Feedback`).textContent = 'Higher number please!';
//     } else {
//         document.getElementById(`${currentPlayer}Feedback`).textContent = 'Congrats!!';
//         showWinner(currentPlayer);
//         return; // Exit function after showing winner
//     }

//     // Switch turn to the other player
//     if (currentPlayer === 'player1') {
//         currentPlayer = 'player2';
//         // Enable player 2's input and disable player 1's input
//         document.getElementById('player1Guess').disabled = true;
//         document.getElementById('player2Guess').disabled = false;
//     } else {
//         currentPlayer = 'player1';
//         // Enable player 1's input and disable player 2's input
//         document.getElementById('player1Guess').disabled = false;
//         document.getElementById('player2Guess').disabled = true;
//     }
// }

// function showWinner(player) {
//     let winnerName, loserName;
//     if (player === 'player1') {
//         winnerName = player1Name;
//         loserName = player2Name;
//     } else {
//         winnerName = player2Name;
//         loserName = player1Name;
//     }

//     // Display winner's message
//     document.getElementById('winnerMessage').textContent = `${winnerName} wins! ${loserName} lost.`;

//     // Display winner's image (example)
//     let winnerImg = document.getElementById('winnerImg');
//     winnerImg.src = 'winner.png'; // Replace 'winner.png' with your actual image path
//     winnerImg.style.display = 'block';

//     // Show the winner section
//     document.getElementById('winnerImage').style.display = 'block';

//     // Disable input fields and submit buttons after someone wins
//     document.getElementById('player1Guess').disabled = true;
//     document.getElementById('player2Guess').disabled = true;
// }
