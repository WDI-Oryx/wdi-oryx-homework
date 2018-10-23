require "pry" # Include some debugging tools

puts "Welcome to the MTA!"

mta = {
  n_stops: {
    1 => "Times Square",
    2 => "34th",
    3 => "28th",
    4 => "23rd",
    5 => "Union Square",
    6 => "8th",
  },

  l_stops: {

    1 => "8th",
    2 => "6th",
    3 => "Union Square",
    4 => "3rd",
    5 => "1st",
  },
  six_stops: {
    1 => "Grand Central",
    2 => "33rd",
    3 => "28th",
    4 => "23rd",
    5 => "Union Square",
    6 => "Astor Place",
  },
}

# puts " whats your current line? i.e enter the line name (n, l or 6)"
# line1 = gets.chomp.to_s
# p line1
# if (line1 == "6")
#   line1 = "six"
# end

# def which_line(line_name)
#   if (line_name == "n")
#     "n_stops"
#   elsif (line_name == "l")
#     return "l_stops"
#   elsif (line_name == "six")
#     return "six_stops"
#   end
# end

# line = which_line(line1)
# print line_stops

# puts (Array(mta[:n_stops].invert.keys))
# puts " whats your current location? i.e enter the stop name"
# stop1 = gets.chomp
# p stop1
stop1 = "Grand Central"
line1 = "six"
stop2 = "6th"
line2 = "l"
# which_line is a function used to correspondence the lineStops with the entered line

# // stop_indicies is a function used to find the index of the stops
def stop_indicies(mta, line_name, stop_name)
  selected_line = which_line(line_name)
  return (Array(mta[selected_line.to_sym].invert.keys)).find_index(stop_name)
end

# // passed_stops is a fuction used to list the stops that the passenger going to pass through them either forth or back
def passed_stops(mta, start_index, end_index, line_name)
  line_stops = which_line(line_name)
  if (start_index < end_index)
    passed_stops_list = (Array(mta[line_stops.to_sym].invert.keys))[(start_index + 1)..end_index]
  else
    passed_stops_list = ((Array(mta[line_stops.to_sym].invert.keys))[end_index..(start_index - 1)]).reverse
  end
end

# // message is a function used to help in writing the output  message to the passenger
# function message(stopList1, line1, stopList2, line2) {
#     var passedStopsList1 = ("You must travel through the following stops on the " + line1 + " line: ");
#     for (var i = 0; i < stopList1.length; i++) {
#         if (i < stopList1.length - 1) {
#             passedStopsList1 = (passedStopsList1 + stopList1[i] + ", ");
#         } else {
#             passedStopsList1 = (passedStopsList1 + stopList1[i] + ".");
#         }
#     }
#     if (stopList2.length === 0) {
#         passedStopsList2 = "";
#     } else {
#         var passedStopsList2 = ("Your journey continues through the following stops on the " + line2 + " line: ");
#         for (var i = 0; i < stopList2.length; i++) {
#             if (i < stopList2.length - 1) {
#                 passedStopsList2 = (passedStopsList2 + stopList2[i] + ", ");
#             } else {
#                 passedStopsList2 = (passedStopsList2 + stopList2[i] + ".");
#             }
#         }
#     }
#     return [passedStopsList1, passedStopsList2];
# }

# // planTrip is the main function that going to be called
def plan_trip(mta, current_line, current_stop, destination_line, destination)
  union_square = "Union Square"
  if (current_line == destination_line and current_stop == destination)
    puts "Your  current location and destination are one, you do not need to travel"
  elsif (current_line == destination_line)
    start_index = stop_indicies(mta, current_line, current_stop)
    end_index = stop_indicies(mta, destination_line, destination)
    passed_stops_list = passed_stops(mta, start_index, end_index, current_line)
  else
    start_index1 = stop_indicies(mta, current_line, current_stop)
    end_index1 = stop_indicies(mta, current_line, union_square)
    passed_stops_line1 = passed_stops(mta, start_index1, end_index1, current_line)
    start_index2 = stop_indicies(mta, destination_line, union_square)
    end_index2 = stop_indicies(mta, destination_line, destination)
    passed_stops_line2 = passed_stops(mta, start_index2, end_index2, destination_line)
    passed_stops_list = passed_stops_line1 + passed_stops_line2
    puts passed_stops_list
  end
end

plan_trip(mta, line1, stop1, line2, stop2)
