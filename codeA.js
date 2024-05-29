function compressString(str) {
    const matches = str.match(/(.)\1*/g);
    let compressed = matches.map(group => group[0] + group.length).join('');

    return compressed.length < str.length ? compressed : str;
}

// Test cases
console.log(compressString("aabcccccaaa")); // Expected output: "a2b1c5a3"
console.log(compressString("abcdef")); // Expected output: "abcdef"


function compressString(str) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (i + 1 < str.length && str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
}

// Test cases
console.log(compressString("aabcccccaaa")); // Expected output: "a2b1c5a3"
console.log(compressString("abcdef")); // Expected output: "abcdef"