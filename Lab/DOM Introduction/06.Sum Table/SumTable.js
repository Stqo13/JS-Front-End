function sumTable() {
    let tdCostElements = document.querySelectorAll('tr td:last-of-type:not(#sum)')
    let totalCostElement = document.getElementById('sum');

    let sum = 0;
    for (const item of tdCostElements) {
        sum += Number(item.textContent);
    }

    totalCostElement.textContent = sum;
}