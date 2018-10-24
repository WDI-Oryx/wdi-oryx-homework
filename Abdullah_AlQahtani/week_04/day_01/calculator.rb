require "pry" # Include some debugging tools



puts " welcome to The Calculator"

def menu
    puts ""
    puts "(a) Addition"
    puts "(s) Subtraction"
    puts "(d) Divide"
    puts "(m) Multiply"
    puts "(e) Exponents"
    puts "(sr) Square Roots"
    puts ""
    puts " What operation wpuld you like to perform?"
    gets.chomp # Implicit Return
end

user_choice = menu()

def add
    puts ""
    puts "what is you first number"
    first_num = gets.chomp.to_f

    puts "what is you Second number"
    second_num = gets.chomp.to_f
    result = first_num + second_num
    p " The result is #{result}"
end

def sub 
    puts ""
    puts "what is you first number"
    first_num = gets.chomp.to_f

    puts "what is you Second number"
    second_num = gets.chomp.to_f
    result = first_num - second_num
    p " The result is #{result}"
end

def divide 
    puts ""
    puts "what is you first number"
    first_num = gets.chomp.to_f

    puts "what is you Second number"
    second_num = gets.chomp.to_f
    result = first_num / second_num
    p " The result is #{result}"
end

def multiplay 
    puts ""
    puts "what is you first number"
    first_num = gets.chomp.to_f

    puts "what is you Second number"
    second_num = gets.chomp.to_f
    result = first_num * second_num
    p " The result is #{result}"
end

def exponent
    puts ""
    puts "what is you first number"
    first_num = gets.chomp.to_f

    puts "what is you Second number"
    second_num = gets.chomp.to_f
    result = first_num ** second_num
    p " The result is #{result}"
end

def square_root 
    puts ""
    puts "what is your number"
    first_num = gets.chomp.to_f

    result = Math.sqrt(first_num)
    p " The result is #{result}"
end

until user_choice == "q"
    case user_choice
    when 'a' then add()
    end

    case user_choice
    when 's' then sub()
    end

    case user_choice
    when 'd' then divide()
    end

    case user_choice
    when 'm' then multiplay()
    end

    case user_choice
    when 'e' then exponent()
    end

    case user_choice
    when 'sr' then square_root()
    end
    user_choice = menu()
    p " Please check your Choice !!"
end


