# Homework Week 4 Day 2 Subway System

_N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
_L = ["8th", "6th", "Union Square", "3rd", "1st"]
_6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def subway_system(nameLine, source, destination)
  newLine = []
  source = nameLine.index(source)
  destination = nameLine.index(destination)
  #   p nameLine[source..destination]
  if source < destination
    newLine = nameLine[source..destination]
  else
    while source >= destination
      newLine.push(nameLine[source])
      source -= 1
    end
  end
  return newLine
end

def plan_trip(startLine, source, endLine, destination)
  p subway_system(startLine, source, "Union Square")
  p "Switch at 'Union Square'"
  p subway_system(endLine, "Union Square", destination)
end

plan_trip(_N, "Times Square", _6, "Grand Central")
