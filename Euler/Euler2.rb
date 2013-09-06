# Even Fibonacci Numbers
# http://projecteuler.net/problem=2
# Zoe M-W, 2013/09/05
# By considering the terms in the Fibonacci sequence whose values do not exceed
# four million, find the sum of the even-valued terms.
# Solution = 4613732

# The first two Fibonacci numbers.
fib1 = 1
fib2 = 2
sum = 0

while fib1 <= 4000000
  # Finding the sum of the even Fibonacci numbers.
  if fib1 % 2 == 0
    sum += fib1
  end
  # The next Fibonacci number is the sum of the previous two.
  fib3 = fib1 + fib2
  fib1 = fib2
  fib2 = fib3
end

print "#{sum}\n"