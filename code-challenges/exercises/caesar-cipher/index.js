const readline = require('readline-sync');

function caeserCipher(input, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let index = alphabet.indexOf(char.toLowerCase());

        if (index === -1) {
            // Character is not in the alphabet, leave it unchanged
            result += char;
        } else {
            let newIndex = (index + shift) % alphabet.length;
            if (newIndex < 0) newIndex += alphabet.length; // Handle negative shifts
            if (char === char.toUpperCase()) {
                result += alphabet[newIndex].toUpperCase();
            } else {
                result += alphabet[newIndex];
            }
        }
    }

    return result.toLowerCase();
}


// Request input and shift amount from the user
function main() {
    const input = readline.question('Enter the text to encrypt: ');
    const shift = parseInt(readline.question('Enter the shift amount (a positive or negative integer): '));

    const encryptedText = caeserCipher(input, shift);
    console.log('Encrypted text:', encryptedText);
}
console.log(caeserCipher("V School is Awesome!", 11))
console.log(caeserCipher("Hello", 2))
console.log(caeserCipher("xyz! @abc", 5))
// Run the main function
// main();

module.exports = { caeserCipher };
