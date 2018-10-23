def plan_trip(start_line, start_stop, end_stop)
  lines = {
    "n": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "l": ["8th", "6th", "Union Square", "3rd", "1st"],
    "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }

  line_array = lines[:"#{start_line}"]
  stops = []

  if line_array.index(start_stop) <= line_array.index(end_stop)
    #forward
    stops = line_array.select { |stop| line_array.index(stop) >= line_array.index(start_stop) && line_array.index(stop) <= line_array.index(end_stop) }
  elsif line_array.index(start_stop) >= line_array.index(end_stop)
    #backword
    stops = line_array.reverse.each.select { |stop| line_array.index(stop) <= line_array.index(start_stop) && line_array.index(stop) >= line_array.index(end_stop) }
  end

  stops.map { |stop| puts "#{start_line}-#{stop}" }
  return stops.length - 1
end

print "Enter the line that you are in: "
start_line = gets.chomp.downcase

print "Enter the stop that you are in: "
start_stop = gets.chomp.split.map(&:capitalize).join(" ")

print "Enter the line that you are going to: "
end_line = gets.chomp.downcase

print "Enter the stop that you are going to: "
end_stop = gets.chomp.split.map(&:capitalize).join(" ")

number_of_stops = 0

if start_line == end_line
  number_of_stops = plan_trip start_line, start_stop, end_stop
elsif start_line != end_line
  number_of_stops = plan_trip start_line, start_stop, "Union Square"
  number_of_stops += plan_trip end_line, "Union Square", end_stop
end

puts ("Total number of stops = #{number_of_stops}")
