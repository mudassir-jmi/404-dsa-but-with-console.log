// Intersection of Two Arrays

/* 

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order

Input: arr1 = [1,2,2,1], arr2 = [2,2]
Output: [2]

*/

const findIntersectionOfArray = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            if (element === arr2[j]) {
                if (!result.includes(element)) { // avoid duplicates
                    result.push(element);
                }
            }
        }
    }
    return result;
}

let arr1 = [1, 2, 2, 1], arr2 = [2, 2]
console.log(findIntersectionOfArray(arr1, arr2)); // [2]


