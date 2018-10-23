def hello 
    p"Hello"
end 


hello()
hello

def say_hello_to(name = "mate")
    p "Hello #{name}" 
end 

say_hello_to("Moath")
say_hello_to "ABDUALLAH"
say_hello_to


# Create a method called add
# It will receive two parameters
# X and Y
# The method will print out something like "3 plus 5 is 8"
# Make both parameters optional (by default they should be 0)
# 
# add(4, 5)
# add(4)
# add()


def add(x,y)
    p "#{x} + #{y} = #{x + y}"
end 

add(3,5)


def greeting (name)
    "Greeting ,#{name}"
end

p greeting ("Jane")



def multiply (x,y)
    x * y
end

 p multiply  5,6