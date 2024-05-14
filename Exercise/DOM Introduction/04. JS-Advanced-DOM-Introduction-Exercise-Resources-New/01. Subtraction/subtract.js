function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let resultElement = document.querySelector('#result');

    let result = Number(firstNumber.value) - Number(secondNumber.value);

    if (result < 0) {
        resultElement.textContent = '-' + result;
    }else{
        resultElement.textContent = result;
    }
}