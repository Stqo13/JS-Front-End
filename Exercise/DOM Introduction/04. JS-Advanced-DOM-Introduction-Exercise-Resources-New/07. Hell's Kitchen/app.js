function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    
    function onClick () {
        let textareaElement = document.querySelector('div#inputs textarea');
        let bestRestaurantOutputElement = document.querySelector('div#outputs #bestRestaurant p');
        let bestWorkersOutputElement = document.querySelector('div#outputs #workers p');
        
        let restaurants = JSON.parse(textareaElement.value);
        
        let restaurantNames = [];
        let workerNames = [];
        let salaries = [];
        
        let objArray = [];
        
        let index = 0;
        let counter = 0;
        let workerCount = 0;
        
        for (const restaurant of restaurants) {
            let rwp = restaurant.split(' - ');
            restaurantNames.push(rwp[0]);
            let wsp = rwp[1].split(', ');
            for (const item of wsp) {
                let ws = item.split(' ');
                workerNames.push(ws[0]);
                salaries.push(ws[1]);
            }
            
            let currentSum = 0;
            
            let currentLenght = counter;
            
            for (let i = counter; i < salaries.length; i++) {
                currentSum += Number(salaries[i]);
                counter++;
            }
            
            let currentAverage = 0;
            if(index === 0){
                currentAverage = currentSum / salaries.length;
            }else {
                let newLenght = salaries.length - currentLenght;
                currentAverage = currentSum / newLenght;
            }    
            
            let currentObj = {
                restName: restaurantNames[index],
                averageSalary: currentAverage.toFixed(2),
                workers: workerNames.slice(workerCount),
                salaries: salaries.slice(workerCount),
            }
            
            workerCount = workerNames.length;
            index++;
            objArray.push(currentObj);
        }
        objArray.sort((a, b) => b.averageSalary - a.averageSalary);

        let wsp = {};
        for (let i = 0; i < objArray[0].workers.length; i++) {
            wsp[objArray[0].workers[i]] = objArray[0].salaries[i];
        }

        let betsWorkersResult = '';
        const salaryArray = Object.entries(wsp).map(([name, salary]) => ({ name, salary }));

        salaryArray.sort((a, b) => Number(b.salary) - Number(a.salary));

        console.log(salaryArray);

        let bestSalary = Number(salaryArray[0].salary).toFixed(2);
        let bestRestaurant = `Name: ${objArray[0].restName} Average Salary: ${objArray[0].averageSalary} Best Salary: ${bestSalary}`;
        bestRestaurantOutputElement.textContent = bestRestaurant;

        for (const item of salaryArray) {
            betsWorkersResult += `Name: ${item.name} With Salary: ${item.salary} `;
        }

        bestWorkersOutputElement.textContent = betsWorkersResult.trim();
    }
}