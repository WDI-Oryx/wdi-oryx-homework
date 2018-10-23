

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(m) multiply"
  puts "(d) divison"
  puts "(e) Exponent"
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp 
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
  print "What is your first number?"
  first_num = gets.chomp.to_f

  print "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

def multiply
  puts ""
  print "What is your first number?"
  first_num = gets.chomp.to_f

  print "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end
def divison 
  puts ""
  print "What is your first number?"
  first_num = gets.chomp.to_f

  print "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end
def exponent
  puts ""
  puts "What is your first number?"
  first_num = gets.chomp.to_f

  puts "What is your second number?"
  second_num = gets.chomp.to_f

  result = first_num ** second_num
  puts "#{first_num} Exponent #{second_num} = #{result}"
end


user_choice = menu()

until user_choice == "q"

  case user_choice
  when "a" then add()
  when "s" then subtraction()
  when "m" then multiply()
  when "d" then divison() 
  when "m" then multiply()
  when "e" then exponent()
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using the calculator"
 

def tripCal 
    puts "Enter  the distance .KiloMeter"
    kilo = gets.chomp.to_f
    puts "Enter the Kilometers per litre"
    litre = gets.chomp.to_f
    puts "Enter the Price per litre"
    price = gets.chomp.to_f

     final= (kilo / litre ) * price 
    puts "you have to pay #{final} R.S "
end 
tripCal



def bmi ( )
    puts "Enter your height"
    height= gets.chomp.to_f
    puts "Enter your  weight per Kilogram"
     weight= gets.chomp.to_f
     bmi= weight / (height/100)
     puts "Your BMI is #{bmi}"  
end 
