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

