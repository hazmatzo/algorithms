(1..100).each do |fizzbuzz|
    fizz = (fizzbuzz % 3) == 0
    buzz = (fizzbuzz % 5) == 0
    if fizz && buzz
        print "Fizzbuzz\n"
    elsif fizz
        print "Fizz\n"
    elsif buzz
        print "Buzz\n"
    else 
        print (fizzbuzz), "\n"
    end
end