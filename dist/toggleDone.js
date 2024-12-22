import { DoneTodo } from './doneTodo.js';
export function ToggleDone(id) {
    const element = document.getElementById(id.toString());
    if (element) {
        const doneButton = element.querySelector('.done');
        if (element.style.textDecoration === 'line-through') {
            element.style.textDecoration = 'none';
            element.style.color = 'black';
            element.style.fontWeight = 'normal';
            element.style.backgroundColor = 'white';
            if (doneButton) {
                doneButton.innerHTML = 'Done';
                doneButton.addEventListener('click', () => {
                    DoneTodo(id);
                });
            }
        }
    }
}
