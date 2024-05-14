function create(words) {
    let contentElement = document.getElementById('content');

    let divElements = [];

    for (const word of words) {
        let divElement = document.createElement('div');
        let pElement = document.createElement('p');
        pElement.textContent = word;
        divElement.appendChild(pElement);
        divElements.push(divElement);
    }

    divElements.forEach(divElement => divElement.querySelector('p').style.display = 'none');

    divElements.forEach((divElement) => divElement.addEventListener('click', (event) => {
        divElement.querySelector('p').style.display = 'block';
    }));

    divElements.forEach(divElement => contentElement.appendChild(divElement));
}