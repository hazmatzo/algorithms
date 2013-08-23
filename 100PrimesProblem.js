var primes = [2,3]; // array
var testInteger = 5;
while (primes.length < 100) {
    // test for primeness
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