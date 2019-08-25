// Bubble Sort

// Function to handle swapping numbers
function swap(arr, i) {
  let temp;
  temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
}

function bubbleSort(arr) {
  let swapped;
  // Object to Store values to calculate complexity
  let complexity = {
    sorted: arr,
    outerCount: 0,
    innerCount: 0,
    swapCount: 0
  };
  do {
    complexity.outerCount++;
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      complexity.innerCount++;
      if (arr[i] > arr[i + 1]) {
        complexity.swapCount++;
        swap(arr, i);
        swapped = true;
      }
    }
  } while (swapped);
  return complexity;
}
const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const randomArray = [9, 10, 1, 5, 7, 2, 4, 6, 8, 3];

let largeArray = [];
for (i = 100; i >= 0; i--) {
  largeArray.push(i);
}

bubbleSort(orderedArray);
/**
   { sorted: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    outerCount: 1,
    innerCount: 10,
    swapCount: 0 }
   */

bubbleSort(reversedArray);
/**
  { sorted: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    outerCount: 10,
    innerCount: 100,
    swapCount: 45 }
   */

bubbleSort(randomArray);
/**
  { sorted: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    outerCount: 8,
    innerCount: 80,
    swapCount: 26 }
   */

bubbleSort(largeArray);
/**
  { sorted: [..., 98, 99, 100]  ,
    outerCount: 101,
    innerCount: 10201,
    swapCount: 5050 }
   */
