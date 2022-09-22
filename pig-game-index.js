'use strict'

// SELECTING ELEMENTS
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const currentPlayer0 = document.getElementById('current--0');
const currentPlayer1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNewGame = document.querySelector('.btn--new')

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden')

let scores = [0,0]
let currentScore = 0
let activePlayer = 0
let playing = true;

const SwitchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0
	activePlayer = activePlayer === 1 ? 0 : 1
	player0.classList.toggle('player--active')
	player1.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function() {
	if (playing) {
		const diceNum = Math.trunc(Math.random() * 6 +1)
		console.log(diceNum)
		dice.classList.remove('hidden')
		dice.src = `./pig-game-images/pigD${diceNum}.png`
		if (diceNum !== 1) {
			currentScore += diceNum;
			document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		} else {
			SwitchPlayer()
		}
	}
})

btnHold.addEventListener('click', function() {
	if (playing) {
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
		if (scores[activePlayer] >= 100) {
			playing = false;
			dice.classList.add('hidden')
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		} else {
		SwitchPlayer();
		}
	}
})

btnNewGame.addEventListener('click', function () {
	scores = [0,0]
	currentScore = 0
	playing = true;
	activePlayer = 0
	currentPlayer0.textContent = 0
	currentPlayer1.textContent = 0
	score0.textContent = 0
	score1.textContent = 0
	player0.classList.remove('player--winner')
	player1.classList.remove('player--winner')
	player0.classList.add('player--active')
	player1.classList.remove('player--active')
	dice.classList.add('hidden')
})