require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(m) Multiplication"
  puts "(d) Division"
  puts "(r) Square_root"
  puts "(e) Exponent"
  puts "(p) Power"
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp # Implicit Return
end

# addition 
def add
  puts ""
  print "What is your first number?"
  first_num = gets.chomp.to_f

  print "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

#subtraction
def subtract
  puts ""
  print "What is your first number?"
  first_num = gets.chomp.to_f

  print "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

#multiplication
def multiplication
  puts ""
  print "What is your first number?"
  first_num = gets.chomp.to_f

  print "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

#division
def division
  puts ""
  print "What is your first number?"
  first_num = gets.chomp.to_f

  print "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

#square root of a number
def square_root
  puts ""
  print "What is your number?"
  num = gets.chomp.to_f

  result = Math.sqrt(num)
  puts "sqrt #{num} = #{result}"
end

# exponent 
def exponent
  puts ""
  print "What is your number?"
  num = gets.chomp.to_f

  result = Math.exp(num)
  puts "e #{num} = #{result}"
end

#power of number 
def power
  puts ""
  print "What is your base number?"
  base_num = gets.chomp.to_i

  print "What is your exponent number?"
 exponent_num = gets.chomp.to_i

  result = base_num ** exponent_num;
  puts "#{base_num} ^ #{exponent_num} = #{result}"
end


user_choice = menu()

until user_choice == "q"

  case user_choice
  when "a" then add()
  end

  case user_choice
  when "s" then subtract()
  end

  case user_choice
  when "m" then multiplication()
  end

  case user_choice
  when "d" then division()
  end

  case user_choice
  when "r" then square_root()
  end

  case user_choice
  when "e" then exponent()
  end

  case user_choice
  when "p" then power()
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using my calculator"