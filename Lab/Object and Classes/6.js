function solve(input){
    let meetings = {};

    for (const item of input) {
        let meetInfo = item.split(' ');

        if(meetings.hasOwnProperty(meetInfo[0])){
            console.log(`Conflict on ${meetInfo[0]}!`);
        }else{
            meetings[meetInfo[0]] = meetInfo[1];
            console.log(`Scheduled for ${meetInfo[0]}`);
        }
    }

    for (const key in meetings) {
       console.log(`${key} -> ${meetings[key]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);