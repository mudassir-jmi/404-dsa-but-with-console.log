/** 
 * Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
 
 You must decrease the overall operation steps as much as possible.
 Input: nums = [2,5,6,0,0,1,2], target = 0
 Output: true

 */

var searchInRotatedArrayWithDuplicates = function (nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) return true;
        // low , mid and high are same
        if (nums[low] == nums[mid] && nums[mid] == nums[high]) {
            low++, high--;
            continue;
        }
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) high = mid - 1;
            else low = mid + 1;
        }
        else {
            if (nums[mid] <= target && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return false
};

console.log(searchInRotatedArrayWithDuplicates([2, 5, 6, 0, 0, 1, 2], 0));
