function attachEvents() {
    let inputElement = document.getElementById('location');
    let submitElement = document.getElementById('submit');
    const divForecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');
    let upcomingDivElement = document.getElementById('upcoming');

    const weatherSymbol = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    let baseUrl = 'http://localhost:3030/jsonstore/forecaster';

    submitElement.addEventListener('click', (event) => {
        fetch(`${baseUrl}/locations`)
            .then(response => response.json())
            .then(cityData => {
                let name = inputElement.value;
                let city = cityData.find(current => current.name === name);

                return Promise.all([
                    fetch(`${baseUrl}/today/${city.code}`),
                    fetch(`${baseUrl}/upcoming/${city.code}`),
                ]);
            }) 
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(([today, upcomming]) => {
                divForecastElement.style.display = 'block';

                let forecastsElement = document.createElement('div');
                forecastsElement.classList.add('forecasts');

                let conditionSymbolElement = document.createElement('span');
                conditionSymbolElement.setAttribute('class', 'condition symbol');
                conditionSymbolElement.textContent = weatherSymbol[today.forecast.condition];

                let conditionsElement = document.createElement('span');
                conditionsElement.setAttribute('class', 'condition');

                let nameElement = document.createElement('span');
                nameElement.setAttribute('class', 'forecast-data');
                nameElement.textContent = today.name;

                let lowHighElement = document.createElement('span');
                lowHighElement.setAttribute('class', 'forecast-data');
                lowHighElement.textContent = `${today.forecast.low}${weatherSymbol['Degrees']}/${today.forecast.high}${weatherSymbol['Degrees']}`;
                
                let conditionElement = document.createElement('span');
                conditionElement.setAttribute('class', 'forecast-data');
                conditionElement.textContent = today.forecast.condition;

                conditionsElement.appendChild(nameElement);
                conditionsElement.appendChild(lowHighElement);
                conditionsElement.appendChild(conditionElement);

                forecastsElement.appendChild(conditionSymbolElement);
                forecastsElement.appendChild(conditionsElement);

                currentElement.appendChild(forecastsElement);



                let forecastInfoElement = document.createElement('div');
                forecastInfoElement.setAttribute('class', 'forecast-info');
                
                let firstUpcomingElement = document.createElement('span');
                firstUpcomingElement.setAttribute('class', 'upcoming');

                let firstUpcomingSymbolElement = document.createElement('span');
                firstUpcomingSymbolElement.setAttribute('class', 'symbol');
                firstUpcomingSymbolElement.textContent = weatherSymbol[upcomming.forecast[0].condition];
                
                let firstUpcomingLowHighElement = document.createElement('span');
                firstUpcomingLowHighElement.setAttribute('class', 'forecast-data');
                firstUpcomingLowHighElement.textContent = `${upcomming.forecast[0].low}${weatherSymbol['Degrees']} ${upcomming.forecast[0].high}${weatherSymbol['Degrees']}`;

                let firstUpcomingConditionElement = document.createElement('span');
                firstUpcomingConditionElement.setAttribute('class', 'forecast-data');
                firstUpcomingConditionElement.textContent = `${upcomming.forecast[0].condition}`;

                firstUpcomingElement.appendChild(firstUpcomingSymbolElement);
                firstUpcomingElement.appendChild(firstUpcomingLowHighElement);
                firstUpcomingElement.appendChild(firstUpcomingConditionElement);

                let secondUpcomingElement = document.createElement('span');
                secondUpcomingElement.setAttribute('class', 'upcoming');

                let secondUpcomingSymbolElement = document.createElement('span');
                secondUpcomingSymbolElement.setAttribute('class', 'symbol');
                secondUpcomingSymbolElement.textContent = weatherSymbol[upcomming.forecast[1].condition];

                let secondUpcomingLowHighElement = document.createElement('span');
                secondUpcomingLowHighElement.setAttribute('class', 'forecast-data');
                secondUpcomingLowHighElement.textContent = `${upcomming.forecast[1].low}${weatherSymbol['Degrees']} ${upcomming.forecast[1].high}${weatherSymbol['Degrees']}`;

                let secondUpcomingConditionElement = document.createElement('span');
                secondUpcomingConditionElement.setAttribute('class', 'forecast-data');
                secondUpcomingConditionElement.textContent = `${upcomming.forecast[1].condition}`;

                secondUpcomingElement.appendChild(secondUpcomingSymbolElement);
                secondUpcomingElement.appendChild(secondUpcomingLowHighElement);
                secondUpcomingElement.appendChild(secondUpcomingConditionElement);

                let thirdUpcomingElement = document.createElement('span');
                thirdUpcomingElement.setAttribute('class', 'upcoming');

                let thirdUpcomingSymbolElement = document.createElement('span');
                thirdUpcomingSymbolElement.setAttribute('class', 'symbol');
                thirdUpcomingSymbolElement.textContent = weatherSymbol[upcomming.forecast[2].condition];

                let thirdUpcomingLowHighElement = document.createElement('span');
                thirdUpcomingLowHighElement.setAttribute('class', 'forecast-data');
                thirdUpcomingLowHighElement.textContent = `${upcomming.forecast[2].low}${weatherSymbol['Degrees']} ${upcomming.forecast[2].high}${weatherSymbol['Degrees']}`;

                let thirdUpcomingConditionElement = document.createElement('span');
                thirdUpcomingConditionElement.setAttribute('class', 'forecast-data');
                thirdUpcomingConditionElement.textContent = `${upcomming.forecast[2].condition}`;

                thirdUpcomingElement.appendChild(thirdUpcomingSymbolElement);
                thirdUpcomingElement.appendChild(thirdUpcomingLowHighElement);
                thirdUpcomingElement.appendChild(thirdUpcomingConditionElement);

                upcomingDivElement.appendChild(firstUpcomingElement);
                upcomingDivElement.appendChild(secondUpcomingElement);
                upcomingDivElement.appendChild(thirdUpcomingElement);
            })
            .catch(() => {
                divForecastElement.style.display = 'block';
                let errorElement = document.createElement('p');
                errorElement.setAttribute('id', 'errorMessage');
                errorElement.textContent = 'Error';
                divForecastElement.appendChild(errorElement);
            });
    });
}

attachEvents();