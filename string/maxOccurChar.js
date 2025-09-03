

// find maximum occurring  char

const maxOccurChar = (str) => {
    let strObj = {};
    let maxKey = "";

    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        if (!strObj[key]) strObj[key] = 0;
        strObj[key]++;
        if (maxKey == "" || strObj[key] > strObj[maxKey])
            maxKey = key
    }
    return maxKey
}

console.log(maxOccurChar("Hello"));
