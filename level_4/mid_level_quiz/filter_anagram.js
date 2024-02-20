function filterAnagrams(arr, target) {
    // Helper function to sort characters in a word
    function sortWord(word) {
      return word.split('').sort().join('');
    }
    
    // Sort the target word
    const sortedTarget = sortWord(target);
    
    // Filter the array to find anagrams
    return arr.filter(word => sortWord(word) === sortedTarget);
  }
  
  const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
  const target = 'enlist';
  
  const anagrams = filterAnagrams(words, target);
  console.log(anagrams); // Output: ['listen', 'silent']
  