function deleteByEmail() {
    let inputEmailElement = document.querySelector('input[name=email]');
    let resultElement = document.getElementById('result');
    let trElements = document.querySelectorAll('table#customers tbody tr');
    
    let tr = Array
    .from(trElements)
    .find(trElement => trElement.children[1].textContent.includes(inputEmailElement.value));
    
    if (tr) {
        tr.remove();
        resultElement.textContent = 'Deleted.';
    }else{
        resultElement.textContent = 'Not found.'
    }
    inputEmailElement.value = '';
}