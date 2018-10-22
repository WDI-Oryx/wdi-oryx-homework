#require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) subtraction"
  puts "(m) multiply"
  puts "(d) division"
  puts "(e) exponents"
  puts "(r) roots"
  puts "(sq) square"
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

def subtraction 
    puts ""
    puts "What is your first number?"
    num1 = gets.chomp.to_f
  
    puts "What is your second number?"
    num2 = gets.chomp.to_f
  
    result1 = num1 - num2
    puts "#{num1} - #{num2} = #{result1}"
   end
  def multiply
  
    puts ""
    puts "What is your first number?"
    num11 = gets.chomp.to_f
  
    puts "What is your second number?"
    num22 = gets.chomp.to_f
  
    result2 = num11 * num22
    puts "#{num11} * #{num22} = #{result2}"
end

def division 
    puts ""
    puts "What is your first number?"
    first_num1 = gets.chomp.to_f
  
    puts "What is your second number?"
    second_num1 = gets.chomp.to_f
  
    result3 = first_num1 / second_num1
    puts "#{first_num1} / #{second_num1} = #{result3}"
end

def exponents
    puts ""
    puts "What is your first number?"
    first_num2 = gets.chomp.to_f
  
    puts "What is your second number?"
    second_num2 = gets.chomp.to_f
  
    result4 = first_num2 ** second_num2
    puts "#{first_num2} ** #{second_num2} = #{result4}"  

end

def roots
    puts ""
    puts "What is your first number?"
    first_num3 = gets.chomp.to_f
  
   
  
    result5 = Integer.sqrt(first_num3)
    puts "#{first_num3}  = #{result5}"  
end
def square 
    puts ""
    puts "What is your first number?"
    first_num4 = gets.chomp.to_f
  
   
  
    result6 = first_num4 * first_num4
    puts "#{first_num4}  = #{result6}"  
end   

user_choice = menu()

until user_choice == "q"


  case user_choice

  when "a" then add()
    when "s" then subtraction()
    when "m" then multiply()
    when "d" then division()
     when "e"  then exponents()
when "r" then roots()
when "sq" then square()
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"



