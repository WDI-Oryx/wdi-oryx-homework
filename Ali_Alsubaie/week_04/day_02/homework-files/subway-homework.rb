$lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
$lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
$line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
$commun_stop = "Union Square"
$counter = 0

def getLine(aLine)
  arr = []
  case aLine
  when "N" then arr = $lineN
  when "L" then arr = $lineL
  when "6" then arr = $line6
  end
  arr
end

def fromTo(line, startPoint, destination)
  through = ""
  a = line.index(startPoint);  # starting point index
  b = line.index(destination);  # ending point index

  if a < b
    ((a + 1)..b).each do |i|
      through += line[i] + ", "
      $counter += 1
    end
  else
    (b..(a - 1)).reverse_each do |i|
      through += line[i] + ", "
      $counter += 1
    end
  end

  through
end

def plan_trip(fline, fstop, lline, lstop)
  first_line = getLine fline
  puts
  puts "You must travel through the following stops on the #{fline} line: #{fromTo(first_line, fstop, $commun_stop)}"
  puts "Change at Union Square from the #{fline} line to the #{lline} line." if fline != lline
  last_line = getLine lline
  puts "Your journey continues through the following stops: #{fromTo(last_line, $commun_stop, lstop)}"

  puts "#{$counter} stops in total."
  puts
end

plan_trip "N", "Times Square", "6", "Grand Central"
