'use strict';


// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;


//define secret number

const secretNumber = Math.trunc(Math.random()*20)+1;

document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click',function(){
    //wrap in Number() else it's a string, can console log type Of
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess))

    //check if there is a value
    if (!guess) {
        document.querySelector('.message').textContent = '❌ Please enter a guess';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Just right!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = "30rem";
    } else if (guess < secretNumber) {
        if (score > 1){
        document.querySelector('.message').textContent = 'Too low 📉';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game 😓';
            document.querySelector('.score').textContent = 0;
        }
    }  else if (guess > secretNumber) {
        if (score > 1){
        document.querySelector('.message').textContent = 'Too high 📈';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost the game 😓';
        document.querySelector('.score').textContent = 0;
    }
    } 
});