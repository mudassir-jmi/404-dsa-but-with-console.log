/*
    Input: s = "(()())(())"
    Output: "()()()"
    Explanation: 
    The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
    After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
*/

const removeOuterParentheses = (s) => {
    let ans = "";
    let count = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] === ')') count--;
        if (count > 0) ans = ans + s[i];
        if (s[i] === '(') count++;
    }
    return ans;
}

let s = "(()())(())"
console.log(removeOuterParentheses(s)); // ()()()
