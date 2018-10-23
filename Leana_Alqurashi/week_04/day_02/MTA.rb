$lines = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "N-8th"],
  L: ["L-8th", "6th", "Union Square", "L-3rd", "1st"],
  Six: ["Grand Central", "33rd", "6-8th", "6-3rd", "Union Square", "Astor Place"],
}
p $n = $lines.fetch(:N)
p $l = $lines.fetch(:L)
p $six = $lines.fetch(:Six)
$array = ["N", "23rd", "L", "1st"]

def search_stop(stop)
  exist_in_line = ""
  if $l.any?(stop)
    return exist_in_line = "L"
  elsif $six.any?(stop)
    return exist_in_line = "six"
  elsif $n.any?(stop)
    return exist_in_line = "N"
  else
    return exist_in_line = ""
  end
end

# if search_stop eq line, go from the endex to US
#if not, go to union square
def lines(line, stop)
  if search_stop stop == line
    line = search_stop stop
    case line
    when "N"
      union()
      $path = $n[0..$n.index(stop)]
    when "L"
      $path = $l[0..$l.index(stop)]
    when "six"
      $path = $six[0..$six.index(stop)]
    end
  end
end

def union(array)
  us = array.index("Union Square")
end

def clean(arr1, arr2)
end

array1 = lines $array[0], $array[1]
array2 = lines $array[2], $array[3]
p union $l
p union $n
p union $six
# def line_check line, stop
#     us_n = $n.rindex("Union Square")
#     us_l = $l.rindex("Union Square")
#     us_6 = $six.rindex("Union Square")
#  case line
#      array1 = []
#  when "N"
#    if ($n.include?(stop))
#     index = $n.rindex(stop)
#   array1 =  $n[index..us]
#    else
#     array1  = $n.select {|e| e == "Union Square"}
#    end
#    end
#  end
# line_check $array[0], $array[1]

# def get_input
# puts "What's your plan?"
# print "First Line: "
# $first_line = gets.chomp
# print "first_station: "
# $first_station = gets.chomp
# print "Second Line: "
# $second_line = gets.chomp
# print "second_station: "
# $second_station = gets.chomp
# end

# def set_array a,b,c,d
#  $path = Array.new
#  $path << a << b << c << d
# end
# $array = [:N,"28th",:l,"1st"]
# # p array[0]

#  line_check array[0],array[1]
# # p $lines.fetch(array[0])
# # p a.rassoc("1st")
