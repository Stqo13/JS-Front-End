function solve(array){
    let result = [];
    const length = array.length;
    array = array.sort((a, b) => {
            if (a > b) {
                return 1;
            } else if(a < b){
                return -1
            } else{
                return 0
            }
        });

    for (let i = 0; i < length; i++) {
       if(i % 2 === 0){
        result.push(array.shift());
       } else{
        result.push(array.pop());
       }
    }

    return result
}
// for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - i -1; j++) {
//         let tempValue = array[j];
//         if (array[j] > array[j + 1]) {
//             array[j] = array[j + 1];
//             array[j + 1] = tempValue;
//         }
//     }
// }

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));