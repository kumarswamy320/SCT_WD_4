document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(todoText) {
        const todoItem = document.createElement('li');
        const todoTextElement = document.createElement('span');
        todoTextElement.textContent = todoText;

        todoTextElement.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(todoTextElement);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
});
