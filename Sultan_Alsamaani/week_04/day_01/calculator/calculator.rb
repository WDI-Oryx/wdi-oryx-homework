require "pry" #include some debugging tools

def myMath(operation_type)
 puts ""
    puts "what is you first number"
    first_num = gets.chomp.to_f
    puts "what is you second number"
    second_num = gets.chomp.to_f

    case  operation_type
    when "a"
    puts "#{first_num} + #{second_num} = #{first_num+second_num}"
     when "s"
    puts "#{first_num} - #{second_num} = #{first_num-second_num}"
     when "m"
    puts "#{first_num} * #{second_num} = #{first_num*second_num}"
     when "d"
    puts "#{first_num} / #{second_num} = #{first_num/second_num}"
      when "e"
    puts "#{first_num} ** #{second_num} = #{first_num**second_num}"
      when "sq"
    puts " sqrt of #{first_num} is #{Math.sqrt(first_num)} sqrt of #{second_num} is #{Math.sqrt(second_num)}"
     end

end
# def add
#     puts ""
#     puts "what is you first number"
#     first_num = gets.chomp.to_f
#     puts "what is you second number"
#     second_num = gets.chomp.to_f

#     puts "#{first_num} + #{second_num} = #{first_num+second_num}"
# end

# Subtraction


puts "welcome to the calculator!"

def menu
puts ""
puts "(a) Addition"
puts "(s) Subtraction"
puts "(m) multiplication"
puts "(d) division"
puts "(e) exponent"
puts "(sq) sqrt"
puts "(q) Quit"
puts ""
puts "What operation would you like to perform?"
gets.chomp
end

user_choice = menu()

while user_choice != "q"
    # case user_choice 
    myMath(user_choice)
    
    user_choice = menu()
end


puts ""
puts "thanks for using calculator"


