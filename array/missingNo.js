
// find the missing number
let arr = [1, 2, 4, 5];
// let N = Math.max(...arr); 
let N = arr.length + 1;
console.log(N);

let expectedSum = N * (N + 1) / 2; // 15
let actualSum = 0;

for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}

let missingNo = expectedSum - actualSum;
console.log(missingNo); // Output: 3

