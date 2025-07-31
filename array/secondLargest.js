// find second largest element in array

const findSecondLargest = (arr) => {
    let largest = arr[0];
    let sLargest = -1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            sLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > sLargest) {
            sLargest = arr[i]
        }
    }
    return sLargest;
}
let arr = [1, 2, 4, 7, 7, 5]
console.log('Second Largest Element is : ', findSecondLargest(arr));
