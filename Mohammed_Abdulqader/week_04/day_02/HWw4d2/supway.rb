lines = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
stopsCount = 0

def getLineArray(key)
  return lines[key]
end

def getTripString(line, startStop, endStop)
  lineArray = getLineArray(line)
  stopsString = ""
  startIndex = lineArray.indexOf(startStop)
  endIndex = lineArray.indexOf(endStop)
  stopsString = ""
end

if startIndex < endIndex
  i = startIndex
  # for (var i = startIndex; i <= endIndex; i++)

  while i <= endIndex
    i += 1
    stopsString += lineArray(i) + ","
    stopsCount += 1
  end
else
  j = startIndex
  while j >= endIndex
    j -= 1
    #   #  for (var j = startIndex; j >= endIndex; j--)
    stopsString += lineArray(j) + ","
    stopsCount += 1
  end
end
stopsString = stopsString.replace(/.$/, ".")
return stopsString

def planTrip(startLine, startStop, endLine, endStop)
  if startLine == endLine
    p "You must travel on the following stops on the   #{startLine}  line: "
    p " #{getTripString(startLine, startStop, endStop)}"
  else
    p ("You must travel on the following stops on the   #{startLine} line:")
    p " #{getTripString(startLine, startStop, "Union Square")}"
    p "Change at Union Square."
    p "Your journey continues through the following stops:"  #{endLine} "
    p " line:"
    p "#{getTripString(endLine, "Union Square", endStop)}"

    stopsCount -= 1
  end
end

p "#{stopsCount}  stops in total."

planTrip("L", "8th", "N", "8th")
