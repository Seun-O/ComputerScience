// Bubble Sort

function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

const array = [12, 3, 4, 5, 77, 89, 23, 4, 5];
console.log(bubbleSort(array.slice()));
