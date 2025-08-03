// Given a binary array, return the maximum number of consecutive 1's in the array.
const findMaxConsecutiveOnes = (arr) => {
    let count = 0;
    let maxi = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++;
            maxi = Math.max(maxi, count)
        } else {
            count = 0;
        }
    }
    return maxi;
}

let arr = [1, 1, 0, 1, 1, 1]
console.log(findMaxConsecutiveOnes(arr));
