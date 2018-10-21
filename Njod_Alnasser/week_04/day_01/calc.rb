require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(m) Multiply"
  puts "(d) Division"
  puts "(e) exponent"
  puts "(sq) square root"
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp # Implicit Return
end


#add
def add
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f
  puts "What is your second number?"
  second_num = gets.chomp.to_f
  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

#Sub
def sub
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
    puts "What is your second number?"
    second_num = gets.chomp.to_f
    result = first_num - second_num
    puts "#{first_num} - #{second_num} = #{result}"
  end

#Multi
def multi
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
    puts "What is your second number?"
    second_num = gets.chomp.to_f
    result = first_num * second_num
    puts "#{first_num} * #{second_num} = #{result}"
  end

#Div
def div
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
    puts "What is your second number?"
    second_num = gets.chomp.to_f
    result = first_num / second_num
    puts "#{first_num} / #{second_num} = #{result}"
  end

  #exponent
  def exp
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
    puts "What is your second number?"
    second_num = gets.chomp.to_f
    result = first_num ** second_num
    puts "#{first_num} ** #{second_num} = #{result}"
  end

#square
  def rootsquare(first_num)
    i=0
    while i <= first_num
        if i** 2==first_num
    puts " the root square is #{i} "
    end
    i++
  end

user_choice = menu()

until user_choice == "q"

  case user_choice

  when "a" then add()
  end
when "s" then sub()
end
when "m" then multi()
end
when "d" then div()
end
when "e" then exp()
end
when "sq" then rootsquare()
end

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"