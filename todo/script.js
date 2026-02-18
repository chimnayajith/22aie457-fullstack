const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo(){
    const todoText = todoInput.value.trim();

    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function(){
        li.classList.toggle('completed');
    });

    const span = document.createElement('span');
    span.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = '';
}

//adding new item to list
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});