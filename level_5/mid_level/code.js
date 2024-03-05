
//Challenge: Write a program that generates a multiplication table for a given number.

//The table should display the multiplication of the given number with numbers from 1 to 10.

function generateMultiplicationTable(number) {
    for( let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} * ${i} = ${result}`)
    }
  
}

// Test the function with different numbers
generateMultiplicationTable(5);
// Expected Outcome: 
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50 
*/
generateMultiplicationTable(7);
generateMultiplicationTable(3);