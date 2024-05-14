window.addEventListener("load", solve);

function solve() {
    let nameInputElement = document.getElementById('name');
    let phoneNumberInputElement = document.getElementById('phone');
    let categorySelectElement = document.getElementById('category');
    let addBtnElement = document.getElementById('add-btn');
    let checkListElement = document.getElementById('check-list');
    let contactListElement = document.getElementById('contact-list');

    addBtnElement.addEventListener('click', (event) => {
        let name = nameInputElement.value;
        let phone = phoneNumberInputElement.value;
        let category = categorySelectElement.value;

        let checkLiElement = createCheckElement(name, phone, category);

        checkListElement.appendChild(checkLiElement);

        clearInputs();
    });

    function createCheckElement(name, phone, category){
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');

        const saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(saveButtonElement);

        const namePElement = document.createElement('p');
        namePElement.textContent = `name:${name}`;
        const phonePElement = document.createElement('p');
        phonePElement.textContent = `phone:${phone}`;
        const categoryPElement = document.createElement('p');
        categoryPElement.textContent = `category:${category}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(namePElement);
        articleElement.appendChild(phonePElement);
        articleElement.appendChild(categoryPElement);

        const checkLiElement = document.createElement('li');
        checkLiElement.appendChild(articleElement);
        checkLiElement.appendChild(buttonsDivElement);

        editButtonElement.addEventListener('click', () => {
            nameInputElement.value = name;
            phoneNumberInputElement.value = phone;
            categorySelectElement.value = category;
            
            checkLiElement.remove();
        });

        saveButtonElement.addEventListener('click', (event) => {
            buttonsDivElement.remove();

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('del-btn');

            checkLiElement.appendChild(deleteButtonElement);

            contactListElement.appendChild(checkLiElement);

            deleteButtonElement.addEventListener('click', (event) => {
                checkLiElement.remove();
            });
        });

        return checkLiElement;
    }

    function clearInputs() {
        nameInputElement.value = '';
        phoneNumberInputElement.value = '';
        categorySelectElement.value = '';
    }
}
