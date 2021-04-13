'use strict';

const todoList = document.getElementById('todo-list');
const field = document.querySelector('input[type="text"]');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const todoText = field.value;
  field.value = '';
  addTodo(todoText);
});

function addTodo(todoText) {
  const li = document.createElement('li');
  li.innerHTML = `<em>${todoText}</em>`;

  const remove = document.createElement('button');
  remove.innerText = 'Видалити';
  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  li.classList.add('inProgress');

  li.appendChild(toggle);
  li.appendChild(remove);
  todoList.appendChild(li);

  remove.onclick = () => li.remove();
  toggle.addEventListener('change', e => {
    if (e.target.checked) {
      li.classList.remove('inProgress');
    } else {
      li.classList.add('inProgress');
    }
  });
}
