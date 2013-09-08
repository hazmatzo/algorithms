// Find all the primes under 100. Did this assignment as a recommended 
// assignment for a Coursera course. 

var primes = [2,3]; // array
var testInteger = 5;
while (primes.length < 100) {
    // test for primeness by dividing the testInteger by all previous primes
    var i = 0; 
    while (i < primes.length) {
        var remainder = testInteger % primes[i];
        if (remainder === 0) {
            break;
        }
        i ++ 
    }
    if (remainder !== 0) {
        primes.push(testInteger);
    }
    testInteger ++; testInteger ++;
}
console.log(primes)