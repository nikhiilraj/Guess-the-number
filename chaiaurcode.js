let randomNumber = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const remaining = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.guesses');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
       let guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess >100){
        alert('Please enter a valid number');
    }

    else{
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }

        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guess it right!!');
    }
    else if(guess < randomNumber){
        displayMessage('Your guess is low');
    }

    else if(guess > randomNumber){
        displayMessage('Your guess is high');
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `${message}`;
}

function endGame(){
    userInput.innerHTML = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()* 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true;
        }
    )
}