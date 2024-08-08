let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScoreElement();

let isAutoPlaying = false, intervalID;
function autoPlay(){
  if(!isAutoPlaying){
    intervalID = setInterval(()=>{
      play(pickMove());
    }, 1200);
    isAutoPlaying = true;
    setTimeout(()=>{
      document.querySelector('.js-auto').innerText = 'Pause';
    }, 1200);
  }
  else{
    clearInterval(intervalID);
    isAutoPlaying = false;
    document.querySelector('.js-auto').innerText = 'Auto Play';
  }
}
function resetCheck(){
  document.querySelector('.js-ms').innerHTML = `Are you sure you want to reset the score? <button class="js-clear-ms js-yes">Yes</button> <button class="js-clear-ms js-no">No</button>`;

  document.querySelectorAll('.js-clear-ms').forEach((btn)=>{
    console.log(btn.innerHTML);
    btn.addEventListener('click', ()=>{
        let ms = document.querySelector('.js-ms');
        console.log(ms);
        ms.innerHTML = '';
    })
  });
  document.querySelector('.js-yes').addEventListener('click', ()=>reset());
}
function reset(){
  score.wins= 0;
  score.losses= 0;
  score.ties= 0;
  updateScoreElement();
  localStorage.removeItem('score');
}
document.querySelector('.js-rock')
  .addEventListener('click', ()=>play('rock'));
document.querySelector('.js-paper')
  .addEventListener('click', ()=>play('paper'));
document.querySelector('.js-scissors')
  .addEventListener('click', ()=>play('scissors'));
document.body.addEventListener('keydown', (event)=>{
  const k = event.key;
  if(k === 'r') play('rock');
  else if(k === 'p') play('paper');
  else if(k == 's') play('scissors');
  else if(k == 'a') autoPlay();
  else if(k == 'Backspace') resetCheck();
  else document.querySelector('.js-result').innerText = `You picked '${k}', which is an undefined move :(`;
})
document.querySelector('.js-auto').addEventListener('click', ()=>autoPlay());
document.querySelector('.js-reset').addEventListener('click', ()=>resetCheck());
function play(playerMove){
  const comp = pickMove();

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
function pickMove(){
  let move = '';
  const rand = Math.random();
  if(rand < 1/3) move = 'rock';
  else if(rand < 2/3) move = 'paper';
  else move = 'scissors';

  return move;
}