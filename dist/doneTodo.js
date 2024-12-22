import { ToggleDone } from './toggleDone.js';
export function DoneTodo(id) {
    if (!id) {
        alert('Bir hata oluştu!');
        return;
    }
    const element = document.getElementById(id.toString());
    if (element) {
        element.style.textDecoration = 'line-through';
        element.style.color = 'green';
        element.style.fontWeight = 'bold';
        element.style.backgroundColor = 'lightgray';
        const doneButton = element.querySelector('.done');
        if (doneButton) {
            doneButton.innerHTML = 'Undone';
            doneButton.addEventListener('click', () => {
                ToggleDone(id);
            });
        }
    }
}
