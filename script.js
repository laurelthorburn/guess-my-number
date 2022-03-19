'use strict';
const playAgain = document.querySelector('.again');

//define secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //wrap in Number() else it's a string, can console log type Of
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof(guess))

  //check if there is a value
  if (!guess) {
    document.querySelector('.message').textContent = '❌ Please enter a guess';
    //condition: wins the game, yay
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Just right!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score>highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
  } else if(guess !== secretNumber){
    if (score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too high 📈' : 'Too low 📉';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game 😓';
        document.querySelector('.score').textContent = 0;
      }
  }
  
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low 📉';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game 😓';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high 📈';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game 😓';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

//let user play again
playAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
