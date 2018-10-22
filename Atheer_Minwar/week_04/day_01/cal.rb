require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(d) Divide"
  puts "(s) Subtraction"
  puts "(m) Multiply"
  puts "(x) Exponent"
  puts "(r) Square"
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp # Implicit Return
end

def add
  puts ""
  puts "Enter first number:"
  first_num = gets.chomp.to_f

  puts "Enter second number:"
  second_num = gets.chomp.to_f

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

user_choice = menu()



def multiply 
    puts ""
    puts "Enter first number"
      first_num = gets.chomp.to_f

      puts "Enter second number"
      second_num = gets.chomp.to_f
  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

user_choice = menu()



def substract 
    puts ""
    puts "Enter first number"
      first_num = gets.chomp.to_f

      puts "Enter second number"
      second_num = gets.chomp.to_f
     result = first_num - second_num
     puts "#{first_num} - #{second_num} = #{result}"
    
end

user_choice = menu()


def divide 
    puts ""
    puts "Enter first number"
      first_num = gets.chomp.to_f

     puts "Enter second number"
      second_num = gets.chomp.to_f
     result = first_num / second_num
     puts "#{first_num} / #{second_num} = #{result}"
    
end

user_choice = menu()



def exponent 
    puts ""
    puts "Enter first number"
      first_num = gets.chomp.to_f

     puts "Enter second number"
      second_num = gets.chomp.to_f
     result = first_num ** second_num
     puts "#{first_num} ** #{second_num} = #{result}"
    
end

user_choice = menu()



def square 
    puts ""
    puts "Enter number"
      num = gets.chomp.to_f
     result = Math.sqrt(num)
     puts "The Square roof of #{num} = #{result}"
    
end

user_choice = menu()

until user_choice == "q"

  case user_choice
  when "a" then add()
  when "d" then divide()
  when "s" then substract()
  when "m" then multiply()
  when "x" then exponent()
  when "r" then square()

  end

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"