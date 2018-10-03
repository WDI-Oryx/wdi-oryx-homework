function squareNumber(number) {
    return number*number;
}

function halfNumber(number) {
    return number/2;
}

function percentOf(num1,num2) {
    if (num1>num2) {
        return (num2/num1)*100+"%";
    } else {
        return (num1/num2)*100+"%";
    }
}
function areaOfCircle(num) {
    return 3.14159*squareNumber(num);
}

function part2(num) {
    var result = halfNumber(num);
    result = squareNumber(result);
    result = areaOfCircle(result);
    result = percentOf(result,squareNumber(result));
    return result;
}
//******************/

function cl(text) {
    console.log(text);
}
function canDrive(userAge) {
    if (userAge <18) {
        cl("Sorry, you can't drive yet remaining "+(18-userAge));
    } else {
        cl("Drive away!")
    }
}