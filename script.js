const checkBtn = document.querySelector('.check')
const input = document.querySelector('.guess')
const message = document.querySelector('.message')
let scoreContent = document.querySelector('.score')
let highScoreContent = document.querySelector('.highscore')
const body = document.querySelector('body')
const again = document.querySelector('.again')
const guess = document.querySelector('.guess')
 score = 20
let highScore = 0


const secretNumber = Math.trunc(Math.random() * 20) + 1
const number = document.querySelector('.number')

// number.textContent = secretNumber;   

checkBtn.addEventListener('click', function() {
  const guess = Number(input.value);

  if (!guess) {
    message.textContent = 'Not a number ⛔️'
  }else if (guess === secretNumber) {
    message.textContent = 'Congratulations, you win🏆'
    number.textContent = secretNumber;
    body.style.backgroundColor = 'green'
    // message.style.color = "green";
    number.style.width = '30rem'
    // highScore = highScore + 10
    highScoreContent.textContent = highScore
  }
  else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too Low 📉!'
    score = score - 1
    scoreContent.textContent = score
    } else{
      message.textContent = '💥 You lost the game!!!'
      scoreContent.textContent = 0;
    }
  }

  else if (guess > secretNumber) {
    
    if (score > 1) {
      message.textContent = 'Too High 📈!'
    score = score - 1
    scoreContent.textContent = score
    } else{
      message.textContent = '💥 You lost the game!!!'
      scoreContent.textContent = 0;
    }
  }
  
});

const clearResult = () => {
  // this 
  // window.location.reload()
  // OR
  score = 20
  secretNumber 
  message.textContent = 'Start guessing...'
  scoreContent = score
  number.textContent = '?'
  guess.value = ''
  body.style.backgroundColor = 'grey'
  number.style.width = '15rem'
}


again.addEventListener('click', () => {
 clearResult()

 //WITHOUT A FUNCTION
// window.location.reload()
})

