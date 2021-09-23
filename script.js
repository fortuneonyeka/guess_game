const checkBtn = document.querySelector('.check')
const input = document.querySelector('.guess')
const message = document.querySelector('.message')
let scoreContent = document.querySelector('.score')
let highScoreContent = document.querySelector('.highscore')
let score = 20
let highScore = 0


const secretNumber = Math.trunc(Math.random() * 20) + 1
const number = document.querySelector('.number').textContent = secretNumber;

checkBtn.addEventListener('click', function() {
  const guess = Number(input.value);

  if (!guess) {
    message.textContent = 'Not a number ⛔️'
  }else if (guess === secretNumber) {
    message.textContent = 'Congratulations, you win🏆'
    message.style.color = "green";
    highScore = highScore + 10
    highScoreContent.textContent = highScore
  }
  else if (guess < secretNumber) {
    if (score > 0) {
      message.textContent = 'Too Low 📉!'
    score = score -5
    scoreContent.textContent = score
    } else{
      message.textContent = '💥 You lost the game!!!'
    }
  }

  else if (guess > secretNumber) {
    
    if (score > 0) {
      message.textContent = 'Too High 📈!'
    score = score - 5
    scoreContent.textContent = score
    } else{
      message.textContent = '💥 You lost the game!!!'
    }
  }
  
});