export function AddTodo() {
    const ulList = document.getElementById('todos') as HTMLUListElement;
    const input = document.getElementById('todoInput') as HTMLInputElement;

    const id = Math.floor(Math.random() * 1000);
    const content = input.value;

    if (!content || content.trim() === '' || content.length === 0) {
        alert('Lütfen bir görev giriniz!');
        return;
    }

    if (content.length > 30) {
        alert('Lütfen 30 karakterden fazla değer girmeyiniz!');
        return;
    }

    const field = `
    <li id="${id}" class="list-group-item d-flex justify-content-between align-items-center my-2">
        ${content}
        <span>
            <button class="btn btn-success btn-sm done" onclick="DoneTodo(${id})">Done</button>
            <button class="btn btn-danger btn-sm" onclick="DeleteTodo(${id})" >Delete</button>
        </span>
    </li>
    `;

    ulList.innerHTML += field;
    input.value = '';
}
