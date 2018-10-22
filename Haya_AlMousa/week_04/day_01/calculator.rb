require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(m) Multiplication"
  puts "(d) Division"
  puts "(q) Quit"
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

user_choice = menu()

def subtraction
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

user_choice = menu()

def multiply
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

user_choice = menu()


def divide
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

user_choice = menu()

until user_choice == "q"

  case user_choice
  when "a" then add()
  when "m" then multiply()
  when "s" then subtraction()
  when "d" then divide()
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"