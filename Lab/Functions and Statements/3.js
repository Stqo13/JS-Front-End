function solve(first, second){
    let arr = [];
    if(first.charCodeAt(0) < second.charCodeAt(0)){
        for (let i = first.charCodeAt(0) + 1; i < second.charCodeAt(0); i++) {
            arr.push(String.fromCharCode(i));
        }
    }else{
        for (let i = second.charCodeAt(0) + 1; i < first.charCodeAt(0); i++) {
            arr.push(String.fromCharCode(i));
        }
    }

    console.log(arr.join(' '));
}

solve('C', '#');