import { AddTodo } from './addTodo.js';
import { DeleteTodo } from './deleteTodo.js';
import { DoneTodo } from './doneTodo.js';
import { ToggleDone } from './toggleDone.js';
const addButton = document.getElementById('add');
addButton.addEventListener('click', AddTodo);
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        AddTodo();
    }
});

window.DeleteTodo = DeleteTodo;
window.DoneTodo = DoneTodo;
window.ToggleDone = ToggleDone;
