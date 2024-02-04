function combined(arr) {
    let maxCombinedLength = 0;
    let result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        let combinedLength = arr[i].length + arr[i + 1].length + arr[i + 2].length;

        if (combinedLength > maxCombinedLength) {
            maxCombinedLength = combinedLength;
            result = [arr[i], arr[i + 1], arr[i + 2]];
        }
    }

    return result;
}

const resultArray = combined(["this", "is", "an", "array"]);
console.log(resultArray);
module.exports = { combined }