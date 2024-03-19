function findDuplicates(nums) {
    const numCounts = {};
    
    // Map each number to an object containing the number and its count
    nums.map(num => {
        numCounts[num] = (numCounts[num] || 0) + 1;
    });
    
    // Filter out objects with count greater than 1 and extract the numbers
    const duplicates = Object.keys(numCounts)
                            .filter(num => numCounts[num] > 1)
                            .map(Number);
    
    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 2, 7, 8, 8, 3])); // Expected output: [2, 3, 8]
console.log(findDuplicates([1, 2, 3, 4, 5])); // Expected output: []
console.log(findDuplicates([1, 1, 2, 2, 3, 3])); // Expected output: [1, 2, 3]
