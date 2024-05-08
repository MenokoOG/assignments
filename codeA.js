function sumOfMultiples(num, limit) {
    let sum = 0;
    let i = num;
    while (i <= limit) {
        sum += i;
        i += num;
    }
    return sum;
}

console.log(sumOfMultiples(3, 10)); // Expected output: 18 (3 + 6 + 9)
console.log(sumOfMultiples(5, 20)); // Expected output: 50 (5 + 10 + 15 + 20)
console.log(sumOfMultiples(7, 15)); // Expected output: 21 (7 + 14)
