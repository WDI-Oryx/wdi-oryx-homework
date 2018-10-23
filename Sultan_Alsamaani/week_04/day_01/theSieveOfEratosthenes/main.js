$("document").ready(function() {
  function generate(upTo) {
    for (let index = 2; index <= upTo; index++) {
        var divObj = $('<div/>');
      var h1Obj = $('<h1/>')
        $(h1Obj).text(index)
        divObj.append(h1Obj)
        divObj.addClass('box');
        $('.main').append(divObj);

    }
  }
    generate(120);
function isPrimes(num)
{
    if(num ===2)
    return true;
    for(var i=2;i<num;i++)
    {
        if(num%i===0)
        return false;
    }
    return true;
}
function colorPrimeNumbers()
{
   for(var obj of $(".box h1"))
   {
    //    debugger;
       if (isPrimes(parseInt($(obj).text())))
           $(obj)
             .parent()
             .addClass("redBackground");
   }
}
// debugger;
    colorPrimeNumbers();


});
