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

def get_trip_string(line, start_stop, end_stop)
  line_Array = get_line_array(line)
  stops_string = ""

  start_index = line_Array(start_stop)
  end_index = line_Array(end_stop)

  unless start_index < end_index
    stops_string += line_Array[i] + ","
  end
else
  unless start_index > end_index
    stops_string += line_Array[i] + ","
  end
  stops_string
end

def plan_trip(start_line, start_stop, end_line, end_stop)
  if start_line == end_line
    puts "You must travel through the following stops on the #{start_line} line: #{get_trip_string(start_line, start_stop, end_stop)}"
  else
    puts "You must travel on the following stops on the #{start_line}  line: #{get_trip_string(start_line, start_stop, "Union Square")}"
    puts "Change at Union Square."
    puts "Your journey continues through the following stops: #{end_line} line: #{get_trip_string(end_line, "Union Square")}"
  end
end

p plan_trip "L", "8th", "N", "8th"
