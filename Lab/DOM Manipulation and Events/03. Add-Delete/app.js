function addItem() {
    let listElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newElement = document.createElement('li');
    newElement.textContent = inputElement.value;
    let deleteElement = document.createElement('a');

    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';

    listElement.appendChild(newElement);
    newElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', ()=>{
        newElement.remove();
    });
    inputElement.value = '';
}