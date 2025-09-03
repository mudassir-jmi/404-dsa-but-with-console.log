
// convert the given string in to uppercase

const toUppercaseString = (str) => {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        // if lowercase letter (a–z), convert to uppercase
        if (code >= 97 && code <= 122) {
            code = code - 32; // difference between 'a' (97) and 'A' (65)
        }

        result += String.fromCodePoint(code); // converts a Unicode number into character.
    }

    return result;
}

console.log(toUppercaseString("this is my lowercase string")); // THIS IS MY LOWERCASE STRING
