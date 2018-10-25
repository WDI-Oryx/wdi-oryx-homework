require "pry" #Include some debugging tools \

    # Phase 1

puts "Welcome to the Calculator!"
def menu
    puts ""
puts "(a) Addition"
puts "(s) Subtraction"
puts "(m) Multiply"
puts "(d) Division"
puts "(e) Exponents"
puts "(sr)Square Root"
puts "(BMI) Your body mass"
puts "(q) Quit"

 puts "What operation would you like to perform"

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

def multiply
      puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
     puts "What is your second number?"
    second_num = gets.chomp.to_f
     result = first_num * second_num
puts "#{first_num} * #{second_num} = #{result}"
end 



# Division 
def divison
      puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
     puts "What is your second number?"
    second_num = gets.chomp.to_f
     result = first_num / second_num
puts "#{first_num} / #{second_num} = #{result}"
end 


    # Phase 2

# exponents

def exponents
    puts ""
      puts "What is the base?"
    first_num = gets.chomp.to_f
     puts "What is the exponent?"
    second_num = gets.chomp.to_f
     result = first_num ** second_num
puts "#{first_num} ** #{second_num} = #{result}"
end

# Square root
def squareRoot
    puts ""
      puts "What is your number?"
    first_num = gets.chomp.to_i
 puts "Square root of #{first_num} is "
 puts Integer.sqrt(first_num)
     
end

    # Bonus

    #BMI = Weight / height**2 

    def BMI 
        puts ""
    puts "What is your weight (in kg)?"
    weight = gets.chomp.to_f
     puts "What is your height (in meters)?"
    height  = gets.chomp.to_f
     result = weight / height**2
puts "#{weight} / #{height**2} = #{result}"
end 


user_choice = menu()

until user_choice == "q"

    case user_choice 
        when "a" then add()
        when "s" then sub()
        when "m" then  multiply()
        when "d" then divison()
        when "e" then exponents()
        when "sr" then  squareRoot()
        when "BMI" then BMI()
     end       
    user_choice = menu()
        end
    puts ""
    puts "Thank you for using the Calculator "

