function solve() {
    let infoBoxElement = document.querySelector('div#info span.info');
    let departBtnElement = document.getElementById('depart');
    let arriveBtnElement = document.getElementById('arrive');

    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';

    let currentId = 'depot';

    function depart() {
        fetch(`${baseUrl}/${currentId}`)
            .then(response => response.json())
            .then(data => {
                infoBoxElement.textContent = `Next stop ${data.name}`;
            })
            .catch(() => 'Error');

        departBtnElement.disabled = true;
        arriveBtnElement.disabled = false;
    }

    async function arrive() {
        fetch(`${baseUrl}/${currentId}`)
            .then(response => response.json())
            .then(data => {
                infoBoxElement.textContent = `Araving at ${data.name}`;
                currentId = data.next;
            })
            .catch(() => 'Error');

        departBtnElement.disabled = false;
        arriveBtnElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();