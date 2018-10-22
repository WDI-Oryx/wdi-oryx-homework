require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(m) Multiply"
  puts "(d) Division"
  puts "(e) Exponent"
  puts "(sq) Square" 
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp # Implicit Return
end
# add method
def add
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f
  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end
# subtraction method
def sub
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end
# multiply method
def multiply
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end
# division method
def division
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end
# Exponent method
def exponent
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num ** second_num 
  puts "#{first_num} ** #{second_num} = #{result}"
end
# sqr method
def sqr
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f
  second_num = 2
  result = first_num ** second_num 
  puts "#{first_num} ** #{second_num} = #{result}"
end
user_choice = menu()

until user_choice == "q"

  case user_choice
  when "a" then add()
    when "s" then sub()
        when "m" then multiply()
            when "d" then division()
                 when "e" then exponent()
                    when "sq" then sqr()
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"

#BMI Calculator
def BMI
puts "Enter your weight in kg?"
  weight = gets.chomp.to_f
  puts "Enter your height in m?"
  height = gets.chomp.to_f
result = weight / (height*height)
case result
when 19..24 then result2 = "Normal"
when 25..29 then result2 = "Overweight"
when 30..35 then result2 = "Obese"
when 36..40 then result2 = "Super obese"
end
puts "Your BMI is #{result}, #{result2}"
end
BMI()