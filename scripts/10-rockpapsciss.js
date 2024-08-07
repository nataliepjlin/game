let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScoreElement();

function play(playerMove){
  const comp = pickCompMove();

  let res = '';
  if(playerMove === 'scissors'){
    if(comp === 'scissors')   res = `It's a tie`;
    else if(comp === 'rock') res = 'You lose';
    else res = 'You win';
  }

  else if(playerMove == 'paper'){
    if(comp === 'paper') res = `It's a tie`;
    else if(comp === 'scissors') res = 'You lose';
    else res = 'You win';
  }

  else{
    if(comp === 'rock') res = `It's a tie`;
    else if(comp === 'paper') res = 'You lose';
    else res = 'You win';
  }

  if(res === 'You win') score.wins++;
  else if(res === 'You lose') score.losses++;
  else score.ties++;
  
  localStorage.setItem('score', JSON.stringify(score)); 

  updateScoreElement();
  document.querySelector('.js-result').innerHTML = res;
  document.querySelector('.js-moves').innerHTML = `You<img src="images/${playerMove}-emoji.png" class="move-icon"> vs <img src="images/${comp}-emoji.png" class="move-icon">Computer`;

  //alert(`You picked ${playerMove}, computer picked ${comp}. ${res}.\nScore: Wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
}
function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}
function pickCompMove(){
  let comp_ = '';
  const rand = Math.random();
  if(rand < 1/3) comp_ = 'rock';
  else if(rand < 2/3) comp_ = 'paper';
  else comp_ = 'scissors';

  return comp_;
}