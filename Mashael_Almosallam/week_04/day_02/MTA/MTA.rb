def line
  lines = {
    "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L": ["8th", "6th", "Union Square", "3rd", "1st"],
    "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }
  lines
end

stopsCount = 0
# Takes a line key and returns the whole line array
# Example: given "N", returns ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
def getLineArray(key)
  return line[key]
end

# Returns the stops on the line I'm travelling on
# Needs the line you're travelling on, the start stop, the end stop
def tripString(line, startStop, endStop)
  lineArray = getLineArray(line)
  stopsString = ""
  startIndex = lineArray.index(startStop)
  endIndex = lineArray.index(endStop)

  if startIndex < endIndex
    ((startIndex + 1)..endIndex).each do |station|
      stopsString += line[i] + ","
      stopsCount += 1
    end
  else
    (endIndex..(startIndex - 1)).reverse_each do |station|
      stopsString += line[i] + ","
      stopsCount += 1
    end
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

planTrip "N", "Times Square", "6", "Grand Central"
