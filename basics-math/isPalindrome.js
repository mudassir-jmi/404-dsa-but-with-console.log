
const isPalindrome = (num) => {
    let originalNum = num;
    let reverseNum = 0;
    let lastDigit = 0;
    while (num > 0) {
        lastDigit = num % 10;
        num = Math.floor(num / 10);
        reverseNum = (reverseNum * 10) + lastDigit;
    }
    if (originalNum == reverseNum)
        return true
    else return false
}

console.log(isPalindrome(123));
