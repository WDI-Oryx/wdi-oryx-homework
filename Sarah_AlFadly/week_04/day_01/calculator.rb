require "pry"

 puts "Welcome to calculator"


def add x=0, y=0
    puts "The result = #{x + y}"
end

def subtract x=0, y=0
    puts "The result = #{x - y}"
end

def multiply x=0, y=0
    puts "The result = #{x * y}"
end

def divide x=0, y=0
    puts "The result = #{x / y}"
end

def exponent x=0, y=0
    puts "The result = #{x ** y}"
end

def square_root x=0, y=0
    puts "The result = #{Math.sqrt(x)}"
end

user_choice = ""

while user_choice != "q"

puts "Which operation do you want ?"
puts "Addition (a)"
puts "Subtraction (s)"
puts "Multiplication (m)"
puts "Division (d)"
puts "Exponent (e)"
puts "Square Roots (r)"
puts "Quit (q)"
user_choice = gets.chomp.downcase

if user_choice == "r"
    puts "Enter the number"
    first_num = gets.chomp.to_f

# elsif user_choice != "q"
elsif user_choice == "a" || user_choice == "s" || user_choice == "m" || user_choice == "d" || user_choice == "e" || user_choice == "r"
    puts "Enter the first number"
    first_num = gets.chomp.to_f
    puts "Enter the second number"
    second_num = gets.chomp.to_f
end

case user_choice
when "a"
    add first_num, second_num
when "s"
    subtract first_num, second_num
when "m"
    multiply first_num, second_num
when "d"
    divide first_num, second_num
when "e"
    exponent first_num, second_num
when "r"
    square_root first_num, second_num
when "q"
    puts "Thanks for using the calculator"
else
    puts "you entered wrong character"
end
end

