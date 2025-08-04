// find the number which appears ones in the given array

const numberAppearsOnes = (arr) => {
    for (let i = 0; i < arr.length; i++) {   // O(n)
        let num = arr[i];
        let count = 0;
        for (let j = 0; j < arr.length; j++) {  // O(n)
            if (arr[j] == num)
                count++;
        }
        if (count == 1) return num;
    }
}
// Total Time Complexity O(n) + O(n) =  O(n^2) 
// Space Complexity = O(1)

let arr = [1, 1, 2, 3, 3, 4, 4]
console.log(numberAppearsOnes(arr));
