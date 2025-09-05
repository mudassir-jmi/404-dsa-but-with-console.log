
/**
 * Convert Roman to Integer
 * Input: s = "LVIII"  Output: 58
 */
var romanToInt = function (s) {
    const romanVal = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && romanVal[s[i]] < romanVal[s[i + 1]]) {
            ans = ans - romanVal[s[i]];
        } else {
            ans = ans + romanVal[s[i]];
        }
    }
    return ans;
};

console.log(romanToInt("LVIII")); // 58


