function attachEventsListeners() {
    let daysBtnElement = document.getElementById('daysBtn');
    let hoursBtnElement = document.getElementById('hoursBtn');
    let minutesBtnElement = document.getElementById('minutesBtn');
    let secondsBtnElement = document.getElementById('secondsBtn');

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    daysBtnElement.addEventListener('click', (event) => {
        hoursInputElement.value = Number(daysInputElement.value) * 24;
        minutesInputElement.value = Number(hoursInputElement.value) * 60;
        secondsInputElement.value = Number(minutesInputElement.value) * 60;
    });

    hoursBtnElement.addEventListener('click', (event) => {
        daysInputElement.value = Number(hoursInputElement.value) / 24;
        minutesInputElement.value = Number(hoursInputElement.value) * 60;
        secondsInputElement.value = Number(minutesInputElement.value) * 60;
    });

    minutesBtnElement.addEventListener('click', (event) => {
        secondsInputElement.value = Number(minutesInputElement.value) * 60;
        hoursInputElement.value = Number(minutesInputElement.value) / 60;
        daysInputElement.value = Number(hoursInputElement.value) / 24;
    });

    secondsBtnElement.addEventListener('click', (event) => {
        minutesInputElement.value = Number(secondsInputElement.value) / 60;
        hoursInputElement.value = Number(minutesInputElement.value) / 60;
        daysInputElement.value = Number(hoursInputElement.value) / 24;
    });
}