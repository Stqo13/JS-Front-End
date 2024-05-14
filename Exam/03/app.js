let baseUrl = 'http://localhost:3030/jsonstore/games';

let loadGamesBtnElement = document.getElementById('load-games');
let addGameButton = document.getElementById('add-game');
let editGameButton = document.getElementById('edit-game');
let gamesListInput = document.getElementById('games-list');
let gameNameInputElement = document.getElementById('g-name');
let typeInputElement = document.getElementById('type');
let playersInputElement = document.getElementById('players');
let formContainerElement = document.getElementById('form');

loadGamesBtnElement.addEventListener('click', loadGames);

addGameButton.addEventListener('click', addGame);

editGameButton.addEventListener('click', editGame);

function addGame(){
    let game = getInputData();
    
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(game)
    })
    .then(res => {
        if (!res.ok) {
            return;
        }
        
        clearInputFields();
        return loadGames()
    })
}

async function loadGames(){
    let response = await fetch(baseUrl);
    let gamesResult = await response.json();
    
    gamesListInput.innerHTML = '';
    
    let gamesFragmentElement = document.createDocumentFragment();
    
    Object
    .values(gamesResult)
    .forEach(game => gamesFragmentElement.appendChild(createGameElement(game)));
    
    gamesListInput.appendChild(gamesFragmentElement);
}

function createGameElement(game){
    let changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', (event) => changeGame(event, game));
    
    let deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', (event) => deleteGame(event));
    
    let buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);
    
    let gameNamePElement = document.createElement('p');
    gameNamePElement.textContent = game.name;
    let typePElement = document.createElement('p');
    typePElement.textContent = game.type;
    let playersPElement = document.createElement('p');
    playersPElement.textContent = game.players;
    
    let contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(gameNamePElement);
    contentDivElement.appendChild(typePElement);
    contentDivElement.appendChild(playersPElement);
    
    let gameDivElement = document.createElement('div');
    gameDivElement.classList.add('board-game');
    gameDivElement.appendChild(contentDivElement);
    gameDivElement.appendChild(buttonsDivElement);
    
    gameDivElement.setAttribute('data-id', game._id);
    
    return gameDivElement;
}

function changeGame(event, game){
    let gameElement = event.currentTarget.parentElement.parentElement;
    gameElement.remove();
    
    gameNameInputElement.value = game.name;
    typeInputElement.value = game.type;
    playersInputElement.value = game.players;
    
    formContainerElement.setAttribute('data-id', game._id);
    
    editGameButton.removeAttribute('disabled');
    addGameButton.setAttribute('disabled', 'disabled');
}

function editGame(){
    let game = getInputData();
    
    let gameId = formContainerElement.getAttribute('data-id');
    
    formContainerElement.removeAttribute('data-id');
    
    fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: gameId, ...game }),
    })
    .then(res => {
        if(!res.ok){
            return;
        }
        
        loadGames();
        
        addGameButton.removeAttribute('disabled');
        editGameButton.setAttribute('disabled', 'disabled');

        clearInputFields();
    })
}

function deleteGame(event){
    let gameElement = event.currentTarget.parentElement.parentElement;

    let gameId = gameElement.getAttribute('data-id');

    fetch(`${baseUrl}/${gameId}`, {
        method: 'DELETE',
    })
    .then(res => {
        if (!res.ok) {
            return;
        }

        gameElement.remove();
    });
}

function clearInputFields() {
    gameNameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}

function getInputData(){
    return {
        name: gameNameInputElement.value,
        type: typeInputElement.value,
        players: playersInputElement.value,
    }
}