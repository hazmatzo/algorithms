# Print all numbers under 100, if the number is divisible by 3, print "Fizz,"
# if the number is divisible by 5, print "Buzz," if it's divisible by both,
# print "FizzBuzz". First attempt in Ruby.
# Zoe Madden-Wood

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