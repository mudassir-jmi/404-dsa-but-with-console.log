
/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. */

/* Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

const twoSum = (arr, target) => {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum === target) return [left, right]
        else if (sum < target) left++;
        else right--;
    }
    return null;
}

let arr = [2, 7, 11, 15], target = 9

console.log(twoSum(arr, target)); // [0, 1]
