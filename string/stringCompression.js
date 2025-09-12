/*
 Given an array of characters chars, compress it using the following algorithm:
 Begin with an empty string s. For each group of consecutive repeating characters in chars:
If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

*/

var compress = function (chars) {
    let index = 0;
    let i = 0;
    while (i < chars.length) {
        let count = 0;
        let char = chars[i];
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }

        chars[index++] = char;

        if (count > 1) {
            for (let digit of count.toString()) {
                chars[index++] = digit;
            }
        }
    }
    return index;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));