export function DeleteTodo(id) {
    if (!id) {
        alert('Bir hata oluştu!');
        return;
    }
    const element = document.getElementById(id.toString());
    if (element) {
        element.remove();
    }
}
