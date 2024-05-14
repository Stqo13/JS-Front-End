function addItem() {
    let listElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newElement = document.createElement('li');
    newElement.textContent = inputElement.value;

    listElement.appendChild(newElement);
    inputElement.value = '';
}