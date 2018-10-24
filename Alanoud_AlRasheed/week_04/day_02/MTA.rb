
def stops(key)
  line_n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  line_l = ["8th", "6th", "Union Square", "3rd", "1st"]
  line_6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  key = line_n if key == "n"
  key = line_6 if key == "6"
  key = line_l if key == "l"
  return key
end

def one_way_trip(line, start_stop, end_stop)
  line = line.downcase
  line_stops = stops(line)
  start_index = line_stops.index(start_stop)
  end_index = line_stops.index(end_stop)
  all_stops = ""
  i = start_index
  j = start_index

  if (start_index < end_index)
    until i == end_index
      all_stops += line_stops[i] + ", "
      i += 1
    end
  else
    until j == end_index
      all_stops += line_stops[j] + ", "
      j -= 1
    end
  end

  return all_stops.chop!.chop!
end

def plan_trip(start_line, start_stop, end_line, end_stop)
  if (start_line === end_line)
    p "You must travel on the following stops on the #{start_line} line: #{one_way_trip(start_line, start_stop, end_stop)}."
  else
    p "You must travel on the following stops on the #{start_line} line: #{one_way_trip(start_line, start_stop, "Union Square")}."
    p "Change at Union Square."
    p "Your journey continues through the following stops on the #{end_line} line: #{one_way_trip(end_line, "Union Square", end_stop)}."
  end
end

p "Enter starting line"
sl = gets.chomp
p "Enter starting stop"
ss = gets.chomp
p "Enter ending line"
el = gets.chomp
p "Enter ending stop"
es = gets.chomp

plan_trip(sl, ss, el, es)
