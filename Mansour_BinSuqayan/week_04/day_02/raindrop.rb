#check if number has 3,5 or 7 as divisors and return the result string 

def  rain  num
    str =""
    
    str += "Pling" if num % 3 == 0
    str += "Plang" if num % 5 == 0
    str += "Plong" if num % 7 == 0
    str = num,to_s if str.empty?



    str 
end


puts "Enter a number: "
user_input = gets.chomp.to_i
puts rain user_input