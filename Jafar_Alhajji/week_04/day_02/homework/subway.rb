# ----------- main function -----------------------
def plan_trip(startLine, startStop, endLine, endStop) 

  if (startLine === endLine) 
    puts ""
    puts "You must travel on the following stops on the #{startLine} line: #{getTripString(startLine, startStop, endStop)}" 
    puts ""
  else 
    puts ""
    puts "You must travel on the following stops on the #{startLine} line: #{getTripString(startLine, startStop, "Union Square")}." 
    puts "Change at Union Square !!!" 
    puts "Your journey continues through the following stops:#{endLine} line: #{getTripString(endLine, "Union Square", endStop)}."
    puts ""
  end 
end 


#  ----------- making the trip string  -----------------
def getTripString(line, startStop, endStop) 
    lineArray = getLine(line)
    string = "" # to save the station 
    start_point = lineArray.index(startStop) # save the index of start point
    end_point = lineArray.index(endStop) # save the index of end point
    # p start_point 
    # p end_point
    if start_point > end_point
        start_point.downto(end_point) do |j| 
            string += "#{lineArray[j]}, "
        end
    else
        start_point.upto(end_point) do |j|
            string += "#{lineArray[j]}, "
        end 
    end 
     return string[0...-2]  
end 


 
# ----- to get the line array ----------
def getLine (key)
    lines = 
    {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }
    return lines[key]
end 

plan_trip(:N, "8th", :N, "Times Square")
plan_trip(:N, "Times Square", :"6", "Grand Central")

