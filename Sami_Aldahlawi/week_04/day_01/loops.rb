i = 1
while i <= 5
    p "I: #{i}"
    i += 1
end

i = 5
while i >= 1
    p "I: #{i}"
    i -= 1
end



index = 1

until index == 6 
    p "Index: #{index}"
    index += 1
end


for idx in 1..5
    p "Idx: #{idx}"
end

#################
# desired_number = 8
# puts "What number do you choose?"
# guessed_number = gets.chomp.to_i 
## .to_i to cursion type  to convert it to int

# while desired_number != guessed_number
#     puts "That's not it. What number do you choose?"
#     guessed_number = gets.chomp.to_i
# end
# puts "You got it right!"


puts Random.rand(2..10)
def hello
    p "Hello world, Again"
    end


hello()

def say_hello_to(name = "Mohammed" || name)
   
    p "hello Mr.#{name}"
end

say_hello_to("Ahmed")
say_hello_to "Khaled"
say_hello_to()






def add(numOne = 0,numTwo = 0)
    sum = numOne + numTwo;
    puts "The #{numOne} + #{numTwo} = #{sum}"
end

add(4,5)
add(4)
add()



# Return values in Ruby
# Imlicit return (the last line that runs, will be returned auto)
# As soon as Ruby sees a return statement, it will leave the method

def void_return(name)
    return "Gretting #{name}"
end

name =  void_return("Hone")
p name

## 