puts "Welcome to the Calculator!"

def menu
  puts ""
  puts "(a) Addition"
  puts "(s) Subtraction"
  puts "(d) Division"
  puts "(m) Multiply"
  puts "(p) Power of"
  puts "(r) Root Square"
  puts "(e) Exponent"
  puts "(q) Quit"
  puts ""
  puts "What operation would you like to perform?"
  gets.chomp # Implicit Return
end

def add(first_num,second_num)
  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end
def multiply(first_num,second_num)
    result = first_num * second_num
    puts "#{first_num} x #{second_num} = #{result}"
  end
  def division(first_num,second_num)
    result = first_num / second_num
    puts "#{first_num} / #{second_num} = #{result}"
  end
  def subtraction(first_num,second_num)
    result = first_num - second_num
    puts "#{first_num} - #{second_num} = #{result}"
  end
  def powerof(first_num,second_num)
    result = first_num ** second_num
    puts "#{first_num} ^ #{second_num} = #{result}"
  end
  def rootsquare(first_num)
    i=0
    while i<=first_num
        if i** 2==first_num
    puts "the root square is #{i}"
    end
    i+=1
  end
end
def exponent(first_num)
    i=2
    ex=0
    num=first_num.to_i
    while i<=first_num
        while num%i==0
   num=num/i
   ex+=1
   if i**ex==first_num
    puts "the exponent is #{ex} and the base is #{i}"
    end
    end
    i+=1
  end
end
arr=["a","s","d","m","p","r","e","q"]
user_choice = menu()

until user_choice == "q"
    while !arr.include?user_choice 
        user_choice = menu()   
    end
    puts ""
    puts "What is your first number?"
    first_num = gets.chomp.to_f
    until user_choice == "r"||user_choice =="e"
    puts "What is your second number?"
    second_num = gets.chomp.to_f
    end
  case user_choice
  when "a" then add(first_num,second_num)
  when "s" then subtraction(first_num,second_num)
  when "d" then division(first_num,second_num)
  when "m" then multiply(first_num,second_num)
  when "p" then powerof(first_num,second_num)
  when "r" then rootsquare(first_num)
  when "e" then exponent(first_num)
  end
#   while !arr.include?user_choice 
  user_choice = menu()
#   end
end

puts ""
