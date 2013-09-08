// Print all numbers under 100, if the number is divisible by 3, print "Fizz,"
// if the number is divisible by 5, print "Buzz," if it's divisible by both,
// print "FizzBuzz". 
// Zoe Madden-Wood

// Checks to see if number is divisible by 3.
function Fizz(testInteger) {
  var remainder = testInteger % 3;
    if (remainder === 0) {
        return true;
      }
    return false;
}

// Checks to see if number is divisible by 5.
function Buzz(testInteger) {
  var remainder = testInteger % 5;
    if (remainder === 0) {
      return true;
    }
    return false;
}

var fizzbuzz = 1;

  while (fizzbuzz < 100) {
    if ((Fizz(fizzbuzz)) && (Buzz(fizzbuzz))) {
      console.log("FizzBuzz");
    }
    else if (Fizz(fizzbuzz)) {
      console.log("Fizz");
    }
    else if (Buzz(fizzbuzz)) {
      console.log("Buzz");
    }
    else {
      console.log(fizzbuzz);
    }
    fizzbuzz = fizzbuzz + 1;
  }