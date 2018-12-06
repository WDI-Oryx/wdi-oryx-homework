def seq1(num)
  num.even? ? 0 : 1
end

def seq2(num)
  (num * (num + 1)) / 2
end

puts seq1 4 # => 0
puts seq2 4 # => 10
