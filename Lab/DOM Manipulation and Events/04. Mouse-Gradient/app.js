function attachGradientEvents() {
    let hoverDivElement = document.querySelector('div#gradient');
    let resultElement = document.getElementById('result');
    
    hoverDivElement.addEventListener('mousemove', (event) =>{
        let currentWidth = event.offsetX;
        let elementWidth = event.target.clientWidth;

        let progress = Math.floor((currentWidth / elementWidth) * 100);

        resultElement.textContent = `${progress}%`
    });
}