// find largest element in array

const findLargestElement = (arr) => {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i];
    }
    return largest;
}

let arr = [3, 2, 1, 5, 2];
console.log('largest element is : ', findLargestElement(arr));
