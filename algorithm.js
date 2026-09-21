function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if target is present at mid
        if (arr[mid] === target) {
            return mid;
        }
        // If target is greater, ignore left half
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }
    
    return -1; // Element is not present
}

// Test the algorithm
const numbers = [2, 3, 4, 10, 40];
const targetValue = 10;

const result = binarySearch(numbers, targetValue);
console.log(`Element found at index: ${result}`);