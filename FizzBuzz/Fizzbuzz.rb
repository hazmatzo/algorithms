fizzbuzz = 1
while (fizzbuzz <= 100) 
    fizz = (fizzbuzz % 3) == 0
    buzz = (fizzbuzz % 5) == 0
    if fizz && buzz
        print "FizzBuzz"
    elsif fizz
        print "Fizz"
    elsif buzz
        print "Buzz"
    else
        print fizzbuzz
    end
    print "\n"
  fizzbuzz = fizzbuzz + 1
end