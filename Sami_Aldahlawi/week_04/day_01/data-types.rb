require 'pry'


# Data Types
# Snick case example (first_name)

# String
p "Hello"
p 'This is single quoted'
p 'He said \'Hi\'.'

result = 4 + 4;
p "The result is #{result}"

first_name = "Sami"
last_name = "Mohammed"
full_name   =   "#{first_name} #{last_name}"

p full_name
binding.pry # just like debugger in JS

# Two options for creating strings
# - Concatenation (adding them together)
# - Interpolation (dynamic parts)

# "".methods.sort



p   "hello".upcase();
p   "hello".downcase
p   "hello".capitalize

# Figure out how to get an array of the characters in the string
p "hello".chars
# "hello" => ["h","e","l"...]


# Figure out how to find out if a string is empty
p "hello".length == 0
# OR 
p "hello".empty? ## with ? always return bool T OR F


Lowercase_string = "hello"

p Lowercase_string.upcase
# p Lowercase_string.upcase is pass by value
# p Lowercase_string.upcase! is pass by reference
p Lowercase_string


p "hiii"
puts "hiii" # remove the ""


# Numbers

p 0.1 
p 42
p 123499328212
p 1_000_000_000 # Underscores are ignored in Ruby numbers!



#Aritmetic Operators

puts 4 + 4
puts 4 - 2
puts 4 * 8
puts 8 / 2
puts 9 % 2

puts 6 ** 2  # To the power of (exponent)

# comparsion
puts 10 == 10
puts 3 > 4
puts 4 != 4


#Conditions

if true
    puts "Yep, that makes sense"
end

if 32 < 13 
    p "Maths semms to work"
end


name = "Mohammed"

if name == "Jone"
    p "Jone is logged in"
elsif name == "mohammed"
    p "Mohammed is logged in"
else
    p "No-One is logged in"
end


p "42 is bigger" if 42 > 15


is_logged_in = true

if is_logged_in
    p "Here is your profile page"
else
    p "You need to log in first" 
end


p "Here is your profile page" if is_logged_in



explorer_name = "Jacques"

if explorer_name != "Jacques"
    p "That is a shame"
else
    p "Woohoo!"
end


unless explorer_name == "Jacques"
    p "That is a shameeeeee"
else
    p "WOOOHOO!"
end

x = 5
y = 3

unless x < y 
    p "#{x} is ia a bigger number than #{y}"
else
    p "#{y} is a bigger number than #{x}"
end

# Case Statement
num_of_wheels = 1

case num_of_wheels
when 1 
    p "Unicycle"
when 2
    p "Bike"
end


current_name = "Moath"
case current_name
when "Treva" then p "Lead Instructor"
when "Moath" then p "TA"
else
    p "Student"
end


hour = 12

case hour
when 0..12
    p "Good morning"
when 12..18
    p "Good afternoon"
else
    p "Good night"
end



letter = "e"

case letter
when 'a'..'e' 
    p "It is early in the alphabet"
else
    p "It is later in the alphabet"
end
