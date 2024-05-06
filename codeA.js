function maxDifference(nums) {
    nums.sort((a, b) => a - b);
   let myCalc = nums[nums.length - 1] - nums[0];
   return myCalc;
}
console.log(maxDifference([1, 7, 5, 9, 2, 12])); // Expected output: 11 (12 - 1 = 11)
console.log(maxDifference([10, 20, 30, 40])); // Expected output: 30 (40 - 10 = 30)
console.log(maxDifference([1, 2, 3, 4, 5])); // Expected output: 4 (5 - 1 = 4)
