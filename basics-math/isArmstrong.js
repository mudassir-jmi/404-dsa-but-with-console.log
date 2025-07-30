
const isArmstrong = (num) => {
    let originalNum = num;
    let lastDigit = 0;
    let sum = 0;
    while (num > 0) {
        lastDigit = num % 10;
        num = Math.floor(num / 10)
        sum = sum + (lastDigit * lastDigit * lastDigit)
    }
    if (originalNum == sum) return 'Armstrong Number'
    else return 'Not a Armstrong Number'
}

console.log(isArmstrong(121));
