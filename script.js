
$(window).on('load', function() {
    $(`.pp`).show()
  $(`.pp`).animate({"opacity": "1"},3000);
  $(`.getH`).fadeOut(200);
  $(`#three`).fadeOut(2000);

})

$(function(){
 $('.buttons').on('click', function(){
  $(`.header`).slideUp(1000).delay(1000).slideDown(1000);

 })
})
$(function(){
 $('#one').on('mouseenter', function(){
  $(this).css({"color": "black"},2000).delay(2000);
  $(`#two`).css({"color": "black"},2000);
 })
})

$(function(){
  $('.buttons2').on('dblclick', function(){
   $(`#three`).fadeIn();
   $(`#three`).animate({height: "500px"});
   $(`.getH`).show()
  })
 })