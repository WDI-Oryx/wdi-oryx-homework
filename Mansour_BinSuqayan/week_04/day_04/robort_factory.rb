require "pry"


# class Robot
#     attr_accessor :name

#     def initialize()
#         reset()
#         p @name 
#     end

#     def reset()
#         @name = ("A".."Z").to_a.sample(2).join
#         @name += (0..9).to_a.sample(3).join
#     end
# end



# newRobet = Robot.new

binding.pry

class Robot
    attr_accessor :name
    def initialize
        # Random 2 letters
        letters =("A".."Z").to_a.sample(2).join
        numbers =(0..9).to_a.sample(3).join
        @name = letters + numbers
        
    end
end


newRobrt = Robot.new
p newRobrt

binding.pry

