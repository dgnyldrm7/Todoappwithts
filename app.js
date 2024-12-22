var addButton = document.getElementById('add');
var ulList = document.getElementById('todos');
addButton.addEventListener('click', AddTodo);
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        AddTodo();
    }
});
function AddTodo() {
    var input = document.getElementById('todoInput');
    var id = Math.floor(Math.random() * 1000);
    var content = input.value;
    if (content === '' || content === null || content === undefined || content.trim() === '' || content.length === 0 || content === ' ') {
        alert('Lütfen bir görev giriniz!');
        return;
    }
    //inputtaki value değeri uzun olduğunda sayfadan taşmasın!
    if (content.length > 30) {
        alert('Lütfen 30 karakterden fazla değer girmeyiniz!');
        return;
    }
    var field = "\n    <li id=\"".concat(id, "\" class=\"list-group-item d-flex justify-content-between align-items-center my-2\">\n        ").concat(content, "\n        <span>\n            <button class=\"btn btn-success btn-sm done\" onclick=\"DoneTodo(").concat(id, ")\">Done</button>\n            <button class=\"btn btn-danger btn-sm\" onclick=\"DeleteTodo(").concat(id, ")\" >Delete</button>\n        </span>\n    </li>\n    ");
    ulList.innerHTML += field;
    input.value = '';
}
function DeleteTodo(id) {
    if (id === null || id === undefined || id === 0) {
        alert('Bir hata oluştu!');
        return;
    }
    var element = document.getElementById(id.toString());
    element.remove();
}
function DoneTodo(id) {
    if (id === null || id === undefined || id === 0) {
        alert('Bir hata oluştu!');
        return;
    }
    var element = document.getElementById(id.toString());
    element.style.textDecoration = 'line-through';
    element.style.color = 'green';
    element.style.fontWeight = 'bold';
    element.style.backgroundColor = 'lightgray';
    var doneButton = document.querySelector('.done');
    doneButton.innerHTML = 'Undone';
    doneButton.addEventListener('click', function () {
        ToggleDone(id);
    });
}
function ToggleDone(id) {
    var element = document.getElementById(id.toString());
    var doneButton = document.querySelector('.done');
    if (element.style.textDecoration === 'line-through') {
        element.style.textDecoration = 'none';
        element.style.color = 'black';
        element.style.fontWeight = 'normal';
        element.style.backgroundColor = 'white';
        var doneButton_1 = document.querySelector('.done');
        doneButton_1.innerHTML = 'Done';
    }
    doneButton.addEventListener('click', function () {
        DoneTodo(id);
    });
}
