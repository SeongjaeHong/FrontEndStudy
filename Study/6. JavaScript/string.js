function ucFirst(str) {
    if (!str) {
        return str;
    }
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}
// alert(ucFirst("john") + ' : ' + (ucFirst("john") == "John"));

function checkSpam(str) {
    if (!str) {
        return;
    }

    if (typeof (str) != typeof (String())) {
        str = String(str);
    }
    str = str.toLowerCase();
    SPAMKEYWORDS = ['viagra', 'XXX'];

    for (spamKey of SPAMKEYWORDS) {
        if (str.includes(spamKey)) {
            return true;
        }
    }
    return false;
}

// str = "many of blah blah and balh _viagra2 blah";
// alert(checkSpam(str));

function truncate(str, maxlength = 20) {
    // if(str.length>maxlength){
    //     str = str.slice(0,17) + '...';        
    // }
    // return str;
    return (str.length > maxlength) ? str.slice(0, 17) + '...' : str;
}

// trunc_str = truncate('1234567890abcdefghijklm');
// alert(trunc_str);

function sumInput() {
    let arr = [];
    let i = 0;
    while (true) {
        x = prompt()
        if (x == null || !isFinite(x)) break;
        arr[i++] = +x;
    }
    sum = 0;
    for (n of arr) sum += n;
    return sum;
}
// alert(sumInput());

function getMaxSubSum(arr) {
    let pos_arr = [];
    let i = 0;
    for (n of arr) {
        if (n > 0) pos_arr.push(i);
        i++;
    }
    if (!pos_arr.length) return [0, 0, 0];
    if (pos_arr.length == 1) return arr[pos_arr[0]];

    let group = [-1, -1, -1];
    for (pos_ind in pos_arr) {
        let start = pos_arr[+pos_ind];
        let add_end = start;
        let end = +pos_ind + 1;
        let sum = arr[start];
        for (n = start + 1; n < pos_arr[pos_arr.length - 1] + 1; n++) {
            if (n < pos_arr[end]) {
                var comp = sum + arr[n] + arr[pos_arr[end]];
            }
            else {
                var comp = sum + arr[n];
            }
            if (comp < sum) {
                break;
            }
            sum += arr[n];
            add_end = n;
            if (n == pos_arr[end] && end < pos_arr.length - 1) {
                end++;
            }
        }
        if (group[2] < sum) {
            group = [start, add_end, sum];
        }
    }
    return group;
}
// arr = [-9, 0, 6, -2, 5, -4, -7, 11, 0, -1, 6];
// alert(getMaxSubSum(arr))  // 7, 10, 16

////////
// let x = [-1, 'a', 0, -1]
// x.forEach((item, index) => { console.log(`${item}:${typeof (item)}, ${index}:${typeof (index)}`) });
/* Output
-1:number, 0:number
'a':string, 1:number
0:number, 2:number
-1:number, 3:number
*/

////////
// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Pete" },
//     { id: 3, name: "Mary" }
// ];
// let user = users.find(item => item.id == 1);
// Output: {id: 2, name: 'Pete'}

////////
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = users.map(info=>info.name);
// alert( names ); // John, Pete, Mary

/////////
function sortByAge(arr) {
    // function compare(a, b) {
    //     return a.age > b.age ? 1 : -1;
    // }
    // arr.sort(compare);
    arr.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete