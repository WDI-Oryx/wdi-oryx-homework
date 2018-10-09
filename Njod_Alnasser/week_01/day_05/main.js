var sublines = 
{


    N: [ "Times Square", "34th", "28th N", "23rd N", "Union Square", "8th N"],
    L: ["8th L", "6th", "Union Square", "3rd", "1st"],
   "6" : ["Grand Central", "33rd", "28th 6", "23rd 6", "Union Square","Astor Place"]
 
   

};

var communStop = "Union Square";

function listTripOne (lineName,line, station) 
{
    var intersect = line.indexOf(communStop);
    
    var subMessage = " Travel through the following stops on the " + lineName + " line";
    
    var count = 0;

    if (station > intersect) { 
        for (var i = station - 1; i >= intersect; i--) 
        {
            if (i !== intersect) 
            {
                subMessage += line[i];
            }
            
            else 
            {
                subMessage += line[i];
            }
            
            count++;
        }
    }

    else 
    {
        for (var i = station + 1; i <= intersect; i++) 
        {
            if (i !== intersect) 
            {
               subMessage += line[i];
            }
            else 
            {
              subMessage += line[i];
            }
            count++;
        }
    }
    console.log(subMessage);
    return count;
}


function listTripTwo(lineName,line, station) 
{

    var intersect= line.indexOf(communStop);
    
    var subMessage = "Continue through the following stops on the " + lineName + " line"
    
    var count = 0;
    
    if (station > intersect) 
    {
        for (var i = intersect + 1; i <= station; i++) {
            if (i !== station) {
                subMessage += line[i];
            }
            else {
               subMessage += line[i];
            }
            count++;
        }
    }

    else 
    {
        for (var i = intersect - 1; i >= station; i--) 
        {
            if (i !== station) 
            {
                subMessage += line[i];
            }
            else 
            {
                subMessage += line[i];
            }
            count++;
        }
    }

    console.log(subMessage);
    return count;
}

 function TripSingleLine(lineName, line, stationOne, stationTwo) 
{
    var subMessage = "Travel through the following stops on the " + lineName + " line";
    
    var count = 0;

    if (stationTwo > stationOne) 
    {
        for (var i = stationOne + 1; i <= stationTwo; i++) 
        {
            if (i !== stationTwo) 
            {
                subMessage += line[i];
            }
            else 
            {
                subMessage += line[i];
            }
            count++;
        }
    }

    else 
    {
    
        for (var i = stationOne - 1; i >= stationTwo; i--) 
        {
            if (i !== stationTwo) 
            {
                subMessage += line[I];
            }
            else 
            {
                subMessage += line[i];
            }
            count++;
        }
    }

    console.log(subMessage);
    return count;
}
