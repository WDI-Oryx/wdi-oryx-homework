$line_N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
$line_L = ["8th", "6th", "Union Square", "3rd", "1st"]
$line_6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
$stops_Count = 0

def get_line_array(line)
  array = []
  case line
  when "N" then array = $_line_N
  when "L" then array = $_line_L
  when "6" then array = $_line_6
  end
  array
end

def tripString(line, startStop, endStop)
  lineArray = get_line_array(line)
  stopsString = ""
  startIndex = lineArray.index(startStop)
  endIndex = lineArray.index(endStop)

  if startIndex < endIndex
    stopsString += lineArray[i] + ","
    stopsCount += 1
  elsif startIndex > endIndex
    stopsString += lineArray[i] + ","
    stopsCount += 1
  end
  stopsString
end

# Plans trip

def planTrip(startLine, startStop, endLine, endStop)
  if (startLine === endLine)
    puts "You must travel on the following stops on the #{startLine} line: #{tripString(startLine, startStop, endStop)}"
  else
    puts "You must travel on the following stops on the #{startLine} line:  #{tripString(startLine, startStop, "Union Square")}"
    puts "Change at Union Square."
    puts "You must travel on the following stops on the #{startLine} line:  #{tripString(endLine, "Union Square", endStop)}"
  end
end

p planTrip "N", "Times Square", "6", "Grand Central"
