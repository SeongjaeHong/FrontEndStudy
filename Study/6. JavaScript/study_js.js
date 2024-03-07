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
/*
let i = 0;

setTimeout(() => alert(i), 1);
for(let j = 0; j < 10000; j++) {
  i++;
}
*/

function work(a, b) {
  alert(a + b);
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

// work = spy(work);
// work(1, 2);
// work(3, 4);
// for (let args of work.calls) {
//   alert('call:' + args.join());
// }

/*
function f(x) {
  alert(x);
}

function delay(func, time) {
  function f() {
    setTimeout(() => func.apply(this, arguments), time);
  }
  return f;
  // return function(){setTimeout(()=>func.apply(this, arguments), time)};
}

let f1000 = delay(f, 3000);
let f1500 = delay(f, 1500);

f1000('test');
f1500('test');
*/

/*
function test(str){
  console.log(str);
}

function debounce(func, delay){
  let temp = '';
  let timeId;

  return function(){
    temp = temp.concat(...arguments);
    clearTimeout(timeId);
    timeId = setTimeout(()=>func.call(this, temp), delay);
  };
}

let f = debounce(test, 100);
f('a');
f('_hi');
f('_hello');
*/

function f(a) {
  console.log(a);
}

function throttle(func, ms) {
  let saveArgs;
  let throttledTime;
  let throttlingTimeId;

  function wrapper() {
    if (throttlingTimeId == undefined) {
      func.apply(this, arguments);
      throttledTime = Date.now();
      throttlingTimeId = 0;
    }
    else {
      clearInterval(throttlingTimeId);
      let timeInterval = Date.now() - throttledTime;
      if (timeInterval > ms) {
        func.apply(this, arguments);
        throttledTime = Date.now();
      }
      else {
        saveArgs = arguments;
        delay = ms - timeInterval;
        throttlingTimeId = setTimeout(() => func.apply(this, saveArgs), delay);
      }
    }
  }

  return wrapper;
}

function throttle2(func, ms) {
  let savedArgs;
  let isThrottled = false;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;
    
    setTimeout(function(){
      isThrottled = false;
      if(savedArgs){
        wrapper.apply(throttle2, savedArgs);
        savedArgs = null;
      }
    }, ms);
  }
  return wrapper;
}

let ff = throttle2(f, 1000);
ff(1);
setTimeout(()=>ff.call(this, 2), 1000);  // this will be run in the last orde
ff(3); // this will be ignored
ff(4); // this will be ignored
ff(5); // this will be run after 1000 ms
