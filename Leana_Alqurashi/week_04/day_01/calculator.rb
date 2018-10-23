require "pry"
puts " welcome to the calculator"
def menu
    puts ""
    puts "(a) Addition"
    puts "(s) Subtraction"
    puts "(m) Multiplication"
    puts "(d) Division"
    puts "(q) Quit"
    puts "(e) Exponential"
    puts "(sr) Square Root"
    # puts "(mor) Mortgage Payments"

    print "Your choice? "
    gets.chomp # implicit return
    end 
    def first
    print "first number: "
    first_num = gets.chomp.to_i
    end
    def second
    print "second number: "
    first_num = gets.chomp.to_i
    end
def num input= "number"
     print "#{input}: "
    first_num = gets.chomp.to_i
end
    def functions choice
    puts "Result:"
   
    
    case choice
     when "a"
       
    add first, second
     when "s"
    sub first, second
     when "d"
        divide first, second
     when "m"
      
        multi first, second
     when "e"
       
        expo first, second
     when "sr"
        
        expo num, 2
#      when "mor"
#         princible = num "Princible"
#         rate = num "Monthly Interest Rate"
#         n = num "Number of Payments"
# mortgage rate, princible, n
    end
end
    def add x, y
        result = x+ y 
        puts " #{x} + #{y} = #{result}"  
    end
    def sub x,y 
        result = x-y
        puts " #{x} - #{y} = #{result}"
    end
     def divide x,y 
        result = x/y
        puts " #{x} / #{y} = #{result}"
    end
     def multi x,y 
        result = x * y
        puts " #{x} x #{y} = #{result}"
    end
    def expo x,y 
        result = x**y
        puts " #{x} to the power of #{y} = #{result}" 
    end 
    # def mortgage rate, princible, number
        
    # m = princible * (rate *((1-rate)**number))/(((1-rate)**number) -1)

    # end 
        user_choice = menu
# functions user_choice
until user_choice == "q"
    functions user_choice
    user_choice = menu
    
end
puts "Thanks for using the calculator"
