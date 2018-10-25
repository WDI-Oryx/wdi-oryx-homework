
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.

N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
L = ["8th", "6th", "Union Square", "3rd", "1st"]
sixth = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

stops = 0

puts "I can see you're a frequent visitor"
puts ""


def users
puts "what is your start station today?"

choice = gets.upcase.chomp

def current_line(choice)
  if choice == "N"
    puts "you must travel on the following in the N Line #{N}"
  elsif choice == "L"
    puts "you must travel on the following in the L Line #{L}"
  elsif choice == "6"
    puts "you must travel on the following in the 6th Line #{sixth}"
  else
    puts "enter valid line"
  end
end

def trip(line, startStop, endStop)
  slines = ""
  starting_p = line.index(startStop)
  ending_p = line.index(endStop)

  if starting_p < ending_p
    (starting_p..ending_p).each do |n|
      sline += line[i]
      stops += 1
    end
  else
    (ending_p..starting_p).reverse.each do |j|
      sline += line[j]
      stops += 1
    end
  end
end

def planner(startl, starts, eline, estop)
  starter = current_line(startl)

 if startl != eline
    puts "change at Union Square from #{startl} line to the #{eline}"
 end 

  ending = current_line(eline)
  puts "your journey continues through the following stops: #{eline}"

  puts "#{stops} stops in tottal"

  puts ""
  puts "Thank you for using our subway system ! see you next time"
end

planner("N", "24th", "6", "3rd")
