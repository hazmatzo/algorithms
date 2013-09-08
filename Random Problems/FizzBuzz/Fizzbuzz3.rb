# Print all numbers under 100, if the number is divisible by 3, print "Fizz,"
# if the number is divisible by 5, print "Buzz," if it's divisible by both,
# print "FizzBuzz". Third attempt in Ruby.
# Zoe Madden-Wood

(1..100).each do |fizzbuzz|
    fizz = (fizzbuzz % 3) == 0
    buzz = (fizzbuzz % 5) == 0
    if fizz
        print "Fizz"
    end
    if buzz
        print "Buzz"
    end
    if !fizz && !buzz
        print fizzbuzz
    end
    print "\n"
end