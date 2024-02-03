/*
function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }
  
  ask("질문 있으신가요?", () => alert('OK를 선택하셨습니다.'), result => alert(result));
  */

/*
function makeCounter(){
  function counter(){
      return ++counter.count;
  }
  counter.count = 0;

  return counter;
}
let counter = makeCounter();
counter.count = 13;
alert(counter())
*/
/*
  let sayHi = function func(who){
    if(who){
        alert(`Hello ${who}`);
    }
    else{
        func('Guest');
    }
  };

let welcome = sayHi;
sayHi = null;
welcome();
*/

/*
function makeCounter() {
    function counter() {
        return counter.count++;
    }
    counter.count = 0;
    counter.set = function (value) {
        counter.count = value;
    };
    counter.decrease = function () {
        counter.count--;
    };
    return counter;
}

counter = makeCounter();
counter.set(13);
counter.decrease();
alert(counter());
*/

/*
function sum(num){
    let num2 = num;

    function f(n){
        num2 += n;
        return f;
    }
    f.toString = function(){
        return num2;
    };
    return f;
}
alert(sum(5)(3));
*/

/*
function printNumbers(from, to) {
  let n=from;
  let timerId = setInterval(go, 1000);
  function go(){
    console.log(n);    
    if (n == to){
      clearInterval(timerId);
    }
    n++;
  }
  go();
}

printNumbers(5,6);

*/

let i = 0;

setTimeout(() => alert(i), 1);
for(let j = 0; j < 10000; j++) {
  i++;
}