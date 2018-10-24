require "pry" # Include some debugging tools

puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(bmi) BMI"
  puts "(s) Subtraction"
  puts "(m) Multiply"
  puts "(d) Division"
  puts "(e) Exponent"
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp # Implicit Return
end

def bmi_calc
  puts ""
  puts "What is your hiegt?"
  heightInMeters = gets.chomp.to_f

  puts "What is your weight?"
  weightInKilos = gets.chomp.to_f

  bmi = weightInKilos / Math.pow(heightInMeters, 2.0);

  puts "#{first_num} + #{second_num} = #{bmi}"
end

user_choice = menu()

until user_choice == "q"

  case user_choice
  when "bmi" then bmi_calc()
  when "s" then subtract()
  when "m" then multiply()
     when "d" then divide()
        when "e" then exponent()
  end 
  user_choice = menu()
end


puts ""
puts "Thanks for using the calculator"