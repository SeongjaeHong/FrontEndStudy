let majorityElement = function (nums) {
    let table = {};
    let halfLength = Math.floor(nums.length / 2);
    let isEven = nums.length % 2 == 0 ? true : false;
    for (let num of nums) {
        if (num in table) {
            table[num]++;
        }
        else {
            table[num] = 1;
        }
        if (isEven){
            if (table[num] >= halfLength) return num;
        }
        else{
            if (table[num] > halfLength) return num;
        }
    }
};

let nums = [4];
console.log(majorityElement(nums));