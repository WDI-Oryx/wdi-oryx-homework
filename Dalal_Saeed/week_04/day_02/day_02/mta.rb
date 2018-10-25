

# plan_trip( :n, "Times Square", :l, "Grand Central" )

def type(start, stop)
  if start < stop
    trip = 1
  else
    trip = 2
  end
end

def plan_trip(start_line, start_point, stop_point, stop_line)
  lines = {
    n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    l: ["8th", "6th", "Union Square", "3rd", "1st"],
    s: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }
  start = lines[start_line].index(start_point)
  stopU = lines[start_line].index("Union Square")
  startU = lines[stop_line].index("Union Square")
  stop = lines[stop_line].index(stop_point)

  if start_line != stop_line
    type_trip = type(start, stopU)
    if type_trip == 1
      start = lines[start_line].index(start_point)
      stop = lines[start_line].index("Union Square")
      p "here1"
      trip = lines[start_line][start..stopU]
    else
      p "here2"
      start = lines[start_line].reverse.index(start_point)
      stop = lines[start_line].reverse.index("Union Square")
      trip += lines[start_line].reverse[start..stop]
    end

    #################line 2
    type_trip = type(startU, stop)
    if type_trip == 1
      start = lines[stop_line].index(start_point)
      stop = lines[stop_line].index("Union Square")
      p "here3"
      trip = lines[stop_line][start..stop]
    else
      p "here4"
      p start = lines[stop_line].reverse.index("Union Square")
      p stop = lines[stop_line].reverse.index(stop_point)
      trip += lines[stop_line].reverse[start..stop]
    end
  else
    type_trip = type(start, stop)
    if type_trip == 1
      #start = lines[start_line].index(start_point)
      #stop = lines[start_line].index("Union Square")
      p "here5"
      trip = lines[start_line][start..stop]
    else
      p "here6"
      start = lines[start_line].reverse.index(start_point)
      stop = lines[start_line].reverse.index(stop_point)
      trip = lines[start_line].reverse[start..stop]
    end
  end
  p trip
end

n = :n
s = :s
l = :l
#plan_trip(n, "Times Square", "23rd", s)
plan_trip(n, "Times Square", "Astor Place", s)
plan_trip(n, "8th", "Times Square", n)
#p chair.keys[0].
#     if line1 ==line2
#p lines.select { |item| item[:l][0] }
