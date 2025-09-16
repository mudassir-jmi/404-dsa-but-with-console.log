/* 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Input: nums = [1,3,5,6], target = 5
Output: 2

*/

const searchInsertPosition = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return start;
}

console.log(searchInsertPosition([1, 3, 5, 6], 5)); // 2
