require "pry"   #include some debugging tools
require 'rainbow'

puts ""
puts Rainbow("Welcom to the Calculator!").pink


def menu 
    puts "" 
    puts ""
    puts Rainbow("What operation would you like to perform ?? ").skyblue
    puts ""    # empty line
    puts Rainbow("(a) Addition").powderblue
    puts Rainbow("(m) Multiply").powderblue
    puts Rainbow("(s) Subtraction").powderblue
    puts Rainbow("(d) Division").powderblue
    puts Rainbow("(e) Exponents").powderblue
    puts Rainbow("(sr) Square root ").powderblue
    puts Rainbow("(bmi) Boody Mass Index").powderblue
    puts Rainbow("(q) Quit").pink
    puts ""
    print Rainbow("I want ").lightyellow
    gets.chomp  #implicit return 
end


# Addition
def add
    puts ""
  puts Rainbow("What is the first number?").teal
  first_num = gets.chomp.to_f

  puts Rainbow("What is the second number?").teal
  second_num = gets.chomp.to_f

  result = first_num + second_num
  puts Rainbow("#{first_num} + #{second_num} = #{result}").thistle
end 


# Subtraction
def subtract
    puts ""
  puts Rainbow("What is the first number?").teal
  first_num = gets.chomp.to_f

  puts Rainbow("What is the second number?").teal
  second_num = gets.chomp.to_f

  result = first_num - second_num
  puts Rainbow("#{first_num} - #{second_num} = #{result}").thistle
end 


# Multiply
def multiply
    puts ""
  puts Rainbow("What is the first number?").teal
  first_num = gets.chomp.to_f

  puts Rainbow("What is the second number?").teal
  second_num = gets.chomp.to_f

  result = first_num * second_num
  puts Rainbow("#{first_num} * #{second_num} = #{result}").thistle
end 


# Division
def division
    puts ""
  puts Rainbow("What is the first number?").teal
  first_num = gets.chomp.to_f

  puts Rainbow("What is the second number?").teal
  second_num = gets.chomp.to_f

  result = first_num / second_num
  puts Rainbow("#{first_num} / #{second_num} = #{result}").thistle
end 


# Exponent
def exponent
    puts ""
  puts Rainbow("What is your number?").teal
  first_num = gets.chomp.to_f

  puts Rainbow("What is the exponent number ?").teal
  second_num = gets.chomp.to_f

  result = first_num ** second_num
  puts Rainbow("#{first_num} ** #{second_num} = #{result}").thistle
end 


# Square root
def square_root
    puts ""
    puts Rainbow("What is the number ?").teal
    square_roots = gets.chomp.to_f

    result = Math.sqrt(square_roots)
    puts ""
    puts Rainbow("The result is  #{result}").thistle
    puts ""
end


# BMI
def bmi 
    puts Rainbow("What's your weight in kg ?").teal
    weight = gets.chomp.to_f

    puts Rainbow("Your height ?").teal
    height = gets.chomp.to_f
    height_in_m = height / 100
    squared_height = height_in_m ** 2
    
    result = weight / squared_height  
    puts Rainbow("Your BMI is #{result}").thistle
end


user_choice = menu()   

until user_choice == "q"  
    case user_choice 
    when "a" then add()
    when "d" then division()
    when "m" then multiply()
    when "s" then subtract()
    when "e" then exponent()
    when "sr" then square_root()
    when "bmi" then bmi()
    end 
    user_choice = menu()
end 

puts ""
puts Rainbow("Thanks for using the Calculator").cyan