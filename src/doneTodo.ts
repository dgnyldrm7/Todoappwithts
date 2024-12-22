import { ToggleDone } from './toggleDone';

export function DoneTodo(id: number) {
    if (!id) {
        alert('Bir hata oluştu!');
        return;
    }

    const element = document.getElementById(id.toString()) as HTMLLIElement;

    if (element) {
        element.style.textDecoration = 'line-through';
        element.style.color = 'green';
        element.style.fontWeight = 'bold';
        element.style.backgroundColor = 'lightgray';

        const doneButton = element.querySelector('.done') as HTMLButtonElement;
        if (doneButton) {
            doneButton.innerHTML = 'Undone';

            doneButton.addEventListener('click', () => {
                ToggleDone(id);
            });
        }
    }
}
