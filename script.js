const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const result = document.querySelector('#result');
const playerScoreCount = document.querySelector('#playerScore');
const computerScoreCount = document.querySelector('#computerScore');
const resetButton = document.querySelector('#reset');
const rematch1 = document.querySelector('#rematch1');
const rematch2 = document.querySelector('#rematch2');
const winningScoreSelect = document.querySelector('#playUpto');
const closeButton1 = document.querySelector('.close-btn1');
const closeButton2 = document.querySelector('.close-btn2');

let playerValue = 0;
let computerValue = random();
let playerScore = 0;
let computerScore = 0;
let winningScore = 1;
isGameOver = false;

//generates a random number between 1 to 3
function random() {
    return Math.floor(Math.random() * 3) + 1;
}

rock.addEventListener('click', () => {
    document.getElementById('playerScissor').style.display = "none";
    document.getElementById('playerPaper').style.display = "none";
    document.getElementById('playerRock').style.display = "none";
    document.getElementById('compScissor').style.display = "none";
    document.getElementById('compPaper').style.display = "none";
    document.getElementById('compRock').style.display = "none";
    computerValue = random();
    document.getElementById('playerRock').style.display = "block";

    if (computerValue == 1) {
        result.textContent = 'DRAW';
        playerScoreCount.textContent = playerScore;
        computerScoreCount.textContent = computerScore;
        document.getElementById('compRock').style.display = "block";

    }
    else if (computerValue == 2) {
        result.textContent = 'LOST';
        computerScore++;
        playerScoreCount.textContent = playerScore;
        computerScoreCount.textContent = computerScore;
        document.getElementById('compPaper').style.display = "block";
    }
    else if (computerValue == 3) {
        result.textContent = 'WON';
        playerScore++;
        playerScoreCount.textContent = playerScore;
        computerScoreCount.textContent = computerScore;
        document.getElementById('compScissor').style.display = "block";
    }
    if (playerScore > computerScore) {
        playerScoreCount.style.color = '#00C851';
        computerScoreCount.style.color = '#ff4444';
    }
    else {
        computerScoreCount.style.color = '#00C851';
        playerScoreCount.style.color = '#ff4444';
    }

    checkGame();
    if (isGameOver) {
        if (playerScore > computerScore) {
            document.getElementById('winnerBox').style.display = "block";
        }
        if (computerScore > playerScore) {
            document.getElementById('looserBox').style.display = "block";
        }
    }
})
paper.addEventListener('click', () => {
    document.getElementById('playerScissor').style.display = "none";
    document.getElementById('playerPaper').style.display = "none";
    document.getElementById('playerRock').style.display = "none";
    document.getElementById('compScissor').style.display = "none";
    document.getElementById('compPaper').style.display = "none";
    document.getElementById('compRock').style.display = "none";
    computerValue = random();
    document.getElementById('playerPaper').style.display = "block";
    if (computerValue == 1) {
        result.textContent = 'WON';
        playerScore++;

        playerScoreCount.textContent = playerScore;
        computerScoreCount.textContent = computerScore;
        document.getElementById('compRock').style.display = "block";

    }
    else if (computerValue == 2) {
        result.textContent = 'DRAW';
        playerScoreCount.textContent = playerScore;
        computerScoreCount.textContent = computerScore;
        document.getElementById('compPaper').style.display = "block";
    }
    else if (computerValue == 3) {
        result.textContent = 'LOST';
        computerScore++;
        playerScoreCount.textContent = playerScore;
        computerScoreCount.textContent = computerScore;
        document.getElementById('compScissor').style.display = "block";
    }
    if (playerScore > computerScore) {
        playerScoreCount.style.color = '#00C851';
        computerScoreCount.style.color = '#ff4444';
    }
    else {
        computerScoreCount.style.color = '#00C851';
        playerScoreCount.style.color = '#ff4444';
    }
    checkGame();
    if (isGameOver) {
        if (playerScore > computerScore) {
            document.getElementById('winnerBox').style.display = "block";
        }
        if (computerScore > playerScore) {
            document.getElementById('looserBox').style.display = "block";
        }
    }
})
scissor.addEventListener('click', () => {
    document.getElementById('playerScissor').style.display = "none";
    document.getElementById('playerPaper').style.display = "none";
    document.getElementById('playerRock').style.display = "none";
    document.getElementById('compScissor').style.display = "none";
    document.getElementById('compPaper').style.display = "none";
    document.getElementById('compRock').style.display = "none";
    computerValue = random();
    document.getElementById('playerScissor').style.display = "block";
    if (computerValue == 1) {

        result.textContent = 'LOST';

        computerScore++;
        computerScoreCount.textContent = computerScore;
        document.getElementById('compRock').style.display = "block";

    }
    else if (computerValue == 2) {

        result.textContent = 'WON';
        playerScore++;
        playerScoreCount.textContent = playerScore;
        document.getElementById('compPaper').style.display = "block";
    }
    else if (computerValue == 3) {

        result.textContent = 'DRAW';
        document.getElementById('compScissor').style.display = "block";
    }
    if (playerScore > computerScore) {
        playerScoreCount.style.color = '#00C851';
        computerScoreCount.style.color = '#ff4444';
    }
    else {
        computerScoreCount.style.color = '#00C851';
        playerScoreCount.style.color = '#ff4444';
    }
    checkGame();

    if (isGameOver) {
        if (playerScore > computerScore) {
            document.getElementById('winnerBox').style.display = "block";
        }
        if (computerScore > playerScore) {
            document.getElementById('looserBox').style.display = "block";
        }
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', function () {
    reset();
});

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreCount.textContent = playerScore;
    computerScoreCount.textContent = computerScore;
    result.textContent = 'RESULT';
    isGameOver = false;
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    document.getElementById('playerScissor').style.display = "none";
    document.getElementById('playerPaper').style.display = "none";
    document.getElementById('playerRock').style.display = "none";
    document.getElementById('compScissor').style.display = "none";
    document.getElementById('compPaper').style.display = "none";
    document.getElementById('compRock').style.display = "none";
}

function checkGame() {
    if (!isGameOver) {

        if (computerScore === winningScore || playerScore === winningScore) {
            isGameOver = true;
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;
        }
    }
}

closeButton1.addEventListener('click', () => {
    document.getElementById('winnerBox').style.display = "none";

})
closeButton2.addEventListener('click', () => {
    document.getElementById('looserBox').style.display = "none";

})

rematch1.addEventListener('click', () => {
    reset();
    document.getElementById('winnerBox').style.display = "none";
})
rematch2.addEventListener('click', () => {
    reset();
    document.getElementById('looserBox').style.display = "none";
})