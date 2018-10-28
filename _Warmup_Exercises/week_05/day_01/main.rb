# Count the hamming distance
# return back the distance
# returns nil if inputs are not equal in length
def count_hamming_distance(input1, input2)
  if input1.length != input2.length
    return nil
  end
  distance = 0

  # index
  i = 0
  while i < input1.length
    if input1[i] != input2[i]
      distance += 1
    end
    i += 1
  end

  distance
end

input1 = "GAGCCTACTAACGGGAT"
input2 = "CATCGTAATGACGGCCT"
hamming_distance = count_hamming_distance(input1, input2)

if hamming_distance
  puts "The Hamming distance between these two DNA strands is #{hamming_distance}."
else
  puts "An error occured"
end
