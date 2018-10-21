var obj = {
    mercury:0.2408467,
    venus:0.61519726,
    mars:1.8808158,
    jupiter:11.862615,
    saturn:29.447498,
    uranus:84.016846,
    neptune:164.79132
};

function calYear(second){
    var resultInYear = second/60/60/24/365;
    return resultInYear.toFixed(0) + ", " + "year";
}


function calAge(yearSecond){
    var result;
    for(var i in obj){
        result =  yearSecond * obj[i] /60/60/24/365.25 ;
        console.log(result.toFixed(6) + " on " + i + calYear(yearSecond));
    }
}