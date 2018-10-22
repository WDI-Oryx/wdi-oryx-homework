require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(q) Quit"
  puts "(m) multiply"
  puts "(d) divide" 
  puts "(e) exponents"
  puts "(sq) square roots"
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


def sub
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


  def divide
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
  
    puts "What is your second number?"
    second_num = gets.chomp.to_f
  
    result = first_num / second_num
    puts "#{first_num} / #{second_num} = #{result}"
  end


  def exponents
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
  
    puts "What is your second number?"
    second_num = gets.chomp.to_f
  
    result = first_num ** second_num
    puts "#{first_num}  ** #{second_num} = #{result}"
  end


  def square_roots
    puts ""
    puts "What is your  number?"
    first_num = gets.chomp.to_f
    result = Math.sqrt (first_num)
    puts "#{first_num}   = #{result}"
  end






until user_choice == "q"

  case user_choice
  when "a" then add()
  when "s" then sub()
  when "m"then multiply()
  when "d"then divide()
  when "e"then exponents
  when "sq" then square_roots
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"