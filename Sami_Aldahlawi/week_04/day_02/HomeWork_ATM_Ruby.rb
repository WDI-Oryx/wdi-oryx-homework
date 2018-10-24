
##create three a array
##The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
line_l = ["8th", "6th", "union square", "3rd", "1st"]
line_6 = ["grand central", "33rd", "28th", "23rd", "union square", "astor place"]
line_n = ["times square", "34th", "28th", "23rd", "union square", "8th"]

def takeOneLine(nameLine, source, destination)
  newLine = []
  multLines = false
  if destination == "union square"
    multLines = true
  end

  source = nameLine.index(source)
  destination = nameLine.index(destination)
  if source <= destination
    newLine = nameLine[source..destination]
  else
    while source >= destination
      newLine.push(nameLine[source])
      source -= 1
    end
  end
  if multLines
    newLine.pop()
  end
  newLine
end

def looking_for_element(arr, source, destination)
  checkSource = false
  checkDestination = false
  arr.each do |value|
    # p value
    if value.include?(source)
      checkSource = true
    end
    if value.include?(destination)
      checkDestination = true
    end
  end
  return checkSource == checkDestination
end

def MultLines(first_line, source, secondLine, distination)
  newLine = []
  if (first_line == secondLine)
    if !looking_for_element(first_line, source, distination)
      return "Sorry, The route is invalid"
    end
    newLine.push(*takeOneLine(first_line, source, distination))
  else
    if !looking_for_element(first_line, source, "union square") || !(looking_for_element(secondLine, "union square", distination))
      return "Sorry, The route is invalid"
    end
    newLine.push(*takeOneLine(first_line, source, "union square"))
    newLine.push(*"You should switch at US")
    newLine.push(*takeOneLine(secondLine, "union square", distination))
  end
  return newLine
end

# plan_trip( :n, "Times Square", :6, "Grand Central" )

# p takeOneLine(line_6, "grandd central", "union square")

route = MultLines(line_6, "grand central", line_l, "8th")
puts route
