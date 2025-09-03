
// convert the given string in to lowercase
function toLowercaseString(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        // if uppercase letter (A–Z), convert to lowercase
        if (code >= 65 && code <= 90) {
            code = code + 32;
        }

        result += String.fromCodePoint(code); // add character to result
    }

    return result;
}

console.log(toLowercaseString("This is My String"));

