function colorize() {
    let tableRowElements = document.querySelectorAll('tr:nth-child(2n)');

    for (const item of tableRowElements) {
        item.style.backgroundColor = 'teal';
    }
}