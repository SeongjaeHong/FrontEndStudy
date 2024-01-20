function Calculate(){
    this.read = function() {
        this.n1 = +prompt();
        this.n2 = +prompt();
    };

    this.sum = function() {
        return this.n1 + this.n2;
    };
}

// let calculate = new Calculate();
// calculate.read();
// alert('sum = ' + calculate.sum());

function Accumulator(num){
    this.num = num;
    this.input = [];
    this.read = () => {
        this.input.push(+prompt());
    };
    this.value = () => {
        let num = this.num;
        for(x in this.input){
            num += this.input[x];
        }
        return num;
    }
}

// acc = new Accumulator(4);
// acc.read();
// alert(acc.value());

let something=null;
let x = 5;
something?.func(x++);  // nothing happens
alert('x: ' + x);