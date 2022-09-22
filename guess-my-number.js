'use strict'

// let doc = document.querySelector('.message')

// console.log(doc.textContent);

// document.querySelector('.message').textContent = 'Correct Number'

// document.querySelector('.number').textContent = 13

// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highScore = 0


document.querySelector('.check').addEventListener('click', 
	function () {
		const guess = Number(document.querySelector('.guess').value); 
		console.log(guess, typeof guess);
		// NO INPUT
		if (guess <= 0 || guess > 20) {
			document.querySelector('.message').textContent = 'Please enter a number between 1 - 20'
		// CORRECT
		} else if (guess === secretNumber) {
			document.querySelector('.number').textContent = secretNumber
			document.querySelector('.message').textContent = 'Correct Number'
			document.querySelector('body').style.backgroundColor = 'green'
			document.querySelector('.number').style.width = '30rem'
			if (score > highScore) {
				highScore = score
				document.querySelector('.label-highscore').textContent = `High Score: ${highScore}`
			}
		// TOO HIGH
		}  else if (guess > secretNumber) {
			if (score > 1) { 
				document.querySelector('.message').textContent = 'Too high'
				score--;
				document.querySelector('.score').textContent = score;
			} else {
				document.querySelector('.message').textContent = 'You lose'
			}
			// TOO LOW
		}   else if (guess < secretNumber) {
			if (score > 1) {
				document.querySelector('.message').textContent = 'Too low'
				score--;
				document.querySelector('.score').textContent = score;
			} else {
				document.querySelector('.message').textContent = 'You lose'
			}
		}
	})

	document.querySelector('.again').addEventListener ('click', playAgain)

	function playAgain () {
		secretNumber = Math.trunc(Math.random() * 20) + 1;
		score = 20
		document.querySelector('.score').textContent = score;
		document.querySelector('.number').textContent = '?'
		document.querySelector('body').style.backgroundColor = 'black'
		document.querySelector('.message').textContent = 'Start guessing...'
		document.querySelector('.guess').value = ''
	}