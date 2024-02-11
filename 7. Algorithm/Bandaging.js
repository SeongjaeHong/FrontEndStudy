/*
Title: 붕대 감기
Link: https://school.programmers.co.kr/learn/courses/30/lessons/250137

# Case 1
let bandage = [5, 1, 5];  // [Casting time, Healing, Extra healing]
let health = 30;
let attacks = [[2, 10], [9, 15], [10, 5], [11, 5]]; // [Attack time, Damage]
Answer: 5

# Case 2
let bandage = [3, 2, 7];
let health = 20;
let attacks = [[1, 15], [5, 16], [8, 6]];
Answer: -1

# Case 3
let bandage = [4, 2, 7];
let health = 20;
let attacks = [[1, 15], [5, 16], [8, 6]];
Answer: -1

# Case 4
let bandage = [1, 1, 1];
let health = 5;
let attacks = [[1, 2], [3, 2]];
Answer: 3
*/

function solution(bandage, health, attacks) {
    let curHealth = health;

    for (let i = 0; i < attacks.length; i++) {
        curHealth -= attacks[i][1];

        if (curHealth < 1) {
            return -1
        }

        if (i < attacks.length - 1) {
            let timeLeft = attacks[i + 1][0] - attacks[i][0] - 1;
            let heal = timeLeft * bandage[1] + Math.floor(timeLeft / bandage[0]) * bandage[2];

            curHealth += heal;
            curHealth = curHealth > health ? health : curHealth;
        }
    }

    return curHealth;
}


let bandage = [5, 1, 5];
let health = 30;
let attacks = [[2, 10], [9, 15], [10, 5], [11, 5]];

let answer = solution(bandage, health, attacks);
alert(answer);