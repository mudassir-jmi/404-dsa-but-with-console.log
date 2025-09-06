/*
Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

Input: s = "daabcbaabcbc", part = "abc"
Output: "dab"

*/

const removeOccurrences = (s, part) => {
    while (s.includes(part)) {
        s = s.replace(part, "");
    }
    return s;
};

console.log(removeOccurrences("daabcbaabcbc", "abc"));
