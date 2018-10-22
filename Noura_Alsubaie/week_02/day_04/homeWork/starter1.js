
$(function(){

$('.zone').on('mouseover', function(event){
     $(this).css('background', 'green');
$(this).on('mouseleave', function(event){
    $(this).css('background', '');
})

$('.zone').click(function(event){
    $(this).off();
    $(this).css('background', 'green');
});
if ($('div.zone').css('background') === 'green') {
   alert("congrats!");
}
})
});