def get_lines
  lines = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }
  lines
end

# p get_lines

#  Takes a line key and returns the whole line array
#  Example: given "N", returns ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
def get_line_array(key)
  get_lines[key]
end

# get_line_array(:"N")

$stops_count = 0

# Returns the stops on the line I'm travelling on
#  Needs the line you're travelling on, the start stop, the end stop
def get_trip_string(line, start_stop, end_stop)
  line_array = get_line_array(line)
  start_index = line_array.index(start_stop)
  end_index = line_array.index(end_stop)
  stops_string = ""

  #  Going forward
  if (start_index < end_index)
    until start_index > end_index
      stops_string += line_array[start_index] + ","
      $stops_count += 1
      start_index += 1
    end
  else
    until start_index < end_index
      stops_string += line_array[start_index] + ","
      $stops_count += 1
      counter += 1
      start_index -= 1
    end
  end
  stops_string = stops_string.gsub(/\,$/, ".")
  stops_string
end

# p get_trip_string(:N, "8th", "Times Square")

def plan_trip(start_line, start_stop, end_line, end_stop)
  #    Travelling on the same line
  if (start_line === end_line)
    print "You must travel on the following stops on the "
    print start_line
    print " line: "
    puts get_trip_string(start_line, start_stop, end_stop)
  else
    print "You must travel on the following stops on the "
    print start_line
    print " line: "
    puts get_trip_string(start_line, start_stop, "Union Square")
    print "Change at Union Square."
    puts ""
    print "Your journey continues through the following stops: "
    print end_line
    print " line: "
    puts get_trip_string(end_line, "Union Square", end_stop)

    # Fixes double counting US
    print $stops_count -= 1
    puts " stops in total."
  end
end

# plan_trip(:N, "8th", :L, "8th")
# plan_trip(":L", "8th", ":N", "8th");
# plan_trip("6", "Grand Central", "N", "8th")
plan_trip("L", "8th", "N", "8th")
