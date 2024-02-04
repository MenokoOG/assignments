function combined(arr) {
    // Initialize variables to keep track of the maximum combined length and the result array.
    let maxCombinedLength = 0;
    let result = [];

    // Loop through the array elements up to the third-to-last element.
    for (let i = 0; i < arr.length - 2; i++) {
        // Calculate the combined length of three consecutive elements in the array.
        let combinedLength = arr[i].length + arr[i + 1].length + arr[i + 2].length;

        // Check if the calculated combined length is greater than the current maximum combined length.
        if (combinedLength > maxCombinedLength) {
            // If true, update the maximum combined length and the result array.
            maxCombinedLength = combinedLength;
            result = [arr[i], arr[i + 1], arr[i + 2]];
        }
    }

    // Return the result array containing the elements with the maximum combined length.
    return result;
}


const resultArray = combined(["this", "is", "an", "array"]);


console.log(resultArray);

module.exports = { combined }