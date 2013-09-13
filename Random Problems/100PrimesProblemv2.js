// Find all the first 100 primes. Did this assignment as a recommended 
// assignment for a Coursera course. 

// array
var primes = [2,3];
var testInteger = 5;
// test for primality by dividing the testInteger by all previous primes
while (primes.length < 100) {
    // (initializing the variable; up until i = primes.length; increment i)
    for (var i = 0; i < primes.length; i++) {
        var remainder = testInteger % primes[i];
        if (remainder === 0) {
            break;
        }
    }
    // This pushes the testInteger that passes primality test to primes array.
    if (remainder !== 0) {
        primes.push(testInteger);
    }
    // Increments it by two and stores it back in the variable. This allows us
    // to skip all even numbers.
    testInteger += 2;
}
console.log(primes)