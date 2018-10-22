p "Please write your weight in kg"
weight = gets.chomp.to_f 
p "Please write your height in cm"
height = gets.chomp.to_f 


def bmi(weight, height)
    height = height/100
   first_result = weight/height
   bmi_result = first_result/height
end 

result = bmi(weight, height)

p "Your BMI is #{result}"