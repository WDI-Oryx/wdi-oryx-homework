p"Enter your Weight"

Weight = gets.chomp.to_i 

p"Enter your Height"
Height = gets.chomp.to_i 

Bmi = Weight * 10000 / (Height * Height)

h = if (Bmi < 18.5)
    p"under Normal"
elsif (Bmi < 24.5)
    p"Normal"
elsif (Bmi < 30.5)
    p"Over Weight"
elsif (Bmi >= 31)
    p"Obese"
end

puts "The BMI: " [Bmi]
