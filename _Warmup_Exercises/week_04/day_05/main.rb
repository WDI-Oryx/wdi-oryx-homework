$nucleotide = {
  A: 0,
  C: 0,
  G: 0,
  T: 0,
}

# Solution 1
def count_nucleotides(word)
  word = word.upcase.split("")
  $nucleotide.each do |key, value|
    $nucleotide[key] = word.count(key.to_s)
  end
end

count_nucleotides("AACCGTTT")
p $nucleotide

# Solution 2
def count_nucleotides(word)
  word = word.upcase.split("")
  word.each do |letter|
    $nucleotide.each do |key, value|
      if key.to_s == letter
        $nucleotide[key] += 1
      end
    end
  end
end

count_nucleotides("AACCGTTT")
p $nucleotide
