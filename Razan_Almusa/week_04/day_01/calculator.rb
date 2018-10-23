
require "pry" 



puts " choose your operation !"


def menu 
puts " "
puts "(+) Addition"
puts "(-) subtraction"
puts "(*) multiplication"
puts "(/) division"
puts "(a^b) exponent"
puts "(√) square"
puts "(q) quit"
puts " "
putc " what operation would like to perform?"
 gets.chomp # imlicit return 
end 

user_choice =  menu()

def add 
    puts "  "
    puts " Enter  the first number?"
    first_num = gets.chomp.to_f

    puts " Enter the second number?"
    second_num = gets.chomp.to_f

    sum = first_num + second_num
     puts " "
    puts " #{first_num} + #{second_num} = (#{sum})"
end 

def subtract
    puts " "
 puts " Enter the first number?"
    first_num1 = gets.chomp.to_f

 puts " Enter the second number?"
    second_num1 = gets.chomp.to_f

    result = first_num1 - second_num1
     puts " "
    puts " #{first_num1} - #{second_num1} = (#{result})"
end 


def multiply
    puts " " 
     puts " Enter the first number?"
    first_num2 = gets.chomp.to_f

 puts " Enter the second number?"
    second_num2 = gets.chomp.to_f

    result2 = first_num2 * second_num2
     puts " "
    puts " #{first_num2} * #{second_num2} = (#{result2})"
end 


def divde 
    puts " "
   puts " Enter the first number?"
    first_num3 = gets.chomp.to_f

 puts " Enter the second number?"
    second_num3 = gets.chomp.to_f

    result3 = first_num3 / second_num3
     puts " "
    puts " #{first_num3} / #{second_num3} = (#{result3})"
end 

def Exponent 
    puts " "
   puts " Enter a base number: "
    first_num4 = gets.chomp.to_f

 puts " Enter an exponent: "
    second_num4 = gets.chomp.to_f

    result4 = first_num4 ** second_num4
     puts " "
    puts " #{first_num4} ^ #{second_num4} = (#{result4})"
end 

def square_roots
    puts " "
    puts " Enter your number "
    puts " "
    num = gets.chomp.to_f

    result5 = Math.sqrt(num)
    puts "the square root of #{num} is (#{result5})"
end


until user_choice == "q"
case user_choice
when "+" then add()
when "-" then subtract()
when "*" then multiply()
when "/" then divde()
when "a^b" then Exponent() 
when "√" then square_roots()


end


user_choice = menu()
end 

puts""
puts "Thanks for using My Calculator"




