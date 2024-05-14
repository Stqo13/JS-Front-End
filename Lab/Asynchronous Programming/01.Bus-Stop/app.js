function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    
    let stopIdElement = document.getElementById('stopId');
    let stopNameElement = document.getElementById('stopName');
    let busesUlElement = document.getElementById('buses');
    let resultElement = document.getElementById('result');
    
    let stopId = stopIdElement.value;
    fetch(`${baseUrl}/${stopId}`)
    .then(response => response.json())
    .then(stopData => {
        stopNameElement.textContent = stopData.name;
        
        for (const bus in stopData.buses) {
            let newLiElement = document.createElement('li');
            newLiElement.textContent = `Bus ${bus} arrives in ${stopData.buses[bus]} minutes`;
            busesUlElement.appendChild(newLiElement);
        }
        
        stopIdElement.value = '';
    })
    .catch(() => {
        stopNameElement.textContent = 'Error';
        resultElement.removeChild(busesUlElement);
    });
}