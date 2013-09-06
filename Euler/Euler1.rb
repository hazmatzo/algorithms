# Multiples of 3 and 5
# http://projecteuler.net/problem=1
# Zoe M-W, 2013/09/05
# Find the sum of all the multiples of 3 or 5 below 1000.
# Solution = 233168

sum = 0
# Number we're going up until.
uptil = 1000

# Setting the variable to start at 3.
multiples = 3
while multiples < uptil
  sum += multiples
  multiples += 3
end

# Resetting the number to 5 for the next loop.
multiples = 5
while multiples < uptil
  # Check to see if the multiples is a duplicate.
  if multiples % 3 != 0
    sum += multiples
  end
  multiples += 5
end

# Print out the sum.
print "#{sum}\n"