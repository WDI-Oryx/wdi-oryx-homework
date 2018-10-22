require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(m) Multiply"
  puts "(d) Divide"
  puts "(e) Exponent"
  puts "(sq) Square Root"
  puts "(BMI) Body Mass Index"
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp # Implicit Return
end

#Add method
def add
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

#Subtract method
def subtract
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

#Multiply method
def multiply
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

#Divide method
def divide
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

#Exponent method
def exponent
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your exponent number?"
  second_num = gets.chomp.to_f

  result = first_num ** second_num
  puts "#{first_num} ** #{second_num} = #{result}"
end

#SquareRoot method
def square_root
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  result = Math.sqrt(first_num)
  puts "The Square root of #{first_num} is #{result}"
end

#BMI method
def bodyMassIdex
  puts ""
  puts "What is your weight in kilograms?"
  first_num = gets.chomp.to_f

  puts "What is your height in meters?"
  second_num = gets.chomp.to_f

  result = (first_num / (second_num**2)).round(2)
  puts "Your body mass index is #{result}"
end
user_choice = menu()


until user_choice == "q"

  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then divide()
  when "e" then exponent()
  when "sq" then square_root()
  when "BMI" then bodyMassIdex()
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"