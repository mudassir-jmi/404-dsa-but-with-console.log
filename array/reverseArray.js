
const reverseArray = (arr) => {
    let sIndex = 0;
    let eIndex = arr.length - 1;
    while (sIndex <= eIndex) {
        [arr[sIndex], arr[eIndex]] = [arr[eIndex], arr[sIndex]]
        sIndex++;
        eIndex--;
    }
    return arr;
}

console.log(reverseArray([9, 8, 7, 6, 5]));
