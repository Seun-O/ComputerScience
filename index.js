// Check if an Array is Unique. Big O(n^2)
const isUnique = arr => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }
  return result;
};

console.log(isUnique([1, 1, 2, 2, 3]));
console.log(isUnique([1, 2, 3]));

// Optimized isUnique Big O(n)
const isUniqueO = arr => {
  const cache = {};
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) {
      result = false;
    } else {
      cache[arr[i]] = true;
    }
  }
  return result;
};

console.log(isUniqueO([1, 1, 2, 2, 3]));
console.log(isUniqueO([1, 2, 3]));

const uniqSort = arr => {
  const cache = {};
  let newArray = [];
  const sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (!cache[arr[i]]) {
      newArray.push(arr[i]);
      cache[arr[i]] = true;
    }
  }
  return newArray;
};

console.log(uniqSort([1, 5, 2, 1]));
console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]));

// Memoization with Closure

const times10 = n => n * 10;
memo = cb => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) return cache[n];
    else {
      let answer = cb(n);
      cache[n] = answer;
      console.log(`calculating: factorial(${n})`);
      return answer;
    }
  };
};

// Recursion and Loops with factorials
const factorial = n => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
const mFactorial = memo(factorial);
console.log(mFactorial(5));
console.log(mFactorial(5));

const joinElements = (array, joinStr) => {
  function recurse(index, result) {
    result += array[index];

    if (index === array.length - 1) {
      return result;
    } else {
      return recurse(index + 1, result + joinStr);
    }
  }
  return recurse(0, "");
};
console.log(joinElements(["s", "cr", "t cod", " :):)"], "e"));

function joinElementIteratively(array, joinStr) {
  let result = "";
  for (let i = 0; i < array.length - 1; i++) {
    result += array[i] + joinStr;
  }
  return result + array[array.length - 1];
}
console.log(joinElementIteratively(["s", "cr", "t cod", " :):)"], "e"));
