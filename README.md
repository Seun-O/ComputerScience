# ComputerScience

### Big O

Big O essentially just looks for the big picture, it is used to measure how quickly your solution is in solving a problem.

**O(1) – Constant Time Complexity**

- Constant Time Complexity, this is the fastest time complexity on the Big O Notation scale.
- The value is O(1), it will always take the same amount of time to compute things.
- This is the best case scenario for JavaScript functions

_Examples:_ Hash Tables & Array Lookups

```javascript
// Time Complexity 0(1) Constant Time
const main = () => {
  console.log("Hello World!");
};
main();
```

**O(log n) – Logarithmic**

- Execution time increases, but at a decreasing rate.
-

_Example:_ Binary Search

```javascript
function binarySearch(array, target){
  let startIndex = 0;
  let endIndex = array.length - 1;

  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(target === array[middleIndex) {
      return console.log("Target was found at index " + middleIndex);
    }
    if(target > array[middleIndex]) {
      console.log("Searching the right side of Array")
      startIndex = middleIndex + 1;
    }
    if(target < array[middleIndex]) {
      console.log("Searching the left side of array")
      endIndex = middleIndex - 1;
    }
    else {
      console.log("Not Found this loop iteration. Looping another iteration.")
    }
  }

  console.log("Target value not found in array");
}

```

**O(n) – Linear**

- Performance will grown linearly in direct proportion to the size of n
- Time complexity increases as the size increase and it increases at the same rate.

_Example:_ Looping through an Array

```javascript
// Time Complexity 0(1) Constant Time
const main = n => {
  for (let i = 0; i < n; n++) {
    console.log(i);
  }
};
// In this example 0(n) = 10
main(10);
```

**O(n2) – Quadratic**

### Sorting Algorithms

**Bubble Sort**

> Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

_Example_

```javascript
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
```

_Results_

```javascript
const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const randomArray = [9, 10, 1, 5, 7, 2, 4, 6, 8, 3];

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
```
![](bubble.gif)

- Insertion Sort
- Merge Sort
- Quick Sort
