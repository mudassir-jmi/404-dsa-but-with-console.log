
// find the missing number from the given array

let arr = [1, 2, 4, 5];
// let N = Math.max(...arr); 
let N = arr.length + 1;
// console.log(N);

let expectedSum = N * (N + 1) / 2; // 15
let actualSum = 0;

for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}

let missingNo = expectedSum - actualSum;
// console.log(missingNo); // Output: 3

// 2nd Approach to find missing number

const findMissingNumber = (arr) => {
    let n = arr.length + 1; // total count if nothing was missing
    let xor = 0;

    for (let i = 0; i < n - 1; i++) {
        xor = xor ^ arr[i];     // XOR with actual array value
        xor = xor ^ (i + 1);    // XOR with expected number in range
    }

    // Finally XOR with n (last expected number)
    xor = xor ^ n;

    return xor;
}

let arr1 = [1, 2, 4, 5];
console.log(findMissingNumber(arr1)); // 3



