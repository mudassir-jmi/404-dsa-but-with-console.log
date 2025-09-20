
/* 
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Input: nums = [3,4,5,1,2]
Output: 1

*/

const findMinimumRotatedSortedArray = (nums) => {
    let low = 0, high = nums.length - 1;
    let ans = Number.MAX_SAFE_INTEGER;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[low] <= nums[mid]) {
            ans = Math.min(ans, nums[low])
            low = mid + 1;
        } else {
            high = mid - 1;
            ans = Math.min(ans, nums[mid])
        }
    }
    return ans;
};

console.log(findMinimumRotatedSortedArray([3, 4, 5, 1, 2]));
