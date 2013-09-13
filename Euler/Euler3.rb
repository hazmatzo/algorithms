# Largest Prime Factor
# http://projecteuler.net/problem=3
# Zoe M-W, 9/9/2013
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?
# Solution = 

test_number = 600851475143

primes = [2,3]
test_Integer = 5;
while (primes.length < ( test_number / 2 ) )
    # test for primeness by dividing the testInteger by all previous primes
    i = 0
    while (i < primes.length) 
    	remainder = testInteger % primes[i]
        if (remainder === 0) 
            primes += 
        if remainder !== 0 
        primes.push(testInteger)

