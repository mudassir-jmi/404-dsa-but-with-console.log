/*
    Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

    If target is not found in the array, return [-1, -1].

    You must write an algorithm with O(log n) runtime complexity.

    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]
*/

const firstOccur = (nums, target) => {
    let low = 0, high = nums.length - 1, first = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) {
            first = mid, high = mid - 1;
        } else if (nums[mid] < target) low = mid + 1
        else high = mid - 1;
    }
    return first;
}
const lastOccur = (nums, target) => {
    let low = 0, high = nums.length - 1, last = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) {
            last = mid, low = mid + 1;
        } else if (nums[mid] < target) low = mid + 1
        else high = mid - 1;
    }
    return last;
}
let searchRange = function (nums, target) {
    let first = firstOccur(nums, target)
    if (first == -1) return [-1, -1];
    let last = lastOccur(nums, target);
    return [first, last];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
