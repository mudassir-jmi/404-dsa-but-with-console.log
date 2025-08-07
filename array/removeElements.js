
// Remove Elements from the given array in place

const removeElementInPlace = (arr, val) => {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[k] = arr[i];
            k++;
        }
    }
    arr.length = k;
    return k;
}

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
let newLength = removeElementInPlace(arr, val);

console.log(arr);       // [0, 1, 3, 0, 4]
