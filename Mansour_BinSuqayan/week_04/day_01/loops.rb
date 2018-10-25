i = 1
while i <= 5
    p "I: #{i}"
    i +=1
end


i = 5
while i > 0 
    p "I : #{i}"
    i -= 1
end 


index = 1

until index == 6
    p "index : #{index}"
    index +=1
end 

for idx in 0..5
 p "idx : #{idx}"
end 


# Iterators

5.times do  |i|
    puts "This ran for #{i}"
end


5.downto(2) do |index|
    puts "In the downto loop, running for #{index}"
end 


# wirte an iterative loop
#That counts from 6 to 10
#Base it on the downto loop

6.upto(10) do |i|
    puts i
end 



desired_letter = "c"
puts "What letter do you choose?"
# user_choice = gets.chomp
# p user_choice

puts "enter your first name "
firstN = gets.chomp
puts "enter your last name"
lastN = gets.chomp
 puts "your full name is #{firstN} #{lastN}"


desired_number = Random.rand(1..10)

puts "What number do you choose?"
guessed_number = gets.chomp.to_i
 

while guessed_number != desired_number
    puts "That is not it . What number do you choose?"
    guessed_number = gets.chomp.to_i
end

puts "You got it right"
