arr = [3]

def collatz(num_array)
  while num_array.last > 1
    if num_array.last.even?
      num_array.push(num_array.last / 2)
    else
      num_array.push(num_array.last * 3 + 1)
    end
  end

  puts "The total steps were: #{num_array}"
  puts "I did #{num_array.length} steps"
end

collatz arr

arr.push(arr.last.even? ? arr.last / 2 : arr.last * 3 + 1) until arr.last == 1
puts "I did #{arr.length} steps\nHere's what I've come up with: #{arr}"
