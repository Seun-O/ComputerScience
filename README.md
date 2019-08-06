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

- Bubble Sort
- Insertion Sort
- Merge Sort
- Quick Sort
