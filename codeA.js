function countVowels(str) {
  // Match all vowels (a, e, i, o, u) using a regular expression and count the matches
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("hello")); // Expected output: 2 (e, o)
console.log(countVowels("programming")); // Expected output: 3 (o, a, i)
console.log(countVowels("javascript")); // Expected output: 3 (a, a, i)