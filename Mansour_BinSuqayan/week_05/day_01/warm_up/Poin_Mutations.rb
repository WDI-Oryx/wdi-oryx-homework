# string1 = "GAGCCTACTAACGGGAT"
# string2 = "CATCGTAATGACGGCCT"
# $count = 0

# $i = 0 
# while $i < string1.length do
#    ## p string1[$i]
#     if string1[$i] != string2[$i]
#         $count +=1
#     end
#     $i = $i + 1
# end


# puts "The Hamming distance between these two DNA strands is #{$count}"

def count_hamming_distance(input1, input2)
    distance = 0
    i = 0
    while i < input1.length do
        if input1[i] != input2[i]
            distance += 1            
        end
        i += 1
    end
    distance
end

input1 = "ACT"
input2 = "ATC"

 hamming_distance = count_hamming_distance(input1,input2)

 puts "The Hamming distance between these two DNA strands is #{hamming_distance}"