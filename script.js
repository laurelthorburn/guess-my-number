'use strict';


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;


//define secret number

const secretNumber = Math.trunc(Math.random()*20)+1;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function(){
    //wrap in Number() else it's a string, can console log type Of
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    //check if there is a value
    if (!guess) {
        document.querySelector('.message').textContent = '❌ Please enter a guess';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Just right!';
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low 📉';
    }  else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high 📈';
    } 
});