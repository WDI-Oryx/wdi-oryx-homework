require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"
def menu
    puts ""
    puts "(a) Addition"
    puts "(s) Subtraction"
    puts "(m) Multiply"
    puts "(d) Division"
    puts "(e) Exponent"
    puts "(sq) square roots"
    puts "(q) Quit"
    puts "What opration woud you like to perform?"
    opration = gets.chomp # IMplicit return
end

def add()
    puts ">>Enter the first number"
    x = gets.chomp.to_f
    puts ">>Enter the second number"
    y = gets.chomp.to_f
    result = x + y
    puts ">> The result of addition is = #{result}"
end

def sub()
    puts ">>Enter the first number"
    x = gets.chomp.to_f
    puts ">>Enter the second number"
    y = gets.chomp.to_f
    result = x - y
    puts ">> The result of subtraction is = #{result}"
end

def mult()
    puts ">>Enter the first number"
    x = gets.chomp.to_f
    puts ">>Enter the second number"
    y = gets.chomp.to_f
    result = x * y
    puts ">>The result of Multiply is #{result}" 
end

def div()
    puts ">>Enter the first number"
    x = gets.chomp.to_f
    puts ">>Enter the second number"
    y = gets.chomp.to_f
    result = x / y
    puts ">>The result of Division is #{result}" 
end


def exponent()
    puts ">>Enter the number"
    x = gets.chomp.to_f
    puts ">>Enter the exponent number"
    y = gets.chomp.to_f
    result = x ** y
    puts ">>The result of exponent is #{result}"
end



def sq()
    puts ">>Enter the number"
    x = gets.chomp.to_f
    result = Math.sqrt(x);
    puts ">>The result of squre roots is #{result}"
end


user_choice = menu()
until  user_choice == "q" || user_choice == "Q"
    if user_choice == "a" || user_choice == "A"
         add()
    elsif user_choice == "s" || user_choice == "S"
         sub()
    elsif user_choice == "m" || user_choice == "M"
        mult()
    elsif user_choice == "d" || user_choice == "D"
        div()
    elsif user_choice == "e" || user_choice == "E"
        exponent()
    elsif user_choice == "sq" || user_choice == "SQ"
        sq()
    end
    user_choice = menu()
end


puts ""
puts "Thanks for using the calculator"

