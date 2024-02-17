function getNumber(str) {
    let number;
    const range = (start, end, step = 1) =>
        Array.from({ length: (end - start) / step + 1 }, (v, k) => end - k * step);

    for (let x of range(0, 9)) {
        number = String(x).repeat(3);
        if (str.includes(number)) {
            return number;
        }
    }
    return -1;
}

let user = {
    name: "John",
    hi() { console.log(this.name); },
    bye() { console.log("Bye"); }
};

user.hi();

(user.name == "John" ? user.hi.bind(user) : user.bye.bind(user))();
