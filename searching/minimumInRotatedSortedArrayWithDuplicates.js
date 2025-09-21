
/* 
 Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

Input: nums = [2,2,2,0,1]
Output: 0

*/

const MinimumInRotatedSortedArrayWithDuplicates = (nums) => {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[mid] > nums[right]) {
            left = mid + 1;                 // min in right half
        } else if (nums[mid] < nums[right]) {
            right = mid;                     // min in left half include mid
        } else {
            right--;                         // remove duplicate safely
        }
    }
    return nums[left];
}

console.log(MinimumInRotatedSortedArrayWithDuplicates([2, 2, 2, 0, 1]));
