/*
function getNumber(str) {
    let number;
    const range = (start, end, step = 1) =>
        Array.from({ length: (end - start) / step + 1 }, (v, k) => end - k * step);

        for (let x of range(0,9)) {
        number = String(x).repeat(3);
        if (str.includes(number)) {
            return number;
        }
    }
    return -1;
}

let s = prompt('number?','');
console.log(getNumber(s));
*/

function solution(friends, gifts) {
    let answer = 0;
    let giftTable = [];
    let indexTable = [];

    // Setting a giftTable and an indexTable to default.
    for (let name of friends) {
        indexTable[name] = {
            'give': 0,
            'take': 0,
            'index': 0,
            'nextMonth': 0 // Number of gifts which will be given in next month.

        };

        for (let friend of friends) {
            if (friend != name) {
                giftTable[name] = { ...giftTable[name], [friend]: 0 };
            }
        }
    }

    // Setting a giftTable and an indexTable.
    for (pair of gifts) {
        let [giver, taker] = pair.split(' ');
        giftTable[giver][taker]++;
        indexTable[giver]['give']++;
        indexTable[taker]['take']++;
    }

    // Calculating an index of an indexTable.
    for (let name of friends) {
        indexTable[name]['index'] = indexTable[name]['give'] - indexTable[name]['take'];
    }
    
    // Calculating number of gits to get.
    let i = 1;
    for (let me of friends) {
        for (let friend of friends.slice(i++)) {
            if (friend != me) {
                if (giftTable[me][friend] > giftTable[friend][me]) {
                    indexTable[me]['nextMonth']++;
                }
                else if (giftTable[me][friend] < giftTable[friend][me]) {
                    indexTable[friend]['nextMonth']++;
                }
                else {
                    // Comparing indexes of both
                    if (indexTable[me]['index'] > indexTable[friend]['index']) indexTable[me]['nextMonth']++;
                    else if (indexTable[me]['index'] < indexTable[friend]['index']) indexTable[friend]['nextMonth']++;
                }
            }
        }
    }

    // Get an answer
    for (let name of friends) {
        answer = indexTable[name]['nextMonth'] > answer ? indexTable[name]['nextMonth'] : answer;
    }

    return answer;
}


/* Case 1
let friends = ["joy", "brad", "alessandro", "conan", "david"];
let gifts = ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"];
*/

/* Case 2
let friends = ["a", "b", "c"];
let gifts = ["a b", "b a", "c a", "a c", "a c", "c a"];
*/

let friends = ["muzi", "ryan", "frodo", "neo"];
let gifts = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"];

alert(solution(friends, gifts));
// solution(gifts);