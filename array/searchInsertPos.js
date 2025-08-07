/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1 

*/

const searchInsertPos = (arr, target) => {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (arr[mid] == target) return mid
        else if (arr[mid] < target) start = mid + 1
        else end - 1
    }
    return start
}

let arr = [1, 3, 5, 6]
let target = 5
console.log(searchInsertPos(arr, target));
