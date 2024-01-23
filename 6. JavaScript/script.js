/*
let range = {
    from: 1,
    to: 5
}

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            }
            else {
                return { done: true };
            }
        }
    };
};

for (let num of range){
    console.log(num);
}
*/

/*
function unique(arr) {
    arr = Array.from(new Set(arr));
       
    return arr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(values) ); 
*/

/*
function aclean(arr) {
    if (!arr.length) {
        return [];
    }
    sortred_map = new Map();
    for (str of arr) {        
        key = str.toLowerCase().split('').sort().join('')
        sortred_map.set(key, str);
    }
    return Array.from(sortred_map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr));
*/

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let chkReadMsg = new WeakSet();
// chkReadMsg.add(messages[0])
// console.log(chkReadMsg.has(messages[0]))
// console.log(chkReadMsg.has(messages[1]))

// let readMsgWhen = new WeakMap();
// readMsgWhen.add(messages[0], Date())

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  alert(doublePrices.meat); // 8