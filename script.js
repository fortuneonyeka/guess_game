const checkBtn = document.querySelector('.check')
const input = document.querySelector('.guess')
const message = document.querySelector('.message')


const secretNumber = Math.trunc(Math.random() * 20) + 1
const number = document.querySelector('.number').textContent = secretNumber;

checkBtn.addEventListener('click', function() {
  const guess = Number(input.value);

  if (!guess) {
    message.textContent = 'Not a number ⛔️'
  }else if (guess === secretNumber) {
    message.textContent = 'Congratulations, you win🏆'
    message.style.color = "green";
  }
  else if (guess < secretNumber) {
    message.textContent = 'Too Low 📉'
  }

  else if (guess > secretNumber) {
    message.textContent = 'Too High 📈'
  }
  
});