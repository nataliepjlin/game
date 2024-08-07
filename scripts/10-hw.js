console.log(document.querySelector('button').classList.contains('js-btn'));//10c

function checkToggled(btnClass){
  const btn = document.querySelector(`.${btnClass}`);
  if(btn.classList.contains('is-toggled')) btn.classList.remove('is-toggled');
  else{
    turnOff();// !!!!
    btn.classList.add('is-toggled');
  }
}

function turnOff(){
  const prevOn = document.querySelector('.is-toggled');
  if(prevOn) prevOn.classList.remove('is-toggled');
}

function print(){
  let cost = Number(document.querySelector('input').value);
  //console.log(cost);
  let output = document.querySelector('.js-output');
  //console.log(output);

  if(cost < 0){
    output.classList.add('error');
    output.innerHTML = 'Error: cost cannot be less than $0';
  }
  else{
    if(output.classList.contains('error')) output.classList.remove('error');
    cost *= 100;
    if(cost < 4000) cost += 1000;
    cost /= 100;
    output.innerHTML = `$${cost}`;
  }
}

let res = localStorage.getItem('res') || '';
displayRes();

function updateRes(val){
  res += val;
  displayRes();
  localStorage.setItem('res', res);
}
function displayRes(){
  document.querySelector('.js-res').innerHTML = res || '0';
}