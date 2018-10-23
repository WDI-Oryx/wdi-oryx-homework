
def lines
  {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }
end

def s_line(key)
  if key == "N"
    p lines["N"]
  end
  if key == "L"
    p lines["L"]
  end
  if key == "6"
    p lines["6"]
  end
  return key
end

# s_line("N")
# s_line("L")
# p lines["N"]

def trip(line, start_stop, end_stop)
  trip_line = s_line(line)
  start_index = trip_line.index(start_stop)
  end_index = trip_line.index(end_stop)
  stops = ""

  if start_index < end_index
    until start_index == end_index
      stops += trip_line[start_index]
      start_index += 1
    end
  else
    until start_index == end_index
      stops += trip_line[start_index]
      start_index -= 1
    end
  end
  return stops
end

def plan_trip(start_line, start_stop, end_line, end_stop)
  if start_line == end_line
    puts "You must travel on the following stops on the  #{start_line}  line:  #{trip(start_line, start_stop, end_stop)}"
  else
    puts "You must travel on the following stops on the #{start_line}  line:  #{trip(start_line, start_stop, "Union Square")}"
    puts "Change at Union Square."
    puts "Your journey continues through the following stops:  #{end_line}  line: #{getTripString(endLine, "Union Square", endStop)}"
  end
  #   puts " #{stops} stops in total"
end

p plan_trip("L", "8th", "N", "8th")
