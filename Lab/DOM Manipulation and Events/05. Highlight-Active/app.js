function focused() {
    let inputTextElements = document.querySelectorAll('input[type=text]');

    Array.from(inputTextElements).forEach(textElement => textElement.addEventListener('focus', (event) =>{
        textElement.parentElement.classList.add('focused');
    }));

    Array.from(inputTextElements).forEach(textElement => textElement.addEventListener('blur', (event) =>{
        textElement.parentElement.classList.remove('focused');
    }));
}