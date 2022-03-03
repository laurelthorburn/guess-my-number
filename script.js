'use strict';


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const x = function(){
    console.log(23);
};

document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    console.log(guess)

    //check if there is a value
    if (!guess) {
        document.querySelector('.message').textContent = '❌ Please enter a guess';
    }
});