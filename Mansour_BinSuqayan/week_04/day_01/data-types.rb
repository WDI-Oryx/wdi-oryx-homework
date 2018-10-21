# Data Types


# Strings

p "Hello"
p 'This is single quoted'
p 'He said \'Hi\''

result = 2+2

p "The result is #{result}"

first_name ="Jacques"
last_name ="Cousteau"
full_name = "#{first_name}  #{last_name}"


p full_name

# Two options for creating strings
#- Concatenation (adding them together)
#- Interpolation (dynamic parts -substitution)

# String methods 
# "".method.sort

p "hello".upcase
p "hello".downcase
p "hello".capitalize


# figure out how to get an array of the characters in the string 

p "hello".chars 

#figure out to find out if a string is empty 
p "hello".empty?
#or 
p "hello".length == 0


lowercase_string ="hello"


p 0.1
p 42
p 1234676543
p 1_234_456

# Underscores are ignored in Ruby numbers!


#arithmetic Operators

puts 4+4
puts 4-2
puts 4*8
puts 8/4
puts 9%2
puts 2 ** 3 #To the power of (exponent)

p 10 <12 
p 10 == 10 #Always use double 

