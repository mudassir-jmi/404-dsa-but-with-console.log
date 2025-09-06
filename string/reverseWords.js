/*
    Reverse Words in a String
    Input: s = "the sky is blue"
    Output: "blue is sky the"
*/

var reverseWords = function (s) {
    const trimStr = s.trim();  // remove white space
    const arr = trimStr.split(/\s+/);
    let start = 0, end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr.join(' ');
}

console.log(reverseWords("the sky is blue"))

