function toggle() {
    let extraTextElement = document.getElementById('extra');
    let buttonSpanElement = document.querySelector('.head > .button');
    
    if (buttonSpanElement.textContent === 'More') {
        extraTextElement.style.display = 'block';
        buttonSpanElement.textContent = 'Less';
    }else{
        extraTextElement.style.display = 'none';
        buttonSpanElement.textContent = 'More';
    }
}