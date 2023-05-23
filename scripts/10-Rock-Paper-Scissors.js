let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
};
updateScore();

/*
if(!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/
function playGame(playerMove){
computerMove = pickComputerMove();
let result = '';
if(playerMove === 'scissors'){
  if(computerMove === 'rock') result = 'You Lose';
  else if(computerMove === 'paper') result = 'You Win';
  else result = 'Tie';
} 
else if(playerMove === 'rock'){
    if(computerMove === 'scissors') result = 'You Win';
    else if(computerMove === 'paper') result = 'You Lose';
    else result = 'Tie';
}
else{ 
  if(computerMove === 'scissors') result = 'You Lose';
  else if(computerMove === 'rock') result = 'You Win';
  else result = 'Tie';
}
calculateScore(result);
document.querySelector('.js-moves').innerHTML = 
`You 
<img src="/images/${playerMove}-emoji.png" alt="playerMove" class="move-icon">
<img src="/images/${computerMove}-emoji.png" alt="computerMove" class="move-icon">
Computer`;
}

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';
if(randomNumber <= 1/3){
  computerMove = 'rock';
} else if(randomNumber > 1/3 && randomNumber <= 2/3){
  computerMove = 'paper';
}
else{
  computerMove = 'scissors';
}
return computerMove;
}

function calculateScore(result){
if(result === 'You Win') score.wins++;
else if(result === 'You Lose') score.losses++;
else score.ties++;

localStorage.setItem('score', JSON.stringify(score));
document.querySelector('.js-result').innerHTML = 
result;
updateScore();
}

function reset(){
score.wins = 0;
score.losses = 0;
score.ties = 0; 
localStorage.removeItem('score');
updateScore();
}

function updateScore(){
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}