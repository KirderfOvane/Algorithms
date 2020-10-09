function selectionSort(arr) {
  let max = 0;
  let temp = 0;

  for (let j = arr.length; j > 0; j--) {
    max = 0;
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[max]) {
        max = i;
      }
    }

    if (max !== j - 1) {
      temp = arr[j - 1];
      arr[j - 1] = arr[max];
      arr[max] = temp;
    }
  }

  return arr;
}
//                          i
const output = selectionSort([11, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(output); //                          j
