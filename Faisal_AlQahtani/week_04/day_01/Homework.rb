#  Homework Week 4 Day 1
require "pry"

puts "Welcome to the calculator"

def menu
    puts ""
    puts "(a) Addition"
    puts "(s) Subtraction"
    puts "(m) Multiplication"
    puts "(d) Division"
    puts "(e) Exponents"
    puts "(sq) Square-root"
    puts "(q) Quit"
    puts ""
    puts "What operation would you like to preform?"
    gets.chomp #Implicit return
end

# Addition
def add
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
    puts "What is your second number?"
    second_num = gets.chomp.to_f
    result = first_num + second_num
    puts "#{first_num} + #{second_num} = #{result}"
end

# Subtraction
def sub
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
    puts "What is your second number?"
    second_num = gets.chomp.to_f
    result = first_num - second_num
    puts "#{first_num} - #{second_num} = #{result}"
end

# Multiplication
def multi
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
    puts "What is your second number?"
    second_num = gets.chomp.to_f
    result = first_num * second_num
    puts "#{first_num} x #{second_num} = #{result}"
end

# Division
def divide
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
    puts "What is your second number?"
    second_num = gets.chomp.to_f
    result = first_num / second_num
    puts "#{first_num} / #{second_num} = #{result}"
end

# Exponents
def expo
    puts ""
    puts "What is your number?"
    first_num = gets.chomp.to_f
    puts "To the power of?"
    second_num = gets.chomp.to_f
    result = first_num ** second_num
    puts "#{first_num} ^ #{second_num} = #{result}"
end

# Square-root
def sqroot
    puts ""
    puts "What is your number?"
    first_num = gets.chomp.to_f
    result = Math.sqrt(first_num)
    puts "The Square root of #{first_num} is #{result}"
end


user_choice = menu()

until user_choice == "q"
    case user_choice
    when "a" then add()
    when "s" then sub()
    when "m" then multi()
    when "d" then divide()
    when "e" then expo()
    when "sq" then sqroot()
    end


    user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"