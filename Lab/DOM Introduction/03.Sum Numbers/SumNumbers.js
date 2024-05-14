function calc() {
    let firstInputElement = document.getElementById('num1');
    let secondInputElement = document.getElementById('num2');
    let sumInputElement = document.querySelector('#sum');

    sumInputElement.value = Number(firstInputElement.value) + Number(secondInputElement.value);
}
