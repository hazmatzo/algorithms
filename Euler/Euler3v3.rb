# Largest Prime Factor
# http://projecteuler.net/problem=3
# Zoe M-W, 9/9/2013
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?
# Solution = 

$test_number = 600851475143
$square_root = Math.sqrt($test_number)

$factors = []
$primes = []

def find_factors
  (2..($square_root)).each do |x|
	  if $test_number % x == 0
		  $factors.push(x)
    end
	end
end

# Create another method that creates an array of primes.

def test_prime(test_integer)
  (2..(test_integer-1)).each do |x|
  	if test_integer % x == 0
  		return false
  	end
  end
  # Return is magical. 
  # Previous statement will exit the method if the condition is true.
  return true 
end

def find_other_factors
    $factors.each do |factor|
      other_factor = $test_number / factor
      if test_prime(other_factor)
      	return (other_factor)
      end
    end
    return nil
end

def backup
	$factors.reverse_each do |factor|
		if test_prime(factor)
			return(factor)
		end
	end
	return nil
end

find_factors
final_variable = find_other_factors 
if final_variable
	print final_variable
else
	backup_variable = backup
	if backup_variable
		print backup_variable
	else print $test_number
  end
end
print $square_root
	

  



# primes = [2,3]
# test_Integer = 5;
# while (primes.length < ( $test_number / 2 ) )
#     # test for primeness by dividing the testInteger by all previous primes
#     i = 0
#     while (i < primes.length) 
#     	remainder = testInteger % primes[i]
#         if (remainder === 0) 
#             primes += 
#         if remainder !== 0 
#         primes.push(testInteger)