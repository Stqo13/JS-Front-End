function extractText() {
    let listItemsElement = document.getElementById('items');
    let textAreaElement = document.querySelector('#result');
    
    textAreaElement.value = listItemsElement.textContent;
}