
const reverseNum = (num) => {
    let lastDigit = 0;
    let reverse = 0;
    while (num > 0) {
        lastDigit = num % 10;
        num = Math.floor(num / 10);
        reverse = (reverse * 10) + lastDigit;
    }
    return reverse;
}

console.log('Reverse Number is : ', reverseNum(123));
