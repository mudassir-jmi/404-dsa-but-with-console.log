
// sort any array of 0's, 1's and 2's 

const sortArray = (arr) => {
    let count0 = 0, count1 = 0, count2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) count0++;
        else if (arr[i] == 1) count1++;
        else count2++;
    }

    for (let i = 0; i < count0; i++) arr[i] = 0;
    for (let i = count0; i < count0 + count1; i++) arr[i] = 1;
    for (let i = count0 + count1; i < arr.length; i++) arr[i] = 2;
    return arr;
}

let arr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]
// console.log(sortArray(arr));

// using Dutch National Flag Algorithm optimize it in one pass

const sortArrayByDNF = () => {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid === 0]) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            mid++;
        }
        else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
        }
    }
    return arr1;
}

let arr1 = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(sortArray(arr1));