N= ["Time aquare","34","28th","23rd","Union Square","8th"],
L = ["8th","6th","Union Square", "3rd","1st"],
 six = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]



 def getLineArray(key)

    return lines[key]


 def getTripString (line,startStop,endStop)

    lineArray = getLineArray(line);
 startIndex = lineArray.indexOf(startStop)
 endIndex = lineArray.indexOf(endStop)


  

    var stopString = ""
do (var i = startIndex i < endIndex i++)
    stopString += lineArray[i] + ','

return stopString



def planTrip(startLine, startStop,endLine,endStop)
    if (startLine === endLine)
      p 'you must travel on the following stops on the '+ startLine+' line: '+getTripString(startLine,startStop,endStop))
    

  
p planTrip("N","Union Square","N","Times Square")
end