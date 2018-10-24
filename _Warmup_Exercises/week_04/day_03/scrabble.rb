# Solution 1
$values = {
  1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2 => ["D", "G"],
  3 => ["B", "C", "M", "P"],
  4 => ["F", "H", "V", "W", "Y"],
  5 => ["K"],
  8 => ["J", "X"],
  10 => ["Q", "Z"],
}

def count_word(word)
  sum = 0
  word.upcase.each_char do |letter|
    $values.each do |key, value|
      sum += key if $values[key].include?(letter)
    end
  end
  sum
end

puts "Please enter a word."
user_input = gets.chomp
puts count_word(user_input)

#####################

# Solution 2
$values = {
  "A" => 1,
  "E" => 1,
  "I" => 1,
  "O" => 1,
  "U" => 1,
  "L" => 1,
  "N" => 1,
  "R" => 1,
  "S" => 1,
  "T" => 1,
  "D" => 2,
  "G" => 2,
  "B" => 3,
  "C" => 3,
  "M" => 3,
  "P" => 3,
  "F" => 4,
  "H" => 4,
  "V" => 4,
  "W" => 4,
  "Y" => 4,
  "K" => 5,
  "J" => 8,
  "X" => 8,
  "Q" => 10,
  "Z" => 10,
}

def count_word(word)
  sum = 0
  word.upcase.each_char do |char|
    sum += $values[char]
  end
  sum
end

puts "Please enter a word."
user_input = gets.chomp
puts count_word(user_input)
