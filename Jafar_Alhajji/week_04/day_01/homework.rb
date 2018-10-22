require "pry"

# binding.pry
# ----------menu-----------
puts "Wolcome to calculater :!!!"
def menu 
    puts ""
    puts "(a) Addition "
    puts "(s) Subtraction "
    puts "(m) multiplcation "
    puts "(d) division"
    puts "(e) exponents"
    puts "(sq) square roots"
    puts "(b) BMI"
    puts "(q) Quit "
    puts "Please enter your Choice:  "
    return user_input= gets.chomp
end 


# ----------add-----------
def add(first_num,second_num)
  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
  return
end

# ----------power-----------
def power(first_num,second_num)
  result = first_num ** second_num
  puts "#{first_num} ^ #{second_num} = #{result}"
  return
end

# ----------subtraction-----------
def subtraction(first_num,second_num)
  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
  return
end

# ----------division-----------
def division(first_num,second_num)
  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
  return
end


# ----------multiplcation-----------
def multiplcation(first_num,second_num)
  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
  return
end

# ----------enter the operation -----------
def operation(sign) 
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f
    case sign 
        when "+" then add(first_num,second_num)
        when "-" then subtraction(first_num,second_num)
        when "*" then multiplcation(first_num,second_num)
        when "/" then division(first_num,second_num)
        when "^" then power(first_num,second_num) 
    end 
end

# ----------square_roots-----------
def square_roots()
  puts ""
  puts "enter the numbers : "
  first_num = gets.chomp.to_f
  result = Math.sqrt(first_num)
  puts "square root of  #{first_num}  is  #{result}"
  return
end

# ----------BMI-----------
def BMI()
  puts ""
  puts "enter your height : "
  height = gets.chomp.to_f
  puts ""
  puts "enter your weight : "
  weight = gets.chomp.to_f
  result = 703*(weight / (height *height))
  puts "BMI is  #{result}"
  return
end


# ----------looping until the user enter q-----------

user_choice = menu()

until user_choice == "q"

  case user_choice
    when "a" then operation("+")
    when "s" then operation("-")
    when "d" then operation("/")
    when "m" then operation("*")
    when "e" then operation("^")
    when "sq" then square_roots()
    when "b" then BMI()
    else p "wrong input"
  end

  user_choice = menu()
end

