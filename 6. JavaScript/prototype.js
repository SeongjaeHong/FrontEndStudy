/*
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {    
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};


speedy.eat("apple");
alert(speedy.stomach); // apple

alert(lazy.stomach); // apple
alert(hamster.stomach);
*/

/*
Function.prototype.defer = function (ms) {
    let x = this;
    alert(`Function this:${this}`);
    return function(){
        alert(`Inner function this:${this}`);
        setTimeout(()=>x.apply(this), ms)
    };
};
let user = {
    name: "John",
    sayHi() {
        alert(this.name);
    }
}

user.sayHi = user.sayHi.defer(1000);
user.sayHi();
*/


/*
// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join();
//         }
//     }
// });

let dictionary = Object.create(null);
dictionary.toString = function(){
    return Object.keys(this).join();
};
Object.defineProperty(dictionary, 'toString', {
    enumerable: false,
    configurable: false
})

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for(let key in dictionary){
    alert(key);
}

alert(dictionary);
*/

Function.prototype.defer = function (ms) {
    let f = this;
    return function () {
        setTimeout(() => f.apply(this), ms);
    }
};

let user = {
    name: "John",
    sayHi() {
        alert(this.name);
    }
}

user.sayHi = user.sayHi.defer(1000);

user.sayHi();