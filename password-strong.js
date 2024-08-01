function analyzePasswordStrength(password) {
    // Regular expressions 
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    // Counting criteria met
    const criteriaCount = [
      lengthCriteria,
      uppercaseCriteria,
      lowercaseCriteria,
      numberCriteria,
      specialCharCriteria
    ].filter(Boolean).length;
  
    //  password strength
    let strength;
    if (criteriaCount <= 2) {
      strength = 'Weak';
    } else if (criteriaCount === 3) {
      strength = 'Medium';
    } else if (criteriaCount === 4) {
      strength = 'Strong';
    } else {
      strength = 'Very Strong';
    }
  
    //  result object
    return {
      strength: strength,
      length: lengthCriteria,
      hasUppercase: uppercaseCriteria,
      hasLowercase: lowercaseCriteria,
      hasNumber: numberCriteria,
      hasSpecialChar: specialCharCriteria
    };
  }
  
  // Example usage:
  const passwordAnalysis = analyzePasswordStrength('P@ssw0rd');
  console.log(passwordAnalysis);
  // Output: { strength: 'Very Strong', length: true, hasUppercase: true, hasLowercase: true, hasNumber: true, hasSpecialChar: true }
  