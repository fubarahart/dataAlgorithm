def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        # Check if target is present at mid
        if arr[mid] == target:
            return mid
        # If target is greater, ignore left half
        elif arr[mid] < target:
            left = mid + 1
        # If target is smaller, ignore right half
        else:
            right = mid - 1
            
    return -1  # Element is not present

# Test the algorithm
numbers = [2, 3, 4, 10, 40]
target_value = 10

result = binary_search(numbers, target_value)
print(f"Element found at index: {result}")
