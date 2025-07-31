// Remove Duplicates value from array in place

const removeDuplicateFromArray = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            arr[i + 1] = arr[j];
            i++;
        }
    }
    // return i + 1;
    arr.length = i + 1;
    return arr;
}

let arr = [1, 1, 2, 2, 2, 3, 3]
console.log(removeDuplicateFromArray(arr));

