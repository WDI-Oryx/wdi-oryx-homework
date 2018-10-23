require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(m) Multiplicatio"
  puts "(d) Division"
  puts "(e) exponention"
  puts "(sr) Square Root"
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp # Implicit Return
end 

# def nums
#     puts "" 
#   puts "What is your first number?"
#   first_num = gets.chomp.to_f

#   puts "What is your second number?"
#   second_num = gets.chomp.to_f
# return [first_num, second_num]
# end 

def add
# nums()
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

def substract
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

def multiply
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num * second_num
  puts "#{first_num} x #{second_num} = #{result}"
end

def divided
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

def exponent
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num ** second_num
  puts "#{first_num} exp #{second_num} = #{result}"
end

def sqroot
  puts ""
  puts "What is your number?"
  first_num = gets.chomp.to_f

#   puts "What is your second number?"
#   second_num = gets.chomp.to_f

  result = Math.sqrt(first_num) 
  puts "sqrt(#{first_num}) = #{result}"
end

user_choice = menu()

until user_choice == "q"

  case user_choice
  when "a" then add()
  when "s" then substract()
  when "m" then multiply()
  when "d" then divided()
  when "e" then exponent()
when "sr" then sqroot()

  end   

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"