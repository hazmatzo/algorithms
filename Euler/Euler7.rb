my_array = [2, 3]
numbers_tried = [3]

while my_array.length < 10001
  potential_number = numbers_tried.last + 2

  prime = true

  my_array.each do |n|
    if potential_number % n == 0
      prime = false
      break
    end
  end

  if prime
    # print "#{potential_number}\n"
    my_array.push(potential_number)
  end

  numbers_tried.push(potential_number)
end

print my_array.last
