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