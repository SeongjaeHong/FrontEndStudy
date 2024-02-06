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