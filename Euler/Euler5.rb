# Smallest Multiple
# Project Euler Problem 5
# http://projecteuler.net/problem=5
# Zoe M-W, Kempy, 10/10/2013
# 2520 is the smallest number that can be divided by each of the numbers from 
# 1 to 10 without any remainder.
# What is the smallest positive number that is evenly divisible by all of the 
# numbers from 1 to 20?
# Solution = 232792560

upper_bound_number = 20

def is_divisible(number, prime)
  number % prime == 0
end

def generate_primes(up_to)
  primary_numbers_array = [2]
  (3..up_to).each do |num|
    num_is_prime = true
    primary_numbers_array.each do |p|
      if is_divisible(num, p)
        num_is_prime = false
        break
      end
    end
    if num_is_prime
      primary_numbers_array << num
    end
  end
  primary_numbers_array
end

def find_largest_power(prime, up_to)
  largest_power = prime
  while (largest_power * prime) <= up_to
    largest_power *= prime
  end
  largest_power # Kempy thinks there should be a return here because 
                # Ruby is wrong.
end

def find_final_factors(primary_numbers_array, up_to)
  final_factors = []
  primary_numbers_array.each do |prime|
    final_factors << find_largest_power(prime, up_to)
  end
  final_factors
end

def times_them_all(factors_array)
  solution = 1
  factors_array.each do |factor|
    solution *= factor
  end
  solution
end

def find_solution(up_to)
  primes = generate_primes(up_to)
  factors = find_final_factors(primes, up_to)
  times_them_all(factors)
end

print "#{find_solution(upper_bound_number)}\n"
