function sumTo(num) {
    /* // method 1
    let sum = 0
    for(let i=1;i<=num;i++){
        sum += i;
    }
    return sum;
    */

    // if (num == 1) return 1;
    // else {
    //     return num + sumTo(num - 1);
    // }
    return num == 1 ? 1 : num + sumTo(num - 1);
}
// alert(sumTo(10));

function factorial(num) {
    return num == 1 ? 1 : num * factorial(num - 1);
}
// alert(factorial(5));

function fib(num) {
    // Fibonacci sequence

    /* method 1
    let fib_arr = {
        num: 1,
        prev: null,
        next: null
    }
    fib_arr.prev = { num: 1, next: fib_arr };

    for (let n = 3; n < num; n++) {
        fib_arr.next = {
            num: fib_arr.num + fib_arr.prev.num,
            prev: fib_arr,
            next: null
        }
        fib_arr = fib_arr.next
    }

    return fib_arr.num + fib_arr.prev.num;
    */

    let n1 = 1;
    let n2 = 1;

    let tmp = 0;
    for(let n=2;n<num;n++){
        tmp = n1+n2;
        n1 = n2;
        n2 = tmp;
    }

    return n2;
}
// alert(fib(7));

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printReverseList(list) {
    let x = [];
    let t = list;
    while(t.next){
        x.push(t.value);
        t=t.next;
    }
    x.push(t.value);
    for(let idx=x.length-1;idx>=0;idx--){
        console.log(x[idx])
    }
}

// printReverseList(list);

function sumAll(...args) {
	let sum = 0;
	for (let arg of args) sum += arg;
	return sum;
}
//alert(sumAll(1,2,5));

function showName(firstName, lastName, ...titles){
	alert(firstName + ' ' + lastName);
	alert(titles[0]);
	alert(titles[1]);
}
//showName("Bora", "Lee", "Software Engineer", "Researcher");

//let arr = [5,4,6];
//alert(Math.max(3,...arr,13))
let str = 'hello';
//alert([...str]);
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; 
alert(JSON.stringify(objCopy));