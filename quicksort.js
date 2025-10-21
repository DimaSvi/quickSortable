function quickSortInPlace(arr, ascending = true, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, ascending, low, high);
    quickSortInPlace(arr, ascending, low, pivotIndex - 1);
    quickSortInPlace(arr, ascending, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, ascending, low, high) {
  const pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (ascending ? arr[j] < pivot : arr[j] > pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

const numbers = [5, 3, 8, 4, 2, 7, 1, 10];

console.log("Сортування за зростанням:");
console.log(quickSortInPlace([...numbers], true));

console.log("Сортування за спаданням:");
console.log(quickSortInPlace([...numbers], false));
