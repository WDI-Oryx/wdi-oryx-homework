require "pry"
Nline = ["timessaquar", " N34", "N28", " UnoinSaquare", " N8"]
Lline = ["L8", "L6", "UnoinSaquare ", "L3", "L1"]
SIXline = ["Groundcenter", "S33 ", " S28", "S23", "UnoinSaquare", " Astorplace"]

def choceline
  puts "what is the line you will take!!"
  puts "(1) for Nline"
  puts "(2) for Lline"
  puts "(3) for 6line"
  gets.chomp.to_i
end

def line
  tripline = choceline
  case tripline
  when 1
    tripline = Nline
  when 2
    tripline = Lline
  when 3
    tripline = SIXline
  else
    puts "soory no such line!!"
  end
end

chosen_line = line()

puts "What station would you start with?"
startstation = gets.chomp.to_i
puts "What station would you end in"
endstation = gets.chomp.to_i

def trippath(path, startstation, endstation)
  puts "your trip will be "
  if startstation < endstation
    print path[startstation..endstation]
  else
    print path.reverse[endstation..startstation]
  end
end

trippath(chosen_line, startstation, endstation)
