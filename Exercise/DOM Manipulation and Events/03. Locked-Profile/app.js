function lockedProfile() {
    let profileElements = document.querySelectorAll('.profile');
    for (const profileElement of profileElements) {
        let showButtonElement = profileElement.querySelector('button');
        let radioElement = profileElement.querySelector('input[type=radio][value=lock]');

        showButtonElement.addEventListener('click', (event) => {
            let hiddenInfoElement = showButtonElement.previousElementSibling;

            if (radioElement.checked) {
                return;
            }

            if (showButtonElement.textContent == 'Show more') {
                hiddenInfoElement.style.display = 'block';
                showButtonElement.textContent = 'Hide it';
            }else{
                hiddenInfoElement.style.display = 'none';
                showButtonElement.textContent = 'Show more';
            }
        });
    }
}