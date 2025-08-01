// check array is sorted or not?

const isArraySorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) { }
        else return false;
    }
    return true;
}
let arr = [1, 2, 4, 7, 7, 5]
console.log(isArraySorted(arr));


