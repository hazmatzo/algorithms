sixesarray = [6]

def printsixes(i, array)
  i = i + 6
  array << i
end

while sixesarray[sixesarray.length-1] < 95 
    printsixes(sixesarray[sixesarray.length-1], sixesarray)
    sixesarray
end

print sixesarray 