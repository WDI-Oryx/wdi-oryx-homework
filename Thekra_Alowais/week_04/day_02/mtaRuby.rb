$lines = {
  n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  l: ["8th", "6th", "Union Square", "3rd", "1st"],
  s: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
$stopsCount = 0

def getLine(key)
  $lines[key]
end

# p getLine(:n)
def getTripString(line, startStop, endStop)
  #   p "getTripString methods #{line} +  #{startStop}  + #{endStop}"
  line_array = getLine(line)
  #   p "#{line_array}"
  stopsString = ""
  startIndex = line_array.index(startStop)
  endIndex = line_array.index(endStop)
  #   p "startIndex #{startIndex} and endIndex #{endIndex}"
  if startIndex < endIndex
    i = startIndex
    # p "error #{line_array[i]}"
    while i <= endIndex
      stopsString += line_array[i] + ", "
      #   p "stopsString #{stopsString}"
      $stopsCount += 1
      i = i + 1
    end
  else
    j = startIndex
    while j >= endIndex
      stopsString += line_array[j] + ", "
      $stopsCount += 1
      j = j - 1
    end
  end
  stopsString
end

def planTrip(startLine, startStop, endLine, endStop)
  if startLine == endLine
    # p " #{startLine} + #{startStop} + #{endLine} + #{endStop}"
    p "You must travel on the following stops on the #{startLine} line: #{getTripString(startLine, startStop, endStop)}"
  else
    p "You must travel on the following stops on the #{startLine} line:  #{getTripString(startLine, startStop, "Union Square")}"
    p "Change at Union Square."
    p "Your journey continues through the following stops: #{endLine} line: #{getTripString(endLine, "Union Square", endStop)}"
    $stopsCount -= 1
  end
  p " #{$stopsCount} stops in total"
end

# planTrip(:n, "8th", :n, "Times Square")
planTrip(:l, "8th", :n, "8th")
