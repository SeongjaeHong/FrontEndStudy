/*
Title: 가장 많이 받은 선물
Link: https://school.programmers.co.kr/learn/courses/30/lessons/258712

# Case 1
let friends = ["muzi", "ryan", "frodo", "neo"];
let gifts = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"];
Answer: 2

# Case 2
let friends = ["joy", "brad", "alessandro", "conan", "david"];
let gifts = ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"];
Answer: 4

# Case 3
let friends = ["a", "b", "c"];
let gifts = ["a b", "b a", "c a", "a c", "a c", "c a"];
Answer: 0
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


let friends = ["muzi", "ryan", "frodo", "neo"];
let gifts = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"];

alert(solution(friends, gifts));