require 'rainbow'

p "Welcome to the calculator!"

def prompt
    puts Rainbow("Which operation would you like to perform? \n(*) Multipliction \n(/) Division \n(-) Subtraction \n(+) Addition \n(e) Exponentiation \n(s) Square Root \n(q) Quit").yellow
    operation = gets.chomp
end 

choice = prompt()

until choice == "q"

    def calulator(x =0, y=0, op)
        case op
        when "*"
            return "#{x} #{op} #{y} = #{x*y}" 
        when "+"
            return "#{x} #{op} #{y} = #{x+y}" 
        when "/"
            return "#{x} #{op} #{y} = #{x/y}" 
        when "-"
            return "#{x} #{op} #{y} = #{x-y}" 
        when "e"
            return "#{x} #{op} #{y} = #{x ** y}" 
        when "s"
            return "The Square Root of #{x} is #{Math.sqrt(x)}, and the Square Root of #{y} is #{Math.sqrt(y)}" 
        else 
            "You didn't choose a correct opertator"
        end 
    end 

    p "Now enter the value of x:"
    x = gets.chomp.to_f

    p "Now enter the value of y:"
    y = gets.chomp.to_f

    p calulator(x,y, choice)

    choice = prompt()

end 

p "Thanks for using the calculator."