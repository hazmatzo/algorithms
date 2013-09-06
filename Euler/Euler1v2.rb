# Multiples of 3 and 5
# http://projecteuler.net/problem=1
# Zoe M-W, 2013/09/05
# Find the sum of all the multiples of 3 or 5 below 1000.
# Solution = 233168

# Number we're going up until.
uptil = 1000

# This is the complicated math way to figure out the sum of all the numbers
# divisible by 3 and less than 1000.
# This will not work if uptil is divisible by 3. 
n = uptil - (uptil % 3)
sum = 3 * ((n/3 * ((n/3) + 1)) / 2)

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