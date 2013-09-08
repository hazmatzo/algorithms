// Print all numbers under 100, if the number is divisible by 3, print "Fizz,"
// if the number is divisible by 5, print "Buzz," if it's divisible by both,
// print "FizzBuzz". Second attempt in Javascript.
// Zoe Madden-Wood

var Fizz(testInteger) { 
  var remainder = testInteger / 3;
    if (remainder === 0);
        return true;
}

var Buzz(testInteger) {
  var remainder = testInteger / 5;
    if (remainder === 0);
    	return true;
}

fizzbuzz = 1;

  while (fizzbuzz <= 100) {
    if Fizz(fizzbuzz); 
    	console.log "Fizz";
    if Buzz(fizzbuzz);
    	console.log "Buzz";
    else 
  	  console.log fizzbuzz;
    fizzbuzz = fizzbuzz + 1;
  }