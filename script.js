'use strict';

// selecting element
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let rollBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');
let newBtn = document.querySelector('.btn--new');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');


// intial delecration
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
let current = 0
let activePlayer = 0
let finalScore = [0,0];
let gameTap = true;




// roll dice event
rollBtn.addEventListener('click',function(){
    if(gameTap){
    diceEl.classList.remove('hidden');
    let diceValue = Math.trunc(Math.random()*6+1);
    diceEl.src = `dice-${diceValue}.png`;

    if(diceValue != 1){
        current += diceValue;
        document.querySelector(`#current--${activePlayer}`).textContent = current;
    }
    else{
        current = 0
        document.querySelector(`#current--${activePlayer}`).textContent = current;
        activePlayer = (activePlayer === 1) ? 0 : 1;
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')

    }
    }
});

holdBtn.addEventListener('click',function(){
    if(gameTap){
    finalScore[activePlayer] += current;
    if(finalScore[activePlayer] < 10){
    document.querySelector(`#score--${activePlayer}`).textContent = finalScore[activePlayer];
    current = 0;
    document.querySelector('.current-score').textContent = current;
    activePlayer = (activePlayer === 1) ? 0 : 1;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    }
    else{
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        gameTap = false;
        document.querySelector(`#score--${activePlayer}`).textContent = finalScore[activePlayer];

    }
    }
});

newBtn.addEventListener('click',function(){
    diceEl.classList.add('hidden');
    score0El.textContent = 0;
    score1El.textContent = 0;
    current = 0
    activePlayer = 0
    finalScore = [0,0];
    gameTap = true;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    current0El.textContent = 0;
    current1El.textContent = 0;
});