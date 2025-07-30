
const countDigit = (num) => {
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}

console.log("count is : ", countDigit(123));