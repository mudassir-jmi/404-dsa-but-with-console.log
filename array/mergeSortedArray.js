
/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

*/

/*
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
*/

const mergeSortedArray = function (nums1, m, nums2, n) {
    let i = m - 1; // last index of nums1
    let j = n - 1; // last index of nums2
    let k = m + n - 1; // last index of nums1 (total size)

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        } else {
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }

    // If nums2 still has elements
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
mergeSortedArray(nums1, 3, nums2, 3);
console.log(nums1);   // [1, 2, 2, 3, 5, 6]