lines = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}

stops_count = 0

def get_line_array key
lines[:key]
end

def get_trip_string line, start_stop, end_stop

line_array = get_line_array(line)
stops_string = ""
start_index = line_array.index_of(start_stop)
end_index = line_array.index_of(end_stop)
stops_string = ""

end 

if start_index < end_index
  i = start_index
  while i <= end_index
    p stops_string += line_array[i] + ","
  end

elsif j = start_index
  while j >= end_index
    p stops_string += line_array[j] + ","
  end

end

 def plan_trip start_line, start_stop, end_line, end_stop 
  if start_line == end_line
    
    puts "You must travel on the following stops on the #{start_line} #{line} #{get_trip_string} (#{start_line}, #{start_stop}, #{end_stop})"
   elsif
   puts "You must travel on the following stops on the #{start_line} #{line} #{get_trip_string} (#{start_line}, #{start_stop}, #{"Union Square"})"
   puts "Change at Union Square."
   puts "Your journey continues through the following stops: #{end_line} #{line} #{get_trip_string} (#{end_line}, #{"Union Square"}, #{end_stop})"
   
end

plan_trip("L", "8th", "N", "8th")

