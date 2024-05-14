function reverseString(first, second, third){
    let arr = [];
    arr.push(first);
    arr.push(second);
    arr.push(third);

    //console.log(`${third} ${second} ${first}`);
    console.log(arr.reverse().join(' '));
}

reverseString('A', 'B', 'C');