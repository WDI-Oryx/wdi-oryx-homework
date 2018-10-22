### BMI Calculator

# Calculate the body mass index (BMI) for an individual, given their height and weight

require "pry" # Include some debugging tools

puts "Welcome to the Body Mass Calculator!"

def calculator (height, weight) 
    result = (weight / height) / height;
end

print "Enter your Weight in kg: "

weight = gets.chomp.to_f

print "Enter your height in meters: "

height = gets.chomp.to_f

print "your BMI is: "

puts calculator(height, weight)