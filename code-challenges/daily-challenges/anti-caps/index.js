function isCaps(letter) {
    return letter === letter.toUpperCase();
  }
  
  function antiCaps(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (isCaps(str[i])) {
        result += str[i].toLowerCase(); // Uppercase to lowercase
        
      } else {
        result += str[i].toUpperCase(); // Lowercase to uppercase
        result += ''; 
      }
    }
    return result;
  }
  
  // Test cases
  console.log(antiCaps('Hello'));    // hELLO
  console.log(antiCaps('racEcar'));  // RACeCAR
  console.log(antiCaps('bAnAnA'));   // BaNaNa
  

module.exports = { antiCaps }
