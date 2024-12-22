const addButton = document.getElementById('add') as HTMLInputElement;

const ulList = document.getElementById('todos') as HTMLUListElement;

addButton.addEventListener('click', AddTodo);
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        AddTodo();
    }
});



function AddTodo() {
    const input = document.getElementById('todoInput') as HTMLInputElement;

    const id = Math.floor(Math.random() * 1000);

    const content = input.value;

    if (content === '' || content === null || content === undefined || content.trim() === '' || content.length === 0 || content === ' ') {
        alert('Lütfen bir görev giriniz!');
        return;
    }

    //inputtaki value değeri uzun olduğunda sayfadan taşmasın!
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




function DeleteTodo(id: number) {

    if(id === null || id === undefined || id === 0){
        alert('Bir hata oluştu!');
        return;
    }

    const element = document.getElementById(id.toString()) as HTMLLIElement;

    element.remove();
}

function DoneTodo(id: number){
    
    if(id === null || id === undefined || id === 0){
        alert('Bir hata oluştu!');
        return;
    }

    const element = document.getElementById(id.toString()) as HTMLLIElement;

    element.style.textDecoration = 'line-through';
    element.style.color = 'green';
    element.style.fontWeight = 'bold';
    element.style.backgroundColor = 'lightgray';

    const doneButton = document.querySelector('.done') as HTMLButtonElement;

    doneButton.innerHTML = 'Undone';

    doneButton.addEventListener('click', function(){
        ToggleDone(id);
    });
}



function ToggleDone(id: number){
    const element = document.getElementById(id.toString()) as HTMLLIElement;

    const doneButton = document.querySelector('.done') as HTMLButtonElement;

    if(element.style.textDecoration === 'line-through'){
        element.style.textDecoration = 'none';
        element.style.color = 'black';
        element.style.fontWeight = 'normal';
        element.style.backgroundColor = 'white';

        const doneButton = document.querySelector('.done') as HTMLButtonElement;

        doneButton.innerHTML = 'Done';
    }

    doneButton.addEventListener('click', function(){
        DoneTodo(id);
    });
}




