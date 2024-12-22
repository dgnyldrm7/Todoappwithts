import { DoneTodo } from './doneTodo';

export function ToggleDone(id: number) {
    const element = document.getElementById(id.toString()) as HTMLLIElement;

    if (element) {
        const doneButton = element.querySelector('.done') as HTMLButtonElement;

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
