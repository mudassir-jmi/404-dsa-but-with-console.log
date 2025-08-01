// swap alternate values in array

const swapAlternate = (arr) => {
   for (let i = 0; i < arr.length; i += 2) {
      if (arr < arr.length - 1) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
   }
   return arr;
}
let arr = [5, 6, 9, 3, 12]
console.log(swapAlternate(arr))