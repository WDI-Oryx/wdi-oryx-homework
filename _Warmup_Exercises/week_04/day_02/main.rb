############################
####### If approach ########
############################
print "Enter a number: "
user_input = gets.chomp.to_i

str = ""

# If the number contains 3 as a factor, output 'Pling'.
str += "Pling" if user_input % 3 == 0

# If the number contains 5 as a factor, output 'Plang'.
str += "Plang" if user_input % 5 == 0

# If the number contains 7 as a factor, output 'Plong'.
str += "Plong" if user_input % 7 == 0

# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
str = user_input.to_s if str.empty?

# Print result
puts str




############################
#### Function approach #####
############################
# Check if number has 3, 5, or 7 as divisors and return the restult string
def rain num
  str = ""

  # If the number contains 3 as a factor, output 'Pling'.
  str += "Pling" if num % 3 == 0

  # If the number contains 5 as a factor, output 'Plang'.
  str += "Plang" if num % 5 == 0

  # If the number contains 7 as a factor, output 'Plong'.
  str += "Plong" if num % 7 == 0

  # If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
  str = num.to_s if str.empty?

  str
end

print "Enter a number: "
user_input = gets.chomp.to_i

# Call function rain with user_input as argument
rain user_input
# Print result
puts