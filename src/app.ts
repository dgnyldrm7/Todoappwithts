import { AddTodo } from './addTodo';
import { DeleteTodo } from './deleteTodo';
import { DoneTodo } from './doneTodo';
import { ToggleDone } from './toggleDone';

const addButton = document.getElementById('add') as HTMLInputElement;

addButton.addEventListener('click', AddTodo);

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        AddTodo();
    }
});

// Global erişim için fonksiyonları window'a bağla
(window as any).DeleteTodo = DeleteTodo;
(window as any).DoneTodo = DoneTodo;
(window as any).ToggleDone = ToggleDone;
