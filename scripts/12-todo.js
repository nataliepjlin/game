let todoList = [], todoListF = [];

function add(){
  const input = document.querySelector('.js-input');
  todoList.push(input.value);
  console.log(todoList);

  input.value = '';
}

let res = '';
function render(){
  const input = document.querySelector('.js-input-2');
  res += `<p>${input.value}</p>`;
  console.log(res);
  document.querySelector('.js-todo').innerHTML = res;
  input.value = '';
}

let res_f = '';
function finalRender(){
  const input = document.querySelector('.js-input-f'), dateInput = document.querySelector('.js-date');
  const todoObj = {
    name: input.value,
    due: dateInput.value,
  };
  const {name, due} = todoObj;
  if(name !== `wash dishes`){
    todoListF.push(todoObj);
    res_f += `<div>${name}</div>
    <div>${due}</div>
    <button onclick="todoListF.splice(${todoListF.length - 1}, 1); updateTodo()" class="del-btn">Delete</button> `;
    console.log(res_f);
    document.querySelector('.js-todo-f').innerHTML = res_f;
  }
  input.value = '', dateInput.value = '';
}
function updateTodo(){
  res_f = '';

  todoListF.forEach(function(todo, i){
    if(todo.name === `wash dishes`) return;

    res_f += `
    <div>${todo.name}</div>
    <div>${todo.due} </div>
    <button onclick="todoListF.splice(${i}, 1); updateTodo()" class="del-btn">Delete</button> `;
  });
  console.log(res_f);
  document.querySelector('.js-todo-f').innerHTML = res_f;
}
