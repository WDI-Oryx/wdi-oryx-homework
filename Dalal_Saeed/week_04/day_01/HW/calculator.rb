require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(m) Multiply"
  puts "(d) Division"
  puts "(e) Exponent"
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp # Implicit Return
end

def add
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end
def subtract
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
  puts "#{first_num} * #{second_num} = #{result}"
end

def divide
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
  puts "#{first_num} to the power #{second_num} = #{result}"
end
user_choice = menu()

until user_choice == "q"

  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
     when "d" then divide()
        when "e" then exponent()
  end 
  user_choice = menu()
end


puts ""
puts "Thanks for using the calculator"