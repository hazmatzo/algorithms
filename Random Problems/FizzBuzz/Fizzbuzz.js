// Print all numbers under 100, if the number is divisible by 3, print "Fizz,"
// if the number is divisible by 5, print "Buzz," if it's divisible by both,
// print "FizzBuzz". First attempt in Javascript.
// Zoe Madden-Wood

var Fizzbuzz = [1];

var Fizz(testInteger) { 
  var remainder = testInteger / 3;
    if (remainder === 0)
        return true
}

var Buzz(testInteger) {
  var remainder = testInteger / 5;
    if (remainder === 0)
    	return true
}

var testInteger {
  Array[Array.length-1] + 1
}

  while (Fizzbuzz[Fizzbuzz.length-1] <= 100) {
    (if Fizz && Buzz
    	Fizzbuzz << "Fizzbuzz")
    (else if Fizz 
  	    Fizzbuzz << "Fizz")
    else if Buzz
    	Fizzbuzz << "Buzz"
    else 
  	    Fizzbuzz << testInteger
  }

console.log(Fizzbuzz)