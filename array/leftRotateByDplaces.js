// left rotate array by D Places First Approach

const leftRotateByDplaces = (arr, D) => {
    for (let i = 0; i < D; i++) {   // Outer loop runs (D) times
        let temp = arr[0];
        for (let j = 1; j < arr.length; j++) {  // Inner Loop runs (n-1) times
            arr[j - 1] = arr[j];
        }
        arr[arr.length - 1] = temp;
    }
    return arr;   // Total Operations = D × (n-1) ≈ D × n.
}                // Worst Case: If D ≈ n, then time complexity is O(n²).
// Space Complexity = O(1)
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(leftRotateByDplaces(arr, 3));

// Left rotate array by D Places Second Approach

const leftRotateByDplaces2ndApproach = (arr, D) => {
    D = D % arr.length; // Handle cases where D > arr.length
    reverse(arr, 0, D - 1);     // Reverse first D elements
    reverse(arr, D, arr.length - 1); // Reverse remaining elements
    reverse(arr, 0, arr.length - 1); // Reverse entire array
    return arr;
};
// Time complexity is O(n)
// Space Complexity = O(1)

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap
        start++;
        end--;
    }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(leftRotateByDplaces2ndApproach(arr1, 3)); 