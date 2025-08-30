/*
 Write a function that reverses a string. The input string is given as an array of characters.

Input: str = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

*/

const reverseString = (str) => {
    let s = 0, e = str.length - 1;

    while (s < e) {
        [str[s], str[e]] = [str[e], str[s]];
        s++;
        e--;
    }
    return str;
}

let str = ["h", "e", "l", "l", "o"];
console.log(reverseString(str));
