
// check string is palindrome or not if palindrome return 1 otherwise 0

const isPalindrome = (str) => {
    let s = 0; e = str.length - 1;
    while (s <= e) {
        if (str[s] != str[e]) return 0;
        else {
            s++;
            e--;
        }
    }
    return 1;
}

const str = "abcba";
console.log(isPalindrome(str));
