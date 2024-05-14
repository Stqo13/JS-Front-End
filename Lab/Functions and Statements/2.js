function solve(num1, num2, num3){
    let sum = (num1, num2) => {
        return num1 + num2;
    }

    let sumOfFirstTwo = sum(num1, num2);

    let subtract = (sumOfFirstTwo, num3) => {
        return sumOfFirstTwo - num3;
    }

    let result = subtract(sumOfFirstTwo, num3);

    console.log(result);
}