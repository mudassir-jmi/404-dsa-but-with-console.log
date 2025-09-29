/* 
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Return the minimum integer k such that she can eat all the bananas within h hours.

Input: piles = [3,6,7,11], h = 8
Output: 4
*/

const calculateTotalHours = (piles, hourly) => {
    let totalH = 0;
    let n = piles.length;
    for (let i = 0; i < n; i++) {
        totalH += Math.ceil(piles[i] / hourly);
    }
    return totalH;
}

const minEatingSpeed = (piles, h) => {
    let low = 1, high = Math.max(...piles);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let totalH = calculateTotalHours(piles, mid);
        if (totalH <= h) high = mid - 1;
        else low = mid + 1;
    }
    return low;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
