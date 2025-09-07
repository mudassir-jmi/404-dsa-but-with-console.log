
/*
    Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
    Input: s1 = "ab", s2 = "eidbaooo"
    Output: true
 */

const permutationOfString = (s1, s2) => {
    if (s1.length > s2.length) return false;

    let count = Array(26).fill(0);

    // (s1 - first window of s2)
    for (let i = 0; i < s1.length; i++) {
        count[s1.charCodeAt(i) - 97]++;
        count[s2.charCodeAt(i) - 97]--;
    }

    // If all zeros permutation found
    if (count.every(c => c === 0)) return true;

    // Slide the window
    for (let i = s1.length; i < s2.length; i++) {
        count[s2.charCodeAt(i) - 97]--;
        count[s2.charCodeAt(i - s1.length) - 97]++;

        if (count.every(c => c === 0)) return true;
    }

    return false;
};

console.log(permutationOfString("ab", "eidbaooo"));
