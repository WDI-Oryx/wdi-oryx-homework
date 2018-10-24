$lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
$lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
$line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def getLine(line)
  array = []
  case line
  when "N" then array = $lineN
  when "L" then array = $lineL
  when "6" then array = $line6
  end
  array
end

def get_trip_string(line, startStop, endStop)
  lineArray = getLine(line);
  stopsString = ""

  startIndex = lineArray.index(startStop);  # starting point index
  endIndex = lineArray.index(endStop);  # ending point index

  if startIndex < endIndex
    for i in ((startIndex + 1)..endIndex)
      stopsString += lineArray[i] + ", "
    end
  else
    for i in (startIndex..(endIndex - 1))
      stopsString += lineArray[i] + ", "
    end
  end
  stopsString
end

def plan_trip(startLine, startStop, endLine, endStop)

   if startLine == endLine
    puts "You must travel through the following stops on the #{startLine} line: #{get_trip_string(startLine, startStop, endStop)}"
   else
    puts "You must travel on the following stops on the #{startLine}  line: #{get_trip_string(startLine, startStop, "Union Square")}"
    puts "Change at Union Square."
    puts "Your journey continues through the following stops: #{endLine} line: #{get_trip_string(endLine, "Union Square", endStop)}"
  end
  end

  p plan_trip "N", "34th", "L", "3rd"