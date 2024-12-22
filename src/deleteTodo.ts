export function DeleteTodo(id: number) {
    if (!id) {
        alert('Bir hata oluştu!');
        return;
    }

    const element = document.getElementById(id.toString()) as HTMLLIElement;
    if (element) {
        element.remove();
    }
}
