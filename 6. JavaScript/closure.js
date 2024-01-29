/*
function test(){
    function cnt(){
        return phrase++;
    };
    return cnt();
}
let phrase = 0;
let x = test;
x();
x();
x();
alert(phrase);
*/

/*
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
*/

/*
function sum(num){
    this.num = num;
    return function(num2){
        return num + num2
    }
}

alert(sum(1)(3));
*/

/*
function func() {
  console.log(x); // uninitialized
  console.log(y); // non-existing

  let x = 2;  // now it is initialized
}

func();
*/


function byField(key) {
    return (a, b) => a[key] > b[key] ? 1 : -1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
console.log(JSON.stringify(users, null, 2));


