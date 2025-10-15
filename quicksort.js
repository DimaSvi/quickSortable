function quickSort(arr, ascending = true) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (ascending ? arr[i] < pivot : arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left, ascending), pivot, ...quickSort(right, ascending)];
}

const numbers = [5, 3, 8, 4, 2, 7, 1, 10];

console.log("Сортування за зростанням:");
console.log(quickSort(numbers, true));

console.log("Сортування за спаданням:");
console.log(quickSort(numbers, false));
