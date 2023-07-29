// Step 1: Sort the array of strings
function sortArray(arr) {
  return arr.sort();
}

// Step 2: Define the binary search function
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparisonResult = compareStrings(arr[mid], target);

    if (comparisonResult === 0) {
      // Target found at index mid
      return mid;
    } else if (comparisonResult < 0) {
      // Target might be in the right half of the array
      left = mid + 1;
    } else {
      // Target might be in the left half of the array
      right = mid - 1;
    }
  }

  // Target not found
  return -1;
}

// Step 3: Define the comparison function
function compareStrings(a, b) {
  // Use the localeCompare function to compare strings in a locale-sensitive way
  // This ensures correct ordering for strings with special characters or diacritics
  return a.localeCompare(b);
}

// Example usage:
const array = ["apple", "banana", "cherry", "orange", "strawberry"];
const target = "cherry";
const sortedArray = sortArray(array);
const index = binarySearch(sortedArray, target);

if (index !== -1) {
  console.log(`${target} found at index ${index}.`);
} else {
  console.log(`${target} not found in the array.`);
}
