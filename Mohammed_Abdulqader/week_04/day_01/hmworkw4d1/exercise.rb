require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(m) Multiplication"
  puts "(d) Devesion"
  puts "(p) power"
  puts "(sq) square roots"
  puts "(B) BMI"

  puts "(q) Quit"
  puts ""
  print "What operation would you like to perform?"
  gets.chomp 
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


def sub
puts ""
puts "What is your first number ?"
first_num = gets.chop.to_f

puts "what is your second number ?"
second_num = gets.chomp.to_f
result = first_num - second_num
puts "#{first_num} - #{second_num} = #{result} "
end


def mul
puts ""
puts "What is your first number ?"
first_num = gets.chop.to_f

puts "what is your second number ?"
second_num = gets.chomp.to_f
result =  first_num * second_num
puts "#{first_num} * #{second_num} = #{result} "
end


def dev
puts ""
puts "What is your first number ?"
first_num = gets.chop.to_f

puts "what is your second number ?"
second_num = gets.chomp.to_f
result = first_num / second_num
puts "#{first_num} / #{second_num} = #{result} "
end

def powerNumber
puts ""
puts "What is your first number ?"
first_num = gets.chop.to_f

puts "what is your second number ?"
second_num = gets.chomp.to_f
result = (first_num) ** (second_num)
puts "#{first_num} power #{second_num} = #{result} "
end

def  squareRoots
puts ""
puts "What is your first number ?"
first_num = gets.chop.to_f

puts "what is your second number ?"
second_num = gets.chomp.to_f
result = (first_num + second_num / first_num )/2
puts "#{first_num}  square roots #{second_num} = #{result} "
end


def BMI
puts ""
puts "What is your  height ?"
first_num = gets.chop.to_f

puts "what is your weight ?"
second_num = gets.chomp.to_f
result = (first_num / second_num ** 2)
puts " height #{first_num}  weihgt #{second_num} BMI = #{result} "
end




user_choice = menu()

until user_choice == "q"

  case user_choice
  when "a" then add()
  when "s" then sub()
    
  when "m" then mul()
    
  when "d" then dev()

  when "p" then powerNumber()


   when "sq" then squareRoots()
    
   when "B" then BMI()
  
end

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"
