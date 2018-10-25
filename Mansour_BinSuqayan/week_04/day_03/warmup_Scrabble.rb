

#letters =[["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],["D", "G"],["B", "C", "M", "P"],["F", "H", "V", "W", "Y"],["K"],["J", "X"],["Q", "Z"]]


$values = {
    1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2 => ["D", "G"],
    3 => ["B", "C", "M", "P"],
    4 => ["F", "H", "V", "W", "Y"],
    5 => ["K"],
    8 => ["J", "X"],
    10 => ["Q", "Z"],
}

#take a word and return the count

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